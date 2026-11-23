/** Types of the API reference module. */
import type { Cost, Kind } from "../../types/content";

/** One catalog item as the client needs it to filter, sort and draw the graph. */
export interface CatalogEntry {
	id: string;
	kind: Kind;
	cost: Cost;
	label: string;
	/** CSS custom property holding the kind's color, e.g. "--k-pb". */
	color: string;
	/** Lower-cased label, id and description. */
	search: string;
}

/** The JSON that components/Catalog.astro embeds for the client. */
export interface CatalogData {
	kinds: Kind[];
	items: CatalogEntry[];
	/** [caller, callee] */
	edges: [string, string][];
}

export type SortKey = "name" | "kind" | "cost";
export type CatalogView = "table" | "graph";
