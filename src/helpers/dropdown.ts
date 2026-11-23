/**
 * Dropdowns rendered by components/molecules/Dropdown.astro.
 * Link options navigate; button options set the dropdown's value and fire "dd:change" ({ detail: value }).
 * Both events are typed in types/global.d.ts.
 */
import { closestFrom, findElements, requireElement } from "./dom";

export function setDropdownValue(dd: HTMLElement, value: string): void {
	dd.dataset.value = value;
	let selected: HTMLElement | undefined;
	findElements(".dd-option", HTMLElement, dd).forEach((o) => {
		const on = o.dataset.value === value;
		o.setAttribute("aria-selected", String(on));
		if (on) selected = o;
	});
	const label = selected?.querySelector(".ot")?.textContent ?? "";
	const shown = dd.querySelector(".ddv");
	if (shown) {
		shown.textContent = label;
		dd.querySelector(".ddbtn")?.setAttribute("aria-label", label);
	}
}

function setup(dd: HTMLElement) {
	const btn = requireElement(".ddbtn", HTMLButtonElement, dd);
	const menu = requireElement(".ddmenu", HTMLElement, dd);
	const options = () => findElements(".dd-option", HTMLElement, menu);
	const close = () => {
		menu.hidden = true;
		btn.setAttribute("aria-expanded", "false");
	};
	const open = () => {
		document.dispatchEvent(new CustomEvent("dd:open", { detail: dd }));
		menu.hidden = false;
		btn.setAttribute("aria-expanded", "true");
		const all = options();
		(all.find((o) => o.getAttribute("aria-selected") === "true") ?? all.at(0))?.focus({ preventScroll: true });
	};

	btn.addEventListener("click", (e) => {
		e.stopPropagation();
		if (menu.hidden) open();
		else close();
	});
	menu.addEventListener("click", (e) => {
		const value = closestFrom(e.target, ".dd-option", HTMLElement)?.dataset.value;
		if (value === undefined) return;
		e.stopPropagation();
		setDropdownValue(dd, value);
		dd.dispatchEvent(new CustomEvent("dd:change", { detail: value, bubbles: true }));
		close();
		btn.focus();
	});
	menu.addEventListener("keydown", (e) => {
		const all = options();
		const i = all.findIndex((o) => o === document.activeElement);
		const step = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
		if (step) {
			e.preventDefault();
			all.at((i + step) % all.length)?.focus();
		}
		if (e.key === "Escape" || e.key === "Tab") {
			e.stopPropagation();
			close();
			if (e.key === "Escape") btn.focus();
		}
	});
	document.addEventListener("click", (e) => {
		if (!(e.target instanceof Node) || !dd.contains(e.target)) close();
	});
	document.addEventListener("dd:open", (e) => {
		if (e.detail !== dd) close();
	});

	if (dd.dataset.value !== undefined && dd.dataset.name) setDropdownValue(dd, dd.dataset.value);
}

export function initDropdowns() {
	findElements("[data-dropdown]", HTMLElement).forEach(setup);
}
