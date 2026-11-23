/** Language choice: the root page redirects to it (components/templates/LanguageRedirect.astro). */
import { writeString } from "../services/storage/local-storage";
import { findElements } from "./dom";

export const LANG_STORAGE_KEY = "pd-lang";

/** `dd` is the language dropdown of the header: picking a language remembers it. */
export function initLanguageMenu(dd: HTMLElement): void {
	findElements("a[hreflang]", HTMLAnchorElement, dd).forEach((a) =>
		a.addEventListener("click", () => writeString(LANG_STORAGE_KEY, a.hreflang)),
	);
}
