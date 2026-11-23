/**
 * Item details in a full-screen panel. Any [data-open="<id>"] on the page opens it. Inside the panel,
 * [data-ref] opens another item and keeps a back stack.
 */
import { closestFrom, requireData, requireElement } from "../../../helpers/dom";
import { hideTooltip } from "../../../helpers/tooltip";
import { fetchItemPanel } from "../services/item-panel";

/** The panel container; its data-src is the URL of the items folder in the page's language. */
let modal: HTMLElement | null = null;
let stack: string[] = [];
let currentId = "";
let returnFocus: Element | null = null;
let request = 0;

const panel = (): HTMLElement => {
	if (!modal) throw new Error("item modal: initItemModal() was not called");
	return modal;
};

async function show(id: string) {
	const box = panel();
	const mine = ++request;
	let html: string;
	try {
		html = await fetchItemPanel(requireData(box, "src"), id);
	} catch (err) {
		console.error("item details unavailable", err);
		return;
	}
	if (mine !== request) return;
	currentId = id;
	box.innerHTML = html;
	requireElement("[data-mback]", HTMLElement, box).hidden = stack.length === 0;
	box.hidden = false;
	document.body.style.overflow = "hidden";
	box.scrollTop = 0;
	requireElement("[data-mclose]", HTMLElement, box).focus({ preventScroll: true });
}

/** Opens an item; from inside the panel, `push` keeps the current one in the back stack. */
export function openItem(id: string, { push = false, from }: { push?: boolean; from?: Element } = {}): void {
	if (push && currentId) stack.push(currentId);
	else if (panel().hidden) stack = [];
	if (from) returnFocus = from;
	void show(id);
}

export function closeItem(): void {
	const box = panel();
	request++;
	box.hidden = true;
	box.replaceChildren();
	stack = [];
	currentId = "";
	document.body.style.overflow = "";
	const back = returnFocus;
	returnFocus = null;
	if (back instanceof HTMLElement && back.isConnected) setTimeout(() => back.focus({ preventScroll: true }));
}

/** `el` is the panel container (components/ItemModal.astro). */
export function initItemModal(el: HTMLElement): void {
	modal = el;

	// openers anywhere on the page (HTML or SVG elements, e.g. graph nodes)
	document.addEventListener("click", (e) => {
		const opener = closestFrom(e.target, "[data-open]", Element);
		if (!opener || opener.closest("#modal")) return;
		const id = opener.getAttribute("data-open");
		if (!id) return;
		e.preventDefault();
		e.stopPropagation();
		hideTooltip();
		openItem(id, { from: opener });
	});
	document.addEventListener("keydown", (e) => {
		const opener = closestFrom(e.target, "[data-open]", HTMLElement);
		if (
			opener &&
			!opener.closest("#modal") &&
			(e.key === "Enter" || e.key === " ") &&
			!(opener instanceof HTMLButtonElement)
		) {
			e.preventDefault();
			opener.click();
		}
	});

	// inside the panel
	const refOf = (e: Event) => closestFrom(e.target, "[data-ref]", HTMLElement);
	el.addEventListener("click", (e) => {
		const ref = refOf(e);
		if (ref) {
			e.stopPropagation();
			openItem(requireData(ref, "ref"), { push: true });
			return;
		}
		if (closestFrom(e.target, "[data-mback]", Element)) {
			const previous = stack.pop();
			if (previous) openItem(previous);
			return;
		}
		if (closestFrom(e.target, "[data-mclose], a[href]", Element)) {
			closeItem();
			return;
		}
		if (e.target === el || (e.target instanceof Element && e.target.matches(".mpanel, .mgrid, .mtop, .mright.empty")))
			closeItem();
	});
	el.addEventListener("keydown", (e) => {
		const ref = refOf(e);
		if (ref && e.key === "Enter") {
			e.stopPropagation();
			openItem(requireData(ref, "ref"), { push: true });
		}
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !el.hidden) closeItem();
	});
}
