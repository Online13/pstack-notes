/** Client-side interface types shared by the helpers and components. */

export type ThemePref = "system" | "light" | "dark";

/** Title of a copy block before and after copying. */
export interface CopyLabels {
	copyLabel: string;
	copiedLabel: string;
}

/** Renders a Markdown link from its (escaped) text and its target. */
export type LinkRenderer = (text: string, target: string) => string;
