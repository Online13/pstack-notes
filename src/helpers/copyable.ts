/**
 * Click (or Enter/Space) on a .copyable block copies its command (its <code>, or its text).
 * The block gets .done for a moment, which turns its icon into a check mark.
 */
import { copyText } from "../services/clipboard/clipboard";
import { closestFrom } from "./dom";
import type { CopyLabels } from "../types/ui";

const textOf = (el: HTMLElement) => {
	const clone = (el.querySelector("code") ?? el).cloneNode(true);
	if (clone instanceof Element) clone.querySelectorAll(".cpy").forEach((n) => n.remove());
	return (clone.textContent ?? "").trim();
};

const timers = new WeakMap<HTMLElement, number>();
const copy = (el: HTMLElement, { copyLabel, copiedLabel }: CopyLabels) =>
	void copyText(textOf(el)).then(() => {
		el.classList.add("done");
		el.title = copiedLabel;
		clearTimeout(timers.get(el));
		timers.set(
			el,
			window.setTimeout(() => {
				el.classList.remove("done");
				el.title = copyLabel;
			}, 1400),
		);
	});

export function initCopyable(labels: CopyLabels) {
	document.addEventListener("click", (e) => {
		const el = closestFrom(e.target, ".copyable", HTMLElement);
		if (!el || closestFrom(e.target, "a, button:not(.copyable)", Element)) return;
		const sel = getSelection();
		if (sel && sel.toString().length > 2 && el.contains(sel.anchorNode)) return; // the visitor is selecting text
		copy(el, labels);
	});
	document.addEventListener("keydown", (e) => {
		const el = closestFrom(e.target, ".copyable", HTMLElement);
		if (el && (e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			copy(el, labels);
		}
	});
}
