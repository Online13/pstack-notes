/**
 * Call trees: what an item does step by step. A node is either a reference to a catalog item (`ref`) or a
 * plain step (`text`), optionally under a condition, with optional children. Pure functions, no data access.
 */
import type { StepRef, TreeNode, Trees } from "../types/content";

/** Every reference in a list of nodes, recursively. */
export function refsIn(nodes: TreeNode[] | undefined, acc = new Set<string>()): Set<string> {
	(nodes ?? []).forEach((n) => {
		if (n.ref) acc.add(n.ref);
		refsIn(n.kids, acc);
	});
	return acc;
}

/**
 * Call edges [caller, callee]. A reference's children belong to the referenced item;
 * a step's children belong to the owner.
 */
export function callEdges(trees: Trees): [string, string][] {
	const edges = new Map<string, Set<string>>();
	const link = (from: string, to: string) => edges.set(from, (edges.get(from) ?? new Set()).add(to));
	const walk = (owner: string, nodes: TreeNode[] = []) =>
		nodes.forEach((n) => {
			if (n.ref) {
				link(owner, n.ref);
				walk(n.ref, n.kids);
			} else walk(owner, n.kids);
		});
	trees.forEach((nodes, owner) => walk(owner, nodes));
	return [...edges].flatMap(([a, set]) => [...set].map((b): [string, string] => [a, b]));
}

export function firstSteps(steps: TreeNode[]): Map<string, StepRef> {
	const found = new Map<string, StepRef>();
	steps.forEach((n, index) => {
		if (n.ref && !found.has(n.ref)) found.set(n.ref, { index, cond: n.cond });
		const visit = (x: TreeNode) => {
			if (x.ref && !found.has(x.ref)) found.set(x.ref, { index, text: n.text, cond: x.cond });
			(x.kids ?? []).forEach(visit);
		};
		(n.kids ?? []).forEach(visit);
	});
	return found;
}

/** Every item a use case can reach: its blocks, their own trees, and their children. */
export function reachableFromBlocks(blocks: TreeNode[], trees: Trees): Set<string> {
	const ids = new Set<string>();
	blocks.forEach((block) => {
		if (block.ref) {
			ids.add(block.ref);
			refsIn(trees.get(block.ref), ids);
		}
		refsIn(block.kids, ids);
	});
	return ids;
}

/** True when the tree mentions the item, directly or one level down through a referenced tree. */
export function mentions(root: TreeNode, id: string, trees: Trees): boolean {
	const plain = (n: TreeNode): boolean => n.ref === id || (n.kids ?? []).some(plain);
	const scan = (n: TreeNode): boolean =>
		n.ref === id || (n.kids ? n.kids.some(scan) : n.ref ? (trees.get(n.ref) ?? []).some(plain) : false);
	return scan(root);
}

/** The first reference that points to no known item, if any. */
export function findUnknownRef(
	trees: Trees,
	known: (id: string) => boolean,
): { owner: string; ref: string } | undefined {
	for (const [owner, nodes] of trees) {
		const ref = [...refsIn(nodes)].find((r) => !known(r));
		if (ref) return { owner, ref };
	}
	return undefined;
}
