/**
 * Call graph on concentric rings: the most-called item in the center, then rings of growing size,
 * ordered by in-degree. Each arrow means "calls". Principles only show when filtered on.
 * This file computes the layout; services/graph draws it. Nodes carry data-open, so a click opens the item.
 */
import { required } from "../../../helpers/assert";
import { renderGraph } from "../../../services/graph/graph";
import type { GraphLink, GraphNode } from "../../../types/graph";
import type { CatalogData, CatalogEntry } from "../type";

const RING_SIZES = [1, 6, 14, 26, 40, 999];
const RING_STEP = 150;
const NODE_ARC = 30;
const KIND_ORDER = ["pb", "sk", "loc", "pr", "ag", "tool", "ext", "bn"];

/** Position on the rings: x, y, angle around the center, ring radius. */
interface Pos {
	x: number;
	y: number;
	a: number;
	r: number;
}

/** Kept across redraws (filters, sort): the last clicked node stays highlighted. */
let selected: string | null = null;

export function drawCallGraph(
	box: HTMLElement,
	items: CatalogEntry[],
	data: CatalogData,
	{ showPrinciples }: { showPrinciples: boolean },
) {
	const W = box.clientWidth || 800,
		H = box.clientHeight || 500;
	const byId = new Map(data.items.map((n) => [n.id, n]));
	const entry = (id: string) => required(byId.get(id), `catalog entry "${id}"`);

	// nodes: items with at least one visible call; with few results, every result
	const allowed = new Set(items.filter((n) => n.kind !== "pr" || showPrinciples).map((n) => n.id));
	const ids = new Set<string>();
	data.edges.forEach(([a, b]) => {
		if (allowed.has(a) && allowed.has(b)) {
			ids.add(a);
			ids.add(b);
		}
	});
	if (items.length < 40) allowed.forEach((id) => ids.add(id));
	const edges = data.edges.filter(([a, b]) => ids.has(a) && ids.has(b));
	const indeg = new Map<string, number>();
	edges.forEach(([, t]) => indeg.set(t, (indeg.get(t) ?? 0) + 1));
	const degree = (id: string) => indeg.get(id) ?? 0;

	// rings
	const byLabel = (a: string, b: string) => entry(a).label.localeCompare(entry(b).label);
	const sorted = [...ids].sort((a, b) => degree(b) - degree(a) || byLabel(a, b));
	const rings: string[][] = [];
	let k = 0;
	RING_SIZES.forEach((size) => {
		if (k < sorted.length) {
			rings.push(sorted.slice(k, k + size));
			k += size;
		}
	});
	const pos = new Map<string, Pos>();
	const at = (id: string) => required(pos.get(id), `position of "${id}"`);
	let rMax = 0;
	rings.forEach((ring, ri) => {
		const [hub] = ring;
		if (ri === 0 && ring.length === 1 && hub !== undefined) {
			pos.set(hub, { x: 0, y: 0, a: -Math.PI / 2, r: 0 });
			return;
		}
		const R = Math.max(
			ri * RING_STEP,
			(ring.length * NODE_ARC) / (2 * Math.PI),
			ri > 0 ? rMax + RING_STEP * 0.75 : 0,
		);
		rMax = R;
		const kindRank = (id: string) => KIND_ORDER.indexOf(entry(id).kind);
		const ordered = ring.slice().sort((a, b) => kindRank(a) - kindRank(b) || byLabel(a, b));
		const offset = ri * 0.37;
		ordered.forEach((id, n) => {
			const a = offset + (n / ordered.length) * 2 * Math.PI - Math.PI / 2;
			pos.set(id, { x: R * Math.cos(a), y: R * Math.sin(a), a, r: R });
		});
	});
	const S = rMax + 175,
		m = Math.min(W, H);

	const radius = (id: string) => 5 + Math.min(11, Math.sqrt(degree(id)) * 2.4);
	/** Curved toward the center, ending at the target's edge. */
	const path = (s: string, t: string) => {
		const a = at(s),
			b = at(t);
		const mx = ((a.x + b.x) / 2) * 0.55,
			my = ((a.y + b.y) / 2) * 0.55;
		const d = Math.hypot(b.x - mx, b.y - my || 1);
		const qx = b.x - ((b.x - mx) / d) * (radius(t) + 3),
			qy = b.y - ((b.y - my) / d) * (radius(t) + 3);
		return `M${a.x},${a.y}Q${mx},${my} ${qx},${qy}`;
	};
	const nodes: GraphNode[] = [...ids].map((id) => {
		const p = at(id);
		return {
			id,
			x: p.x,
			y: p.y,
			angle: p.a,
			ring: p.r,
			size: radius(id),
			label: entry(id).label,
			color: `var(${entry(id).color})`,
			attrs: { "data-open": id },
		};
	});
	const links: GraphLink[] = edges.map(([s, t]) => ({ source: s, target: t, path: path(s, t) }));
	const ringRadii = rings.flatMap(([first]) => (first === undefined ? [] : [at(first).r])).filter((r) => r > 0);

	const svg = box.querySelector("svg");
	if (!(svg instanceof SVGSVGElement)) throw new Error("call graph: missing <svg>");
	renderGraph(
		svg,
		{
			viewBox: [(-S * W) / m, (-S * H) / m, (2 * S * W) / m, (2 * S * H) / m],
			rings: ringRadii,
			nodes,
			links,
		},
		{
			selected,
			onSelect: (id) => {
				selected = id;
			},
			minZoom: 0.4,
			maxZoom: 4,
		},
	);
}
