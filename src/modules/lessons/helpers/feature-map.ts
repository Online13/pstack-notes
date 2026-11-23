/** Feature map lesson: tabs, tree rows and links inside the files all switch the visible example file. */
import { closestFrom, findElements } from "../../../helpers/dom";

function show(k: number) {
	findElements("[data-fmt]", HTMLElement).forEach((tab) => {
		const on = Number(tab.dataset.fmt) === k;
		tab.setAttribute("aria-selected", String(on));
		const bar = tab.parentElement;
		if (on && bar)
			bar.scrollTo({ left: tab.offsetLeft - bar.clientWidth / 2 + tab.offsetWidth / 2, behavior: "smooth" });
	});
	findElements("[data-fm-file]", HTMLElement).forEach((p) => {
		p.hidden = Number(p.dataset.fmFile) !== k;
		if (!p.hidden) p.scrollTop = 0;
	});
	findElements(".ftree [data-fmf]", HTMLElement).forEach((row) =>
		row.classList.toggle("hl", Number(row.dataset.fmf) === k),
	);
}

export function initFeatureMap() {
	document.addEventListener("click", (e) => {
		const b = closestFrom(e.target, "[data-fmt], [data-fmf]", HTMLElement);
		if (!b) return;
		show(Number(b.dataset.fmt ?? b.dataset.fmf));
		if (b.classList.contains("mdlink")) {
			const doc = document.querySelector(".fdoc");
			if (doc && doc.getBoundingClientRect().top < 0) doc.scrollIntoView({ block: "start", behavior: "smooth" });
		}
	});
}
