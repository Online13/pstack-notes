/** Tooltip for anything with data-tip (chips, cost bars): bold title (data-tip-t) then the text. */
import { closestFrom } from "./dom";

let tip: HTMLElement | null = null;
let current: HTMLElement | null = null;

const place = (tip: HTMLElement, el: HTMLElement) => {
	const r = el.getBoundingClientRect();
	tip.style.left = "0px";
	tip.style.top = "0px";
	tip.hidden = false;
	const w = tip.offsetWidth,
		h = tip.offsetHeight;
	const x = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, innerWidth - w - 8));
	let y = r.top - h - 10;
	if (y < 8) y = r.bottom + 10;
	tip.style.left = `${x}px`;
	tip.style.top = `${y}px`;
};
const show = (el: HTMLElement) => {
	if (!tip) return;
	const title = document.createElement("b");
	title.textContent = el.dataset.tipT ?? "";
	tip.replaceChildren(title, el.dataset.tip ?? "");
	current = el;
	place(tip, el);
};
export const hideTooltip = () => {
	if (tip) tip.hidden = true;
	current = null;
};
const target = (e: Event) => closestFrom(e.target, "[data-tip]", HTMLElement);

/** `el` is the tooltip element (components/organisms/Tooltip.astro). */
export function initTooltip(el: HTMLElement) {
	tip = el;
	document.addEventListener("mouseover", (e) => {
		const t = target(e);
		if (t) {
			if (t !== current) show(t);
		} else if (current) hideTooltip();
	});
	document.addEventListener("focusin", (e) => {
		const t = target(e);
		if (t) show(t);
		else hideTooltip();
	});
	addEventListener("scroll", hideTooltip, true);
}
