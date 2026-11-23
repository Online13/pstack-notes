/** Reads the catalog JSON embedded in the page, checking its shape. */
import { isOneOf, isRecord } from "../../../helpers/assert";
import { requireElement } from "../../../helpers/dom";
import type { Cost, Kind } from "../../../types/content";
import type { CatalogData, CatalogEntry } from "../type";

const KINDS: readonly Kind[] = ["pb", "sk", "pr", "ag", "loc", "ext", "tool", "bn"];
const COSTS: readonly Cost[] = [0, 1, 2, 3];

const isEntry = (v: unknown): v is CatalogEntry =>
	isRecord(v) &&
	typeof v.id === "string" &&
	isOneOf(v.kind, KINDS) &&
	COSTS.some((c) => c === v.cost) &&
	typeof v.label === "string" &&
	typeof v.color === "string" &&
	typeof v.search === "string";

const isEdge = (v: unknown): v is [string, string] =>
	Array.isArray(v) && v.length === 2 && v.every((x) => typeof x === "string");

const isCatalogData = (v: unknown): v is CatalogData =>
	isRecord(v) &&
	Array.isArray(v.kinds) &&
	v.kinds.every((k) => isOneOf(k, KINDS)) &&
	Array.isArray(v.items) &&
	v.items.every(isEntry) &&
	Array.isArray(v.edges) &&
	v.edges.every(isEdge);

export function readCatalogData(): CatalogData {
	const data: unknown = JSON.parse(requireElement("#catalog-data", HTMLScriptElement).text);
	if (!isCatalogData(data)) throw new Error("catalog data: unexpected shape");
	return data;
}
