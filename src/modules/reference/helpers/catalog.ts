/** Catalog tab: search, filters, sort, and the table/graph switch. */
import { isOneOf } from "../../../helpers/assert";
import { findElements, requireData, requireElement } from "../../../helpers/dom";
import { setDropdownValue } from "../../../helpers/dropdown";
import type { CatalogEntry, CatalogView, SortKey } from "../type";
import { readCatalogData } from "./catalog-data";

const SORT_KEYS: readonly SortKey[] = ["name", "kind", "cost"];
const VIEWS: readonly CatalogView[] = ["table", "graph"];
const sortName = (n: CatalogEntry) => n.label.replace(/^\//, "").toLowerCase();

interface CatalogState {
	q: string;
	/** "" for every kind. */
	kind: string;
	/** "" for every cost, else the cost level as a string. */
	cost: string;
	sortKey: SortKey;
	/** 1 ascending, -1 descending. */
	sortDir: number;
	view: CatalogView;
}

export function initCatalog() {
	const data = readCatalogData();
	const state: CatalogState = { q: "", kind: "", cost: "", sortKey: "name", sortDir: 1, view: "table" };
	const search = requireElement("#q", HTMLInputElement);
	const kindDd = requireElement('[data-dropdown][data-name="kind"]', HTMLElement);
	const costDd = requireElement('[data-dropdown][data-name="cost"]', HTMLElement);
	const count = requireElement("[data-count]", HTMLElement);
	const reset = requireElement("[data-reset]", HTMLButtonElement);
	const graphHint = requireElement("[data-graph-hint]", HTMLElement);
	const table = requireElement("[data-table]", HTMLElement);
	const empty = requireElement("[data-empty]", HTMLElement);
	const graph = requireElement("[data-graph]", HTMLElement);
	const tbody = requireElement("tbody", HTMLTableSectionElement, table);
	const rows = new Map([...tbody.rows].map((r) => [requireData(r, "open"), r]));
	const viewButtons = findElements(".seg [data-view]", HTMLElement);
	const sortHeaders = findElements("th.sortable", HTMLElement, table);

	function filtered(): CatalogEntry[] {
		const q = state.q.trim().toLowerCase();
		const items = data.items.filter(
			(n) =>
				(!state.kind || n.kind === state.kind) &&
				(state.cost === "" || n.cost === Number(state.cost)) &&
				(!q || n.search.includes(q)),
		);
		const by = (x: CatalogEntry, y: CatalogEntry) =>
			state.sortKey === "cost"
				? x.cost - y.cost
				: state.sortKey === "kind"
					? data.kinds.indexOf(x.kind) - data.kinds.indexOf(y.kind)
					: sortName(x).localeCompare(sortName(y));
		return items.sort((x, y) => by(x, y) * state.sortDir || sortName(x).localeCompare(sortName(y)));
	}

	function render() {
		const items = filtered();
		const n = items.length;
		count.textContent = requireData(count, n > 1 ? "many" : "one").replace("{n}", String(n));
		reset.hidden = !(state.q || state.kind || state.cost !== "");
		graphHint.hidden = state.view !== "graph";
		viewButtons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === state.view)));

		table.hidden = state.view !== "table" || n === 0;
		empty.hidden = state.view !== "table" || n > 0;
		graph.hidden = state.view !== "graph";

		if (state.view === "table") {
			rows.forEach((r) => (r.hidden = true));
			items.forEach((it) => {
				const r = rows.get(it.id);
				if (!r) return;
				r.hidden = false;
				tbody.appendChild(r);
			});
			sortHeaders.forEach((th) => {
				const on = th.dataset.sort === state.sortKey;
				th.setAttribute("aria-sort", on ? (state.sortDir > 0 ? "ascending" : "descending") : "none");
				requireElement(".arr", HTMLElement, th).textContent = on ? (state.sortDir > 0 ? "↑" : "↓") : "";
			});
		} else {
			// d3 is only needed here: load it on first use
			void import("./call-graph").then(({ drawCallGraph }) => {
				if (state.view === "graph") drawCallGraph(graph, items, data, { showPrinciples: state.kind === "pr" });
			});
		}
	}

	search.addEventListener("input", () => {
		state.q = search.value;
		render();
	});
	kindDd.addEventListener("dd:change", (e) => {
		state.kind = e.detail;
		render();
	});
	costDd.addEventListener("dd:change", (e) => {
		state.cost = e.detail;
		render();
	});
	reset.addEventListener("click", () => {
		state.q = state.kind = state.cost = "";
		search.value = "";
		setDropdownValue(kindDd, "");
		setDropdownValue(costDd, "");
		render();
	});
	viewButtons.forEach((b) =>
		b.addEventListener("click", () => {
			const view = b.dataset.view;
			if (!isOneOf(view, VIEWS)) return;
			state.view = view;
			render();
		}),
	);
	sortHeaders.forEach((th) =>
		th.addEventListener("click", () => {
			const key = th.dataset.sort;
			if (!isOneOf(key, SORT_KEYS)) return;
			if (state.sortKey === key) state.sortDir = -state.sortDir;
			else {
				state.sortKey = key;
				state.sortDir = key === "cost" ? -1 : 1;
			}
			render();
		}),
	);
}
