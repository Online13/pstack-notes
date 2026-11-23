/** Interface strings shared by every page (header, footer, cost bars, copy blocks, image preview). */
import { defineMessages } from "./localize";

/** One string per cost level. */
type Four = readonly [string, string, string, string];

export const sharedMessages = defineMessages({
	fr: {
		brandSub: "guide non officiel",
		sections: ["Accueil", "Getting started", "Use cases", "API reference"],
		typeThis: "À taper",
		theme: { system: "Système", light: "Clair", dark: "Sombre" },
		copy: { copy: "Cliquer pour copier", copied: "Copié" },
		costLabels: ["léger", "moyen", "lourd", "très lourd"] satisfies Four,
		costTips: [
			"Peu ou pas de sous-agent. Ça coûte peu de tokens.",
			"Lance un ou deux sous-agents.",
			"Plusieurs agents en parallèle, ou une longue boucle. Ça consomme beaucoup de tokens.",
			"Un agent par PR, plus une vérification et un audit réguliers. Le plus cher de pstack.",
		] satisfies Four,
		closeImage: "Fermer",
		imageSource: "Source de l'image",
		theTalk: "le talk sur X",
		footer: {
			/** "{author}" becomes a link to the author's site. */
			about: "Guide non officiel pour apprendre pstack, rédigé avec Claude par {author}. Tout le contenu vient du travail de Lauren Tan.",
			site: "Le site",
			src: "Sources",
			gh: "pstack sur GitHub",
			x: "Lauren Tan sur X",
			talk: "Le talk",
			post: "Le triangle sur X",
			note: "Site non officiel, sans lien avec Cursor ni avec l'autrice de pstack.",
			top: "Haut de page",
		},
	},
	en: {
		brandSub: "unofficial guide",
		sections: ["Home", "Getting started", "Use cases", "API reference"],
		typeThis: "Type this",
		theme: { system: "System", light: "Light", dark: "Dark" },
		copy: { copy: "Click to copy", copied: "Copied" },
		costLabels: ["light", "medium", "heavy", "very heavy"],
		costTips: [
			"Little or no subagent. Costs few tokens.",
			"Launches one or two subagents.",
			"Several agents in parallel, or a long loop. Uses a lot of tokens.",
			"One agent per PR, plus regular verification and audits. The most expensive part of pstack.",
		],
		closeImage: "Close",
		imageSource: "Image source",
		theTalk: "the talk on X",
		footer: {
			/** "{author}" becomes a link to the author's site. */
			about: "An unofficial guide to learn pstack, written with Claude by {author}. All the content comes from Lauren Tan's work.",
			site: "The site",
			src: "Sources",
			gh: "pstack on GitHub",
			x: "Lauren Tan on X",
			talk: "The talk",
			post: "The triangle on X",
			note: "Unofficial site, not affiliated with Cursor or with the author of pstack.",
			top: "Back to top",
		},
	},
	es: {
		theme: { system: "Sistema", light: "Claro", dark: "Oscuro" },
		copy: { copy: "Haz clic para copiar", copied: "Copiado" },
		costTips: [
			"Poco o ningún subagente. Cuesta pocos tokens.",
			"Lanza uno o dos subagentes.",
			"Varios agentes en paralelo, o un bucle largo. Consume muchos tokens.",
			"Un agente por PR, más verificación y auditorías regulares. Lo más caro de pstack.",
		],
		footer: {
			/** "{author}" becomes a link to the author's site. */
			about: "Una guía no oficial para aprender pstack, escrita con Claude por {author}. Todo el contenido viene del trabajo de Lauren Tan.",
			site: "El sitio",
			src: "Fuentes",
			gh: "pstack en GitHub",
			x: "Lauren Tan en X",
			talk: "La charla",
			post: "El triángulo en X",
			note: "Sitio no oficial, sin relación con Cursor ni con la autora de pstack.",
			top: "Volver arriba",
		},
	},
});
