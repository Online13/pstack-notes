// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// Static site. French lives at the root, English under /en/, Spanish under /es/ (see src/services/i18n/config.ts).
export default defineConfig({
	// Public URL of the site, for canonical URLs, Open Graph and the sitemap. SITE_URL overrides it (e.g. a preview).
	site: process.env.SITE_URL ?? "https://pstack-notes.nekena-rayane.com",
	trailingSlash: "always",
	integrations: [
		sitemap({
			// item details are fragments loaded by the pages, not pages (see src/services/seo/seo.ts)
			filter: (page) => !/\/items\//.test(new URL(page).pathname),
			i18n: { defaultLocale: "fr", locales: { fr: "fr-FR", en: "en-US", es: "es-ES" } },
		}),
	],
});
