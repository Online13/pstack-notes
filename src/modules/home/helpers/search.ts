/**
 * Home search: filters the entries embedded in the page as you type. While something matches, the results take
 * the place of the index of pstack, grouped by section, best group first, query words marked. While the box is
 * empty and not focused, its placeholder types real queries one after the other. A catalog item
 * opens the item panel (data-open), the other results are links. Arrow keys move through the results.
 */
import { isRecord } from "../../../helpers/assert";
import { findElements, requireData, requireElement } from "../../../helpers/dom";
import type { SearchEntry } from "../type";
import { reducedMotion } from "../../../helpers/motion";
import { matchRanges, searchText } from "./search-text";

/** Results shown per group before its "show more" button. */
const PER_GROUP = 5;
/** A group hides results only when it would hide at least this many: a button for one or two is noise. */
const MIN_HIDDEN = 3;

const isEntry = (v: unknown): v is SearchEntry =>
	isRecord(v) &&
	typeof v.label === "string" &&
	typeof v.group === "string" &&
	typeof v.meta === "string" &&
	typeof v.desc === "string" &&
	typeof v.color === "string" &&
	typeof v.search === "string" &&
	(typeof v.open === "string") !== (typeof v.href === "string");

function readEntries(): SearchEntry[] {
	const data: unknown = JSON.parse(requireElement("#search-data", HTMLScriptElement).text);
	if (!Array.isArray(data) || !data.every(isEntry)) throw new Error("search data: unexpected shape");
	return data;
}

const wordsOf = (query: string) => searchText(query.trim()).split(/\s+/).filter(Boolean);

