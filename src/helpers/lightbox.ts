/** Image preview. Triggers: [data-lightbox] with data-full (image URL), data-caption and data-source (link to the talk). */
import { closestFrom } from "./dom";

let returnFocus: HTMLElement | null = null;

const el = <K extends keyof HTMLElementTagNameMap>(
	tag: K,
	props: Partial<HTMLElementTagNameMap[K]> = {},
	...kids: (Node | string)[]
) => {
	const n = Object.assign(document.createElement(tag), props);
	n.append(...kids);
	return n;
};

function close(box: HTMLElement) {
	box.hidden = true;
	box.replaceChildren();
	document.body.style.overflow = "";
	returnFocus?.focus({ preventScroll: true });
	returnFocus = null;
}

function open(box: HTMLElement, trigger: HTMLElement) {
	const { full = "", caption = "", source = "" } = trigger.dataset;
	const closeBtn = el("button", { type: "button", className: "lb-x", textContent: "×" });
	closeBtn.setAttribute("aria-label", box.dataset.close ?? "");
	const link = el("a", { href: source, target: "_blank", rel: "noopener" }, `${box.dataset.sourceLabel ?? ""} ↗`);
	const figure = el(
		"figure",
		{ className: "float" },
		el("img", { src: full, alt: caption }),
		el("figcaption", { className: "srcnote" }, `${caption} — `, link),
	);
	figure.setAttribute("role", "dialog");
	figure.setAttribute("aria-modal", "true");
	figure.setAttribute("aria-label", caption);
	box.replaceChildren(closeBtn, figure);
	box.hidden = false;
	document.body.style.overflow = "hidden";
	returnFocus = trigger;
	closeBtn.focus();
}

/** `box` is the preview container (components/organisms/Lightbox.astro). */
export function initLightbox(box: HTMLElement) {
	document.addEventListener("click", (e) => {
		const t = closestFrom(e.target, "[data-lightbox]", HTMLElement);
		if (t) open(box, t);
	});
	box.addEventListener("click", (e) => {
		if (e.target === box || closestFrom(e.target, ".lb-x", Element)) close(box);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && !box.hidden) close(box);
	});
}
