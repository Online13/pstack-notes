/** Use case cards remember which ones are open; #case-<id> opens one and scrolls to it. */
import { scrollBehavior } from "../../../helpers/motion";
import { isStringArray } from "../../../helpers/assert";
import { findElements, requireData } from "../../../helpers/dom";
import { readJson, writeJson } from "../../../services/storage/local-storage";

const STORAGE_KEY = "pd-cases";

export function initUseCases() {
	const cards = findElements("details.case", HTMLDetailsElement);
	const open = new Set(readJson(STORAGE_KEY, isStringArray, []));

	cards.forEach((card) => {
		const id = requireData(card, "case");
		card.open = open.has(id);
		card.addEventListener("toggle", () => {
			if (card.open) open.add(id);
			else open.delete(id);
			writeJson(STORAGE_KEY, [...open]);
		});
	});

	const openFromHash = () => {
		const card = location.hash.startsWith("#case-") ? document.getElementById(location.hash.slice(1)) : null;
		if (!(card instanceof HTMLDetailsElement)) return;
		card.open = true;
		requestAnimationFrame(() => card.scrollIntoView({ behavior: scrollBehavior(), block: "start" }));
	};
	openFromHash();
	addEventListener("hashchange", openFromHash);
}
