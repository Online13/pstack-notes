/**
 * The pstack catalog: every skill, playbook, agent and principle, what each one does step by step,
 * and who calls whom. Everything is returned in the requested language.
 */
import type { CollectionEntry } from "astro:content";
import { localize, translatePhrase } from "../i18n/localize";
import { callEdges, findUnknownRef, firstSteps } from "../../helpers/call-tree";
import { kindColor, kindName } from "./kinds";
import { getOrdered } from "./store";
import type { CatalogItem, StepRef, TreeNode, Trees } from "../../types/content";
import type { Lang } from "../../types/i18n";

type Entry = CollectionEntry<"catalog">;

/** Loads the catalog and checks that every reference points to an item. */
async function load() {
	const entries = await getOrdered("catalog");
	const byId = new Map(entries.map((e) => [e.id, e]));
	const unknown = findUnknownRef(new Map(entries.map((e) => [e.id, e.data.steps ?? []])), (id) => byId.has(id));
	if (unknown) throw new Error(`catalog: "${unknown.owner}" calls unknown item "${unknown.ref}"`);
	return { entries, byId };
}

const toItem = (e: Entry, lang: Lang): CatalogItem => ({
	id: e.id,
	kind: e.data.kind,
	cost: e.data.cost,
	label: localize(e.data.label, lang),
	desc: localize(e.data.desc, lang),
	kindName: kindName(e.data.kind, lang),
	color: kindColor(e.data.kind),
	path: e.data.path,
});

/** Translates the steps' text and conditions. */
export const localizeSteps = (nodes: TreeNode[] | undefined, lang: Lang): TreeNode[] =>
	(nodes ?? []).map((n) => ({
		ref: n.ref,
		text: n.text === undefined ? undefined : translatePhrase(n.text, lang),
		cond: n.cond === undefined ? undefined : translatePhrase(n.cond, lang),
		kids: n.kids && localizeSteps(n.kids, lang),
	}));

/** Every item, in source order. */
export async function listItems(lang: Lang): Promise<CatalogItem[]> {
	const { entries } = await load();
	return entries.map((e) => toItem(e, lang));
}

export async function listItemIds(): Promise<string[]> {
	return (await load()).entries.map((e) => e.id);
}

export async function getItem(id: string, lang: Lang): Promise<CatalogItem | undefined> {
	const e = (await load()).byId.get(id);
	return e && toItem(e, lang);
}

/** Several items by id. Throws on an unknown id: ids come from the validated call trees. */
export async function getItems(ids: string[], lang: Lang): Promise<CatalogItem[]> {
	const { byId } = await load();
	return ids.map((id) => {
		const e = byId.get(id);
		if (!e) throw new Error(`catalog: unknown item "${id}"`);
		return toItem(e, lang);
	});
}

export async function hasItem(id: string): Promise<boolean> {
	return (await load()).byId.has(id);
}

/** What the item does, step by step. */
export async function getSteps(id: string, lang: Lang): Promise<TreeNode[]> {
	return localizeSteps((await load()).byId.get(id)?.data.steps, lang);
}

/** The call trees by owner (French, unlocalized), for the other content modules. */
export async function rawTrees(): Promise<Trees> {
	const { entries } = await load();
	return new Map(entries.map((e) => [e.id, e.data.steps ?? []]));
}

/** Call edges [caller, callee], for the graph. */
export async function listCallEdges(): Promise<[string, string][]> {
	return callEdges(await rawTrees());
}

/** Items this item calls. */
export async function callsOf(id: string): Promise<string[]> {
	return (await listCallEdges()).filter(([a]) => a === id).map(([, b]) => b);
}

/** Items that call this item. */
export async function callersOf(id: string): Promise<string[]> {
	return (await listCallEdges()).filter(([, b]) => b === id).map(([a]) => a);
}

/** Where, in the item's own steps, each called item first appears. */
export async function stepsOf(id: string, lang: Lang): Promise<Map<string, StepRef>> {
	return firstSteps(await getSteps(id, lang));
}
