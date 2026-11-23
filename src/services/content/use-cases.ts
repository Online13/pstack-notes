/** Use cases: one card per situation, grouped, with the recipes each one runs and what it costs. */
import { getCollection, type CollectionEntry } from "astro:content";
import { localize, translatePhrase } from "../i18n/localize";
import { caseUnits, mentions, reachableFromCase } from "../../helpers/call-tree";
import { getItem, getSteps, localizeSteps, rawTrees } from "./catalog";
import { getOrdered } from "./store";
import type { CaseUnit, Cost, TreeNode, UseCase, UseCaseGroup, UseCaseLink } from "../../types/content";
import type { Lang } from "../../types/i18n";

type Entry = CollectionEntry<"useCases">;

/** A case costs as much as the heaviest item it can reach (principles excluded). */
async function caseCost(root: TreeNode, lang: Lang): Promise<Cost> {
	let max: Cost = 0;
	for (const id of reachableFromCase(root, await rawTrees())) {
		const item = await getItem(id, lang);
		if (item && item.kind !== "pr" && item.cost > max) max = item.cost;
	}
	return max;
}

async function toUseCase(e: Entry, lang: Lang): Promise<UseCase> {
	const units: CaseUnit[] = [];
	for (const { node, via, cond } of caseUnits(e.data.root)) {
		const item = node.ref ? await getItem(node.ref, lang) : undefined;
		if (item)
			units.push({ item, steps: await getSteps(item.id, lang), via, cond: cond && translatePhrase(cond, lang) });
		else units.push({ text: translatePhrase(node.text ?? "", lang), steps: localizeSteps(node.kids, lang) });
	}
	return {
		id: e.id,
		title: localize(e.data.title, lang),
		when: localize(e.data.when, lang),
		prompt: e.data.prompt,
		cost: await caseCost(e.data.root, lang),
		units,
	};
}

/** Every group, in display order, with its cases. */
export async function listUseCaseGroups(lang: Lang): Promise<UseCaseGroup[]> {
	const [groups, cases] = await Promise.all([getOrdered("useCaseGroups"), getOrdered("useCases")]);
	const unknown = cases.find((c) => !groups.some((g) => g.id === c.data.group));
	if (unknown) throw new Error(`use case "${unknown.id}": unknown group "${unknown.data.group}"`);
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
		.filter((u) => u.id !== "router" && mentions(u.data.root, id, trees))
		.map((u) => ({ id: u.id, title: localize(u.data.title, lang) }));
}
