/** Strings of the about page. HTML is allowed in `intro`. */
import { defineMessages } from "../../services/i18n/localize";

type Pair = readonly [string, string];
/** Title, text, then optional details. */
type Idea = readonly [string, string, ...(string | readonly string[])[]];

export const aboutMessages = defineMessages({
	fr: {
		metaTitle: "À propos",
		metaDesc:
			"Pourquoi ces notes sur pstack existent, comment elles ont été écrites, les idées du talk de Lauren Tan et les sources.",
		h1: "À propos",
		intro: 'Ce site, ce sont mes notes sur <a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a>, le kit de skills créé par <a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a> pour livrer du code de qualité avec des agents. Pour comprendre pstack, j\'ai demandé à Claude de lire son dépôt et ses talks, puis j\'ai rangé ce qui en sortait : des notes à lire dans l\'ordre, des situations et une référence.',
		credit:
			"Tout le mérite revient à son autrice. Rien n'est inventé ici : chaque élément renvoie à un fichier du dépôt ou à une source. Ce ne sont que des notes : quand une note et le dépôt ne disent pas la même chose, c'est le dépôt qui a raison.",
		contentT: "Ce qu'il y a dans ces notes",
		/** "{n}" becomes the count. */
		map: [
			["Getting started", "{n} notes à lire dans l'ordre, des pièces de pstack au travail sans toi."],
			["Use cases", "{n} situations, du bug au gros chantier : la commande à taper et ce qu'elle lance."],
			["API reference", "{n} skills, playbooks, agents et principes, avec le graphe des appels."],
		] satisfies readonly [Pair, Pair, Pair],
		uT: "Ce que j'y cherche",
		uS: "L'autrice explique déjà beaucoup dans ses fils sur X et dans le dépôt. Ces notes ne remplacent pas ces sources : elles les rassemblent sous une forme que je peux parcourir.",
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
		wT: "Les idées du talk : la vitesse vient de la confiance",
		wS: "Ces idées viennent du talk, pas de moi. Chaque idée indique le passage où elles sont expliquées. Le talk ne parle pas de livrer plus : il parle de préparer l'environnement des agents pour qu'ils fassent du bon travail même quand on n'est pas là.",
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
		lesson: "Lire la note sur la vérification",
		quote: "if you want to go fast, go deep first.",
		quoteBy: "README de pstack",
		tT: "Sources",
		tS: "Tout ce qui est expliqué ici, c'est Lauren Tan qui l'a écrit et présenté : ses talks, ses fils sur X et le dépôt pstack. Ce site ne fait que résumer son travail. Les trois dernières sources sont des articles qui parlent d'elle, à vérifier.",
		second: "source secondaire",
		open: "Ouvrir",
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
		metaTitle: "About",
		metaDesc:
			"Why these notes on pstack exist, how they were written, the ideas from Lauren Tan's talk, and the sources.",
		h1: "About",
		intro: 'This site is my notes on <a href="https://github.com/cursor/plugins/tree/main/pstack" target="_blank" rel="noopener">pstack</a>, the skill kit <a href="https://x.com/poteto" target="_blank" rel="noopener">Lauren Tan (poteto)</a> built to ship quality code with agents. To understand pstack, I asked Claude to read its repository and her talks, then sorted what came out: notes to read in order, situations and a reference.',
		credit:
			"All the credit goes to its author. Nothing here is made up: every item points to a file in the repository or to a source. These are only notes: when a note and the repository disagree, the repository is right.",
		contentT: "What these notes hold",
		/** "{n}" becomes the count. */
		map: [
			["Getting started", "{n} notes to read in order, from the pieces of pstack to work done without you."],
			["Use cases", "{n} situations, from a bug to a big project: the command to type and what it runs."],
			["API reference", "{n} skills, playbooks, agents and principles, with the call graph."],
		],
		uT: "What I use them for",
		uS: "The author already explains a lot in her X threads and in the repository. These notes don't replace those sources: they gather them in a form I can browse.",
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
		use: [
			["Find the right playbook", "For each situation, the command to type, the steps and the skills it calls."],
			[
				"See what each skill calls",
				"Who calls what, with the call graph and a link to every file in the repository.",
			],
			["Estimate token cost", "Every item has a cost level, so you know when a flow starts several agents."],
			["Spot what is Cursor-specific", "The pieces to replace to use pstack with Claude Code or Codex."],
		],
		wT: "The ideas from the talk: speed comes from trust",
		wS: "These ideas come from the talk, not from me. Each idea points to the part where they are explained. The talk is not about shipping more: it is about setting up the agents' environment so they do good work even when you're not there.",
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
		lesson: "Read the note on verification",
		quote: "if you want to go fast, go deep first.",
		quoteBy: "pstack README",
		tT: "Sources",
		tS: "Everything explained here was written and presented by Lauren Tan herself: her talks, her X threads and the pstack repository. This site only summarizes her work. The last three sources are articles about her, so double-check.",
		second: "secondary source",
		open: "Open",
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
