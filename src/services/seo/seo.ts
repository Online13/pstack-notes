/**
 * Everything search engines and link previews read: title, description, canonical URL, language alternates,
 * Open Graph, Twitter card, structured data and robots.txt. Layouts call `getPageSeo` and render what it returns.
 * Absolute URLs come from the site URL (`site` in astro.config.mjs); without it they would stay relative.
 */
import { DEFAULT_LANG, LANGS, LOCALES, href } from "../i18n/config";
import { sharedMessages } from "../i18n/messages";
import type { Lang } from "../../types/i18n";
import type { PageSeo, PageSeoInput } from "../../types/seo";

export const SITE_NAME = "pstack notes";
const AUTHOR = "RATIARIVELO Nekena Rayane";
const IMAGE = { path: "/og-image.png", width: 1200, height: 630 };
/** Item details are HTML fragments loaded by the page, not pages to index. */
const FRAGMENTS = LANGS.map((lang) => href(lang, "items"));

const site = import.meta.env.SITE;
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const absolute = (path: string): string => (site ? new URL(path, site).href : path);
const ogLocale = (lang: Lang) => LOCALES[lang].replace("-", "_");

export function getPageSeo({ lang, section, title, description }: PageSeoInput): PageSeo {
	const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME;
	const url = absolute(href(lang, section));
	const image = absolute(`${base}${IMAGE.path}`);
	const imageAlt = `${SITE_NAME}, ${sharedMessages(lang).brandSub}`;

	const meta: PageSeo["meta"] = [
		{ name: "description", content: description },
		{ name: "author", content: AUTHOR },
		{ property: "og:type", content: "website" },
		{ property: "og:site_name", content: SITE_NAME },
		{ property: "og:title", content: fullTitle },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:locale", content: ogLocale(lang) },
		...LANGS.filter((l) => l !== lang).map((l) => ({ property: "og:locale:alternate", content: ogLocale(l) })),
		{ property: "og:image", content: image },
		{ property: "og:image:width", content: String(IMAGE.width) },
		{ property: "og:image:height", content: String(IMAGE.height) },
		{ property: "og:image:alt", content: imageAlt },
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: fullTitle },
		{ name: "twitter:description", content: description },
		{ name: "twitter:image", content: image },
		{ name: "twitter:image:alt", content: imageAlt },
	];

	const links: PageSeo["links"] = [
		{ rel: "canonical", href: url },
		...LANGS.map((l) => ({ rel: "alternate", hreflang: l, href: absolute(href(l, section)) })),
		{ rel: "alternate", hreflang: "x-default", href: absolute(href(DEFAULT_LANG, section)) },
	];

	const website = { "@type": "WebSite", name: SITE_NAME, url: absolute(href(lang, "home")) };
	const jsonLd = {
		"@context": "https://schema.org",
		...(section === "home"
			? { ...website, description, inLanguage: LOCALES[lang] }
			: { "@type": "WebPage", name: fullTitle, description, url, inLanguage: LOCALES[lang], isPartOf: website }),
		author: { "@type": "Person", name: AUTHOR },
	};

	return { title: fullTitle, meta, links, jsonLd: JSON.stringify(jsonLd).replace(/</g, "\\u003c") };
}

/** robots.txt: everything but the item fragments, and the sitemap when the site URL is known. */
export function robotsTxt(): string {
	const lines = ["User-agent: *", "Allow: /", ...FRAGMENTS.map((path) => `Disallow: ${path}`)];
	if (site) lines.push("", `Sitemap: ${absolute(`${base}/sitemap-index.xml`)}`);
	return lines.join("\n") + "\n";
}
