/** Strings of the home page. HTML is allowed in `lead`. */
import { defineMessages } from "../../services/i18n/localize";

type Pair = readonly [string, string];
/** Title, text, then optional details. */
type Idea = readonly [string, string, ...(string | readonly string[])[]];

export const homeMessages = defineMessages({
	fr: {
		badge: "Guide non officiel",
		h1: "Mes notes pour comprendre pstack",
		lead: '<a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a> est le kit de skills créé par <b><a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a></b> pour livrer du code de qualité avec des agents. Ce site n\'en est qu\'un résumé : pour apprendre pstack, j\'ai demandé à Claude de lire son code et ses talks, puis d\'en tirer des leçons, des situations et une référence.',
		credit:
			"Tout le mérite revient à son autrice. Rien n'est inventé ici : chaque élément renvoie à un fichier du dépôt ou à une source.",
		cta1: "Commencer le parcours",
		cta2: "Ouvrir la référence",
		what: [
			["10", "leçons pour découvrir les pièces de pstack"],
			["16", "situations, du bug au gros chantier"],
			["91", "skills, playbooks, agents et principes dans le catalogue"],
		] satisfies readonly [Pair, Pair, Pair],
		cap1: "Contributions GitHub montrées dans le talk (vers 2:30).",
		cap2: "Benny, un agent d'automatisation, reproduit un bug signalé sur Slack (vers 35:00).",
		sT: "Pourquoi cette approche m'intéresse",
		sS: "Le volume de PR est énorme, et le talk l'explique par une seule chose : un environnement où l'on peut faire confiance à ses agents. C'est cette méthode qui m'intéresse, plus que les chiffres.",
		stats: [
			["2 000", "PR livrées en production le mois du talk"],
			["5 000+", "PR en six mois, selon son talk"],
			["22", "playbooks derrière /poteto-mode"],
			["5", "niveaux où une correction peut vivre"],
		],
		uEb: "À quoi sert ce site",
		uT: "Une référence pour pstack, à garder ouverte",
		uS: "L'autrice explique déjà beaucoup dans ses fils sur X et dans le dépôt. Ce site ne remplace pas ces sources : il les rassemble sous une forme qu'on peut parcourir.",
		use: [
			["Retrouver le bon playbook", "Pour chaque situation, la commande à taper, les étapes et les skills appelés."],
			[
				"Voir ce que chaque skill appelle",
				"Qui appelle quoi, avec le graphe des appels et un lien vers chaque fichier du dépôt.",
			],
			[
				"Estimer le coût en tokens",
				"Chaque élément a un niveau de coût, pour savoir quand un flow lance plusieurs agents.",
			],
			[
				"Repérer ce qui est propre à Cursor",
				"Les pièces à remplacer pour utiliser pstack avec Claude Code ou Codex.",
			],
		],
		wEb: "Les idées du talk",
		wT: "La vitesse vient de la confiance",
		wS: "Ces idées viennent du talk, pas de moi. Chaque bloc indique le passage où elles sont expliquées. Le talk ne parle pas de livrer plus : il parle de préparer l'environnement des agents pour qu'ils fassent du bon travail même quand on n'est pas là.",
		ws: [
			"de 05:00 à 06:40, puis à 35:25",
			"de 15:25 à 17:55",
			"de 07:05 à 12:05",
			"à 15:25, 20:25 et 30:00",
		] satisfies readonly [string, string, string, string],
		wsPre: "Source : talk « Here's how I shipped 2,500 PRs last month », ",
		w: [
			[
				"La confiance d'abord, le parallèle ensuite",
				"Avec un agent fiable, on peut en lancer 5, puis 20, puis des centaines. Sans confiance, chaque agent de plus est une PR de plus à relire ligne par ligne.",
			],
			[
				"Chaque correction remonte d'un cran",
				"Quand on corrige un agent, on met la règle le plus haut possible dans ce triangle. Plus elle est haut, moins elle dépend de la bonne volonté de l'agent.",
				[
					"La codebase (types, API qui empêchent l'erreur)",
					"L'analyse statique : lint, compilateur, CI",
					"Les règles et bugbot",
					"Les skills",
					"Le style guide, que seul un humain fait respecter",
				],
			],
			[
				"La vérification est une infrastructure",
				"L'agent pilote la vraie app, reproduit le bug et prouve le fix. C'est le skill /verify-<app>, qu'on crée une fois par projet.",
			],
			[
				"La codebase est la mémoire",
				"Une feature map tenue à jour dit à l'agent où sont les choses et comment y aller. Les leçons apprises finissent dans le code, pas dans un prompt.",
			],
		] satisfies readonly [Idea, Idea, Idea, Idea],
		trustSrc: "Courbe redessinée d'après la slide de son talk",
		lesson: "Lire la leçon sur la vérification",
		quote: "if you want to go fast, go deep first.",
		quoteBy: "README de pstack",
		tEb: "Sources",
		tT: "Talks et écrits sur pstack",
		tS: "Tout ce qui est expliqué ici, c'est Lauren Tan qui l'a écrit et présenté : ses talks, ses fils sur X et le dépôt pstack. Ce site ne fait que résumer son travail. Les trois dernières sources sont des articles qui parlent d'elle, à vérifier.",
		second: "source secondaire",
		open: "Ouvrir",
		cEb: "Par où commencer",
		cT: "Trois façons de lire ce site",
		map: [
			["Getting started", "Onze leçons courtes, à lire dans l'ordre ou à la carte."],
			["Use cases", "Une carte par situation : quel playbook, quelles étapes, quels skills."],
			["API reference", "Tout le catalogue, à chercher, filtrer et trier, avec le graphe des appels."],
		] satisfies readonly [Pair, Pair, Pair],
		go: "Ouvrir",
		zoomImage: "Agrandir l'image",
		source: "Source",
		triangle: {
			src: "Triangle redessiné d'après son post sur X",
			l: [
				["Améliorer la codebase", "architecture, types, invariants"],
				["Analyse statique", "lint, tests, CI, vérification"],
				["Prose", "règles, AGENTS.md, skills"],
				["Revue humaine", ""],
			],
			top: "le plus d'effort",
			bot: "le moins",
		},
	},
	en: {
		badge: "Unofficial guide",
		h1: "My notes to understand pstack",
		lead: '<a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a> is the skill kit <b><a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a></b> built to ship quality code with agents. This site is only a summary: to learn pstack, I asked Claude to read its code and her talks, then turn them into lessons, situations and a reference.',
		credit:
			"All the credit goes to its author. Nothing here is made up: every item points to a file in the repository or to a source.",
		cta1: "Start the path",
		cta2: "Open the reference",
		what: [
			["10", "lessons to discover the pieces of pstack"],
			["16", "situations, from a bug to a big project"],
			["91", "skills, playbooks, agents and principles in the catalog"],
		],
		cap1: "GitHub contributions shown in the talk (around 2:30).",
		cap2: "Benny, an automation agent, reproduces a bug reported on Slack (around 35:00).",
		sT: "Why this approach interests me",
		sS: "The PR volume is huge, and the talk credits one thing for it: an environment where you can trust your agents. That method is what interests me, more than the numbers.",
		stats: [
			["2,000", "PRs shipped to production the month of the talk"],
			["5,000+", "PRs in six months, per her talk"],
			["22", "playbooks behind /poteto-mode"],
			["5", "levels where a correction can live"],
		],
		uEb: "What this site is for",
		uT: "A pstack reference to keep open",
		uS: "The author already explains a lot in her X threads and in the repository. This site doesn't replace those sources: it gathers them in a form you can browse.",
		use: [
			["Find the right playbook", "For each situation, the command to type, the steps and the skills it calls."],
			[
				"See what each skill calls",
				"Who calls what, with the call graph and a link to every file in the repository.",
			],
			["Estimate token cost", "Every item has a cost level, so you know when a flow starts several agents."],
			["Spot what is Cursor-specific", "The pieces to replace to use pstack with Claude Code or Codex."],
		],
		wEb: "The ideas from the talk",
		wT: "Speed comes from trust",
		wS: "These ideas come from the talk, not from me. Each block points to the part where they are explained. The talk is not about shipping more: it is about setting up the agents' environment so they do good work even when you're not there.",
		ws: ["05:00 to 06:40, then 35:25", "15:25 to 17:55", "07:05 to 12:05", "15:25, 20:25 and 30:00"],
		wsPre: "Source: talk “Here's how I shipped 2,500 PRs last month”, ",
		w: [
			[
				"Trust first, parallel second",
				"With one reliable agent you can run 5, then 20, then hundreds. Without trust, every extra agent is one more PR to review line by line.",
			],
			[
				"Every correction moves up a level",
				"When you correct an agent, put the rule as high as you can in this triangle. The higher it is, the less it depends on the agent's goodwill.",
				[
					"The codebase (types, APIs that make the mistake impossible)",
					"Static analysis: lint, compiler, CI",
					"Rules and bugbot",
					"Skills",
					"The style guide, only enforced by humans",
				],
			],
			[
				"Verification is infrastructure",
				"The agent drives the real app, reproduces the bug and proves the fix. That's the /verify-<app> skill, created once per project.",
			],
			[
				"The codebase is memory",
				"A maintained feature map tells the agent where things are and how to reach them. Lessons learned end up in code, not in a prompt.",
			],
		],
		trustSrc: "Curve redrawn from her talk's slide",
		lesson: "Read the lesson on verification",
		quote: "if you want to go fast, go deep first.",
		quoteBy: "pstack README",
		tEb: "Sources",
		tT: "Talks and writing on pstack",
		tS: "Everything explained here was written and presented by Lauren Tan herself: her talks, her X threads and the pstack repository. This site only summarizes her work. The last three sources are articles about her, so double-check.",
		second: "secondary source",
		open: "Open",
		cEb: "Where to start",
		cT: "Three ways to read this site",
		map: [
			["Getting started", "Eleven short lessons, one per screen. You move forward, the page stays put."],
			["Use cases", "One card per situation: which playbook, which steps, which skills."],
			["API reference", "The whole catalog to search, filter and sort, with the call graph."],
		],
		go: "Open",
		zoomImage: "Enlarge image",
		source: "Source",
		triangle: {
			src: "Triangle redrawn from her post on X",
			l: [
				["Codebase improvements", "architecture, types, invariants"],
				["Static analysis", "lint, tests, CI, verification"],
				["Prose", "rules, AGENTS.md, skills"],
				["Human review", ""],
			],
			top: "most effort",
			bot: "least",
		},
	},
	es: {
		triangle: {
			src: "Triángulo redibujado a partir de su post en X",
			l: [
				["Mejorar el código", "arquitectura, tipos, invariantes"],
				["Análisis estático", "lint, tests, CI, verificación"],
				["Prosa", "reglas, AGENTS.md, skills"],
				["Revisión humana", ""],
			],
			top: "más esfuerzo",
			bot: "menos",
		},
	},
});
