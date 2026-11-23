/** Catalog / guide tabs. #guide opens the guide. */
import { findElements, requireData, requireElement } from "../../../helpers/dom";

export function initTabs() {
	const tabs = findElements(".subnav [data-tab]", HTMLElement);
	const catalog = requireElement("#apiSkills", HTMLElement);
	const guide = requireElement("#apiGuide", HTMLElement);
	const show = (name: string) => {
		tabs.forEach((t) => t.setAttribute("aria-selected", String(t.dataset.tab === name)));
		catalog.hidden = name !== "catalog";
		guide.hidden = name !== "guide";
	};
	tabs.forEach((t) =>
		t.addEventListener("click", () => {
			const name = requireData(t, "tab");
			show(name);
			history.replaceState(null, "", name === "guide" ? "#guide" : location.pathname + location.search);
		}),
	);
	if (location.hash === "#guide") show("guide");
}
