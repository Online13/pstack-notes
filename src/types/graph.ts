/** A node-link graph laid out by the caller and drawn by the graph service. */

export interface GraphNode {
	id: string;
	x: number;
	y: number;
	/** Angle of the node around the center, used to orient its label. */
	angle: number;
	/** Radius of the node's ring; 0 for the hub in the center. */
	ring: number;
	size: number;
	label: string;
	/** Any CSS color, e.g. "var(--k-pb)". */
	color: string;
	/** Extra attributes on the node element, e.g. { "data-open": id }. */
	attrs?: Record<string, string>;
}

export interface GraphLink {
	source: string;
	target: string;
	/** SVG path data. */
	path: string;
}

export interface GraphModel {
	viewBox: [number, number, number, number];
	rings: number[];
	nodes: GraphNode[];
	links: GraphLink[];
}

export interface GraphOptions {
	/** Node kept highlighted when the pointer leaves the graph. */
	selected: string | null;
	onSelect: (id: string) => void;
	minZoom: number;
	maxZoom: number;
}
