/** Header: the bottom sheet menu on phones, and --hdr (header height, used for sticky offsets). */
import { closestFrom, requireElement } from "./dom";

export function initHeader(header: HTMLElement) {
	const root = document.documentElement;
	const menuBtn = requireElement("#menuBtn", HTMLButtonElement, header);
	const nav = requireElement("#sections", HTMLElement, header);
	const sheetBg = requireElement("#sheetBg", HTMLElement, header);
	const setSheet = (on: boolean) => {
		document.body.classList.toggle("sheet-open", on);
		sheetBg.hidden = !on;
		menuBtn.setAttribute("aria-expanded", String(on));
	};
	menuBtn.addEventListener("click", (e) => {
		e.stopPropagation();
		setSheet(!document.body.classList.contains("sheet-open"));
	});
	sheetBg.addEventListener("click", () => setSheet(false));
	nav.addEventListener("click", (e) => {
		if (closestFrom(e.target, "a", HTMLAnchorElement)) setSheet(false);
	});
	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && document.body.classList.contains("sheet-open")) setSheet(false);
	});
	matchMedia("(min-width: 761px)").addEventListener("change", (m) => {
		if (m.matches) setSheet(false);
	});

	const setHeaderHeight = () => root.style.setProperty("--hdr", `${header.offsetHeight}px`);
	setHeaderHeight();
	addEventListener("resize", setHeaderHeight);
}
