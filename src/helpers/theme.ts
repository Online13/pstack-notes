/** Theme preference: system, light or dark. Applied before the first paint by BaseLayout's inline script. */
import { writeString } from "../services/storage/local-storage";
import { isOneOf } from "./assert";
import { requireElement } from "./dom";
import { setDropdownValue } from "./dropdown";
import type { ThemePref } from "../types/ui";

export const THEME_STORAGE_KEY = "pd-theme";
const THEME_PREFS: readonly ThemePref[] = ["system", "light", "dark"];

/** `dd` is the theme dropdown of the header. */
export function initThemeMenu(dd: HTMLElement) {
	const root = document.documentElement;
	const btn = requireElement(".ddbtn", HTMLElement, dd);
	const paint = (pref: ThemePref) => {
		setDropdownValue(dd, pref);
		btn.title = dd.querySelector(`[data-value="${pref}"] .ot`)?.textContent ?? "";
	};
	const saved = root.dataset.themePref;
	paint(isOneOf(saved, THEME_PREFS) ? saved : "system");
	dd.addEventListener("dd:change", (e) => {
		const pref = e.detail;
		if (!isOneOf(pref, THEME_PREFS)) return;
		writeString(THEME_STORAGE_KEY, pref);
		root.dataset.themePref = pref;
		if (pref === "system") delete root.dataset.theme;
		else root.dataset.theme = pref;
		paint(pref);
	});
}