/** Entries holding every word of the query; names starting with the query first, then names containing it. */
function find(entries: SearchEntry[], query: string): SearchEntry[] {
	const q = searchText(query.trim()).replace(/^\//, "");
	const words = wordsOf(query);
	if (words.length === 0) return [];
	const rank = (e: SearchEntry) => {
		const label = searchText(e.label).replace(/^\//, "");
		return label.startsWith(q) ? 0 : label.includes(q) ? 1 : 2;
	};
	return entries
		.filter((e) => words.every((w) => e.search.includes(w)))
		.map((e, i) => ({ e, i, r: rank(e) }))
		.sort((a, b) => a.r - b.r || a.i - b.i)
		.map(({ e }) => e);
}

/** Results by group, the group of the best result first. */
function byGroup(found: SearchEntry[]): [string, SearchEntry[]][] {
	const groups = new Map<string, SearchEntry[]>();
	for (const e of found) {
		const list = groups.get(e.group);
		if (list) list.push(e);
		else groups.set(e.group, [e]);
	}
	return [...groups];
}

function span(className: string, text: string, words: readonly string[]): HTMLSpanElement {
	const el = document.createElement("span");
	el.className = className;
	let at = 0;
	for (const [start, end] of matchRanges(text, words)) {
		const mark = document.createElement("mark");
		mark.textContent = text.slice(start, end);
		el.append(text.slice(at, start), mark);
		at = end;
	}
	el.append(text.slice(at));
	return el;
}

function resultElement(e: SearchEntry, words: readonly string[]): HTMLLIElement {
	const el = document.createElement(e.open === undefined ? "a" : "button");
	el.className = "sr";
	if (el instanceof HTMLAnchorElement && e.href !== undefined) el.href = e.href;
	if (el instanceof HTMLButtonElement && e.open !== undefined) {
		el.type = "button";
		el.dataset.open = e.open;
	}
	const dot = document.createElement("span");
	dot.className = "sr-dot";
	dot.style.setProperty("--kind", `var(${e.color})`);
	const meta = document.createElement("span");
	meta.className = "sr-meta";
	meta.textContent = e.meta;
	el.append(dot, span("sr-label", e.label, words), meta, span("sr-desc", e.desc, words));
	const li = document.createElement("li");
	li.append(el);
	return li;
}

const TYPE_MS = 70;
const ERASE_MS = 30;
const HOLD_MS = 1800;

function readIdeas(input: HTMLInputElement): string[] {
	const data: unknown = JSON.parse(requireData(input, "ideas"));
	if (!Array.isArray(data) || !data.every((x) => typeof x === "string")) throw new Error("search ideas: not strings");
	return data;
}

/** Types each idea into the placeholder, holds it, erases it. Stops while the box is in use; off with reduced motion. */
function typeIdeas(input: HTMLInputElement, ideas: string[]) {
	if (ideas.length === 0 || reducedMotion()) return;
	const base = input.placeholder;
	let index = 0;
	let shown = 0;
	let erasing = false;
	const tick = () => {
		if (document.activeElement === input || input.value) {
			input.placeholder = base;
			shown = 0;
			erasing = false;
			setTimeout(tick, HOLD_MS);
			return;
		}
		const idea = ideas[index % ideas.length] ?? "";
		if (!erasing && shown === idea.length) {
			erasing = true;
			setTimeout(tick, HOLD_MS);
			return;
		}
		if (erasing && shown === 0) {
			erasing = false;
			index++;
		}
		shown += erasing ? -1 : 1;
		input.placeholder = idea.slice(0, shown);
		setTimeout(tick, erasing ? ERASE_MS : TYPE_MS);
	};
	setTimeout(tick, HOLD_MS / 2);
}

export function initHomeSearch(root: HTMLElement) {
	const entries = readEntries();
	const input = requireElement("input[type=search]", HTMLInputElement, root);
	const found = requireElement("[data-results]", HTMLElement, root);
	const status = requireElement("[data-status]", HTMLElement, root);
	const more = requireData(found, "more");
	/** Groups opened with their "show more" button; cleared when the query changes. */
	const expanded = new Set<string>();

	const results = () => findElements(".sr", HTMLElement, found);

	function groupElement(name: string, list: SearchEntry[], words: readonly string[]): HTMLElement {
		const section = document.createElement("section");
		section.className = "hm-group";
		section.dataset.group = name;
		const title = document.createElement("h2");
		const count = document.createElement("span");
		count.textContent = String(list.length);
		title.append(name, " ", count);
		const ol = document.createElement("ol");
		ol.className = "hm-results";
		const collapse = !expanded.has(name) && list.length - PER_GROUP >= MIN_HIDDEN;
		const shown = collapse ? list.slice(0, PER_GROUP) : list;
		ol.append(...shown.map((e) => resultElement(e, words)));
		section.append(title, ol);
		if (shown.length < list.length) {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "hm-more";
			button.textContent = more.replace("{n}", String(list.length - shown.length));
			button.addEventListener("click", () => {
				expanded.add(name);
				render();
				/* keep the focus where the button was: on the first result it revealed */
				const again = findElements(".hm-group", HTMLElement, found).find((g) => g.dataset.group === name);
				if (again) findElements(".sr", HTMLElement, again)[PER_GROUP]?.focus();
			});
			section.append(button);
		}
		return section;
	}

	function render() {
		const query = input.value.trim();
		const words = wordsOf(query);
		const hits = find(entries, query);
		found.replaceChildren(...byGroup(hits).map(([name, list]) => groupElement(name, list, words)));
		found.hidden = hits.length === 0;
		root.toggleAttribute("data-searching", hits.length > 0);
		const n = hits.length;
		status.textContent = !query
			? ""
			: n === 0
				? requireData(status, "empty").replace("{q}", query)
				: requireData(status, n > 1 ? "many" : "one").replace("{n}", String(n));
	}

	/** Moves the focus through the input and the results with the arrow keys. */
	function move(from: number, step: number) {
		const items = results();
		const to = from + step;
		if (to < 0) input.focus();
		else items[Math.min(to, items.length - 1)]?.focus();
	}

	input.addEventListener("input", () => {
		expanded.clear();
		render();
	});
	input.addEventListener("keydown", (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault();
			move(-1, 1);
		} else if (e.key === "Enter") {
			e.preventDefault();
			results()[0]?.click();
		}
	});
	found.addEventListener("keydown", (e) => {
		const index = results().findIndex((el) => el === document.activeElement);
		if (e.key === "Escape") {
			input.focus();
			return;
		}
		if (index < 0) return;
		if (e.key === "ArrowDown" || e.key === "ArrowUp") {
			e.preventDefault();
			move(index, e.key === "ArrowDown" ? 1 : -1);
		}
	});
	/* the browser may restore the query when coming back to the page */
	render();
	/* the header's search pill and the "/" shortcut lead here from the other pages; pageshow comes after the
	   browser has finished placing the page, so the focus stays (and it fires again on a back/forward restore) */
	addEventListener("pageshow", () => {
		if (location.hash === "#search") input.focus({ preventScroll: true });
	});
	typeIdeas(input, readIdeas(input));
}
