/** Languages, sections and translatable text. */

export type Lang = "fr" | "en" | "es";

/** The site's sections. */
export type Section = "home" | "getting-started" | "use-cases" | "api" | "about";

/** A piece of content in French and English. A plain string is the same in every language. */
export type Text = string | { fr: string; en: string; es?: string };

/** Singular and plural form of a string; "{n}" is replaced by the count. */
export type Plural = readonly [one: string, many: string];
