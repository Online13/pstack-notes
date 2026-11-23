/**
 * Translation rules:
 * - content is written in French, with English next to it ({ fr, en });
 * - Spanish is never written by hand next to the content: it is the English text looked up in EN_ES;
 * - call tree steps are plain French phrases, translated through FR_EN.
 */
import { EN_ES } from "./dictionaries/en-es";
import { FR_EN } from "./dictionaries/fr-en";
import type { Lang, Plural, Text } from "../../types/i18n";

/** English -> Spanish. A phrase missing from the dictionary stays in English. */
const toEs = (en: string): string => EN_ES[en] ?? en;

/**
 * Deep-maps an English value to Spanish (strings are translated, other values are kept).
 * Generic deep map: the shape is unchanged, which TypeScript cannot express without casts.
 */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
export function deriveEs<T>(v: T): T {
	if (typeof v === "string") return toEs(v) as T;
	if (Array.isArray(v)) return v.map((x: unknown) => deriveEs(x)) as T;
	if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deriveEs(x)])) as T;
	return v;
}
/* eslint-enable @typescript-eslint/consistent-type-assertions */

export const localize = (text: Text, lang: Lang): string => {
	if (typeof text === "string") return text;
	if (lang === "es") return text.es ?? toEs(text.en || text.fr);
	return text[lang] || text.fr;
};

/** A French call tree phrase in the given language. */
export const translatePhrase = (fr: string, lang: Lang): string => {
	if (lang === "fr") return fr;
	const en = FR_EN[fr] ?? fr;
	return lang === "es" ? toEs(en) : en;
};

/**
 * Interface strings for every language. The French strings set the shape; Spanish defaults to the English
 * strings passed through EN_ES, and `es` overrides top-level keys where a hand-written version reads better.
 */
export function defineMessages<T extends object>(m: {
	fr: T;
	en: NoInfer<T>;
	es?: Partial<NoInfer<T>>;
}): (lang: Lang) => T {
	const byLang: Record<Lang, T> = { fr: m.fr, en: m.en, es: { ...deriveEs(m.en), ...m.es } };
	return (lang) => byLang[lang];
}

/** Picks the singular or plural form ([one, many]) and fills in "{n}". */
export const plural = ([one, many]: Plural, n: number): string => (n > 1 ? many : one).replace("{n}", String(n));
