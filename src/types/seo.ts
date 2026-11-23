/** What the SEO service needs and returns. */
import type { Lang, Section } from "./i18n";

export interface PageSeoInput {
	lang: Lang;
	section: Section;
	/** Page name; the home page has none and uses the site name alone. */
	title?: string;
	description: string;
}

export interface PageSeo {
	title: string;
	meta: { name?: string; property?: string; content: string }[];
	links: { rel: string; href: string; hreflang?: string }[];
	/** JSON-LD, already serialized and safe to put inside a <script>. */
	jsonLd: string;
}
