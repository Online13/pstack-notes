// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Static site in /fr/, /en/ and /es/; the root redirects to the visitor's language (see src/services/i18n/config.ts).
export default defineConfig({
	// Public URL of the site, for canonical URLs, Open Graph and the sitemap. SITE_URL overrides it (e.g. a preview).
	site: process.env.SITE_URL ?? "https://pstack-notes.nekena-rayane.com",
	trailingSlash: "always",
	integrations: [
		sitemap({
			// not listed: item details (fragments loaded by the pages) and the root (it only redirects)
			filter: (page) => {
				const path = new URL(page).pathname;
				return path !== "/" && !/\/items\//.test(path);
			},
			i18n: { defaultLocale: "en", locales: { fr: "fr-FR", en: "en-US", es: "es-ES" } },
		}),
	],
});
