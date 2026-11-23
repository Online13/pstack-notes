/**
 * Draws a node-link graph in an SVG with d3: rings, curved arrows, labels, zoom and pan, and
 * neighbour highlighting on hover. The caller computes the layout; this module only renders it.
 */
import { select } from "d3-selection";
import { zoom, type D3ZoomEvent } from "d3-zoom";
import type { GraphLink, GraphModel, GraphNode, GraphOptions } from "../../types/graph";

export function renderGraph(svgEl: SVGSVGElement, model: GraphModel, opts: GraphOptions): void {
	let selected = opts.selected;
	const svg = select(svgEl);
	svg.selectAll("*").remove();
	svg.attr("viewBox", model.viewBox.join(","));

	svg.append("defs")
		.append("marker")
		.attr("id", "arr")
		.attr("viewBox", "0 -4 8 8")
		.attr("refX", 8)
		.attr("markerWidth", 6)
		.attr("markerHeight", 6)
		.attr("orient", "auto")
		.append("path")
		.attr("class", "garrow")
		.attr("d", "M0,-4L8,0L0,4");
	const root = svg.append("g");
	root
		.append("g")
		.attr("class", "grings")
		.selectAll("circle")
		.data(model.rings)
		.join("circle")
		.attr("r", (d) => d);
	svg.call(
		zoom<SVGSVGElement, unknown>()
			.scaleExtent([opts.minZoom, opts.maxZoom])
			.on("zoom", (e: D3ZoomEvent<SVGSVGElement, unknown>) => root.attr("transform", e.transform.toString())),
	);

	const link = root
		.append("g")
		.selectAll<SVGPathElement, GraphLink>("path")
		.data(model.links)
		.join("path")
		.attr("class", "glink")
		.attr("d", (l) => l.path)
		.attr("marker-end", "url(#arr)");
	const node = root
		.append("g")
		.selectAll<SVGGElement, GraphNode>("g")
		.data(model.nodes)
		.join("g")
		.attr("class", "gnode")
		.attr("transform", (n) => `translate(${n.x},${n.y})`);
	node.each(function (n) {
		Object.entries(n.attrs ?? {}).forEach(([k, v]) => this.setAttribute(k, v));
	});
	node
		.append("circle")
		.attr("r", (n) => n.size)
		.style("fill", (n) => n.color);
	node
		.append("text")
		.attr("dy", "0.35em")
		.text((n) => n.label)
		.each(function (n) {
			const t = select(this),
				r = n.size + 6;
			if (n.ring === 0) {
				t.attr("y", n.size + 14)
					.attr("dy", "0.7em")
					.attr("text-anchor", "middle")
					.classed("hub", true);
				return;
			}
			const left = Math.cos(n.angle) < 0;
			const deg = (n.angle * 180) / Math.PI + (left ? 180 : 0);
			t.attr("transform", `rotate(${deg})`)
				.attr("x", left ? -r : r)
				.attr("text-anchor", left ? "end" : "start");
		});

	const neighbours = (id: string) => {
		const s = new Set([id]);
		model.links.forEach((l) => {
			if (l.source === id) s.add(l.target);
			if (l.target === id) s.add(l.source);
		});
		return s;
	};
	const highlight = (id: string | null) => {
		if (!id) {
			node.classed("dim", false);
			link.classed("dim", false).classed("hot", false);
			return;
		}
		const s = neighbours(id);
		node.classed("dim", (n) => !s.has(n.id));
		link
			.classed("dim", (l) => l.source !== id && l.target !== id)
			.classed("hot", (l) => l.source === id || l.target === id);
	};
	node
		.on("mouseenter", (_, n) => highlight(n.id))
		.on("mouseleave", () => highlight(selected))
		.on("click", (_, n) => {
			selected = n.id;
			highlight(n.id);
			opts.onSelect(n.id);
		});
	if (selected && model.nodes.some((n) => n.id === selected)) highlight(selected);
}
