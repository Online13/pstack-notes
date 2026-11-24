/** Use cases: one card per situation, grouped, with the recipes each one runs and what it costs. */
import { getCollection, type CollectionEntry } from "astro:content";
import { localize, translatePhrase } from "../i18n/localize";
import { mentions, reachableFromBlocks } from "../../helpers/call-tree";
import { getItem, getSteps, hasItem, localizeSteps, rawTrees } from "./catalog";
import { getOrdered } from "./store";
import type { CaseBlock, Cost, UseCase, UseCaseGroup, UseCaseLink } from "../../types/content";
import type { Lang } from "../../types/i18n";

type Entry = CollectionEntry<"useCases">;
type SourceBlock = Entry["data"]["blocks"][number];

/** A case costs as much as the heaviest item it can reach (principles excluded). */
async function caseCost(blocks: SourceBlock[], lang: Lang): Promise<Cost> {
	let max: Cost = 0;
	for (const id of reachableFromBlocks(blocks, await rawTrees())) {
		const item = await getItem(id, lang);
		if (item && item.kind !== "pr" && item.cost > max) max = item.cost;
	}
	return max;
}

async function toBlock(b: SourceBlock, lang: Lang): Promise<CaseBlock> {
	const note = b.note && localize(b.note, lang);
	const item = b.ref ? await getItem(b.ref, lang) : undefined;
	if (item) return { item, steps: await getSteps(item.id, lang), via: b.via, prompt: b.prompt, note };
	return { text: translatePhrase(b.text ?? "", lang), steps: localizeSteps(b.kids, lang), note };
}

async function toUseCase(e: Entry, lang: Lang): Promise<UseCase> {
	return {
		id: e.id,
		title: localize(e.data.title, lang),
		when: localize(e.data.when, lang),
		cost: await caseCost(e.data.blocks, lang),
		blocks: await Promise.all(e.data.blocks.map((b) => toBlock(b, lang))),
	};
}

/** Checks that every block, router and step of the cases points to a catalog item. */
async function checkRefs(cases: Entry[]) {
	for (const c of cases) {
		const ids = [...reachableFromBlocks(c.data.blocks, new Map()), ...c.data.blocks.flatMap((b) => b.via ?? [])];
		for (const id of ids) if (!(await hasItem(id))) throw new Error(`use case "${c.id}": unknown item "${id}"`);
	}
}

/** Every group, in display order, with its cases. */
export async function listUseCaseGroups(lang: Lang): Promise<UseCaseGroup[]> {
	const [groups, cases] = await Promise.all([getOrdered("useCaseGroups"), getOrdered("useCases")]);
	const unknown = cases.find((c) => !groups.some((g) => g.id === c.data.group));
	if (unknown) throw new Error(`use case "${unknown.id}": unknown group "${unknown.data.group}"`);
	await checkRefs(cases);
	const result: UseCaseGroup[] = [];
	for (const g of groups) {
		const mine = cases.filter((c) => c.data.group === g.id);
		if (mine.length)
			result.push({
				id: g.id,
				name: localize(g.data.name, lang),
				cases: await Promise.all(mine.map((c) => toUseCase(c, lang))),
			});
	}
	return result;
}

export async function countUseCases(): Promise<number> {
	return (await getCollection("useCases")).length;
}

/**
 * Use cases whose tree mentions the item, directly or one level down through a referenced tree.
 * The router case is skipped: it mentions everything.
 */
export async function useCasesWith(id: string, lang: Lang): Promise<UseCaseLink[]> {
	const trees = await rawTrees();
	return (await getOrdered("useCases"))
		.filter((u) => u.id !== "router" && u.data.blocks.some((b) => b.via === id || mentions(b, id, trees)))
		.map((u) => ({ id: u.id, title: localize(u.data.title, lang) }));
}
