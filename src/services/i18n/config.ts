/**
 * Languages and localized URLs. Every page lives under its language (/fr/, /en/, /es/); the root redirects
 * to the visitor's language (components/templates/LanguageRedirect.astro). French is the source language
 * of the content; English is the fallback when the browser asks for none of these languages.
 */
import type { Lang, Section } from "../../types/i18n";

export const LANGS = ["fr", "en", "es"] as const satisfies readonly Lang[];
export const FALLBACK_LANG: Lang = "en";

export const LANG_NAMES: Record<Lang, string> = { fr: "Français", en: "English", es: "Español" };
/** BCP 47 locale of each language (sitemap, Open Graph, structured data). Keep in sync with astro.config.mjs. */
export const LOCALES: Record<Lang, string> = { fr: "fr-FR", en: "en-US", es: "es-ES" };

/** The site's sections, in navigation order. */
export const SECTIONS = ["home", "getting-started", "use-cases", "api"] as const satisfies readonly Section[];

/** One page per language: the `[lang]` route param and the page props. */
export const langStaticPaths = () => LANGS.map((lang) => ({ params: { lang }, props: { lang } }));

export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

/** URL of a section, or of the item fragments folder, in a language, e.g. href("en", "use-cases", "#case-bug"). */
export function href(lang: Lang, section: Section | "items", hash = ""): string {
	const path = section === "home" ? "/" : `/${section}/`;
	return `${BASE_PATH}/${lang}${path}${hash}`;
}

/** The site root, which redirects to a language. */
export const rootHref = (): string => `${BASE_PATH}/`;
