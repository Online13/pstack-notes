import type { Lang, Section } from "../../types/i18n";
/** Languages and localized URLs. French is the source language and lives at the root. */

export const LANGS = ["fr", "en", "es"] as const satisfies readonly Lang[];
export const DEFAULT_LANG: Lang = "fr";

export const LANG_NAMES: Record<Lang, string> = { fr: "Français", en: "English", es: "Español" };
/** BCP 47 locale of each language (sitemap, Open Graph, structured data). Keep in sync with astro.config.mjs. */
export const LOCALES: Record<Lang, string> = { fr: "fr-FR", en: "en-US", es: "es-ES" };

/** The site's sections, in navigation order. */
export const SECTIONS = ["home", "getting-started", "use-cases", "api"] as const satisfies readonly Section[];

/** `[...lang]` route param: undefined for the default language. */
export const langParam = (lang: Lang): string | undefined => (lang === DEFAULT_LANG ? undefined : lang);
export const langStaticPaths = () => LANGS.map((lang) => ({ params: { lang: langParam(lang) }, props: { lang } }));

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

/** URL of a section, or of the item fragments folder, in a language, e.g. href("en", "use-cases", "#case-bug"). */
export function href(lang: Lang, section: Section | "items", hash = ""): string {
	const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
	const path = section === "home" ? "/" : `/${section}/`;
	return `${base}${prefix}${path}${hash}`;
}
