/** Strings of the API reference (catalog and guide tabs). */
import { defineMessages } from "../../services/i18n/localize";
import type { Plural } from "../../types/i18n";

type Pair = readonly [string, string];

export const referenceMessages = defineMessages({
	fr: {
		apiTitle: "API reference",
		apiIntro:
			"Tout ce que contient pstack : skills, playbooks, agents, principes. Cherche, filtre, trie, puis clique une ligne pour sa fiche.",
		apiTabs: ["Catalogue", "Guide"],
		guideIntro:
			"Les repères pour lire la référence : le coût en tokens, le vocabulaire, et ce qui est propre à Cursor.",
		search: "Rechercher un skill…",
		allKinds: "Tous les types",
		allCosts: "Tous les coûts",
		views: ["Tableau", "Graphe"],
		cols: ["Nom", "Type", "Coût", "Ce qu'il fait"],
		reset: "Effacer les filtres",
		graphHint:
			"Chaque flèche veut dire « appelle ». Clique un nœud pour sa fiche, molette ou pincement pour zoomer. Les principes n'apparaissent que si tu filtres sur Principe.",
		noResults: "Aucun résultat.",
		costTitle: "Comment lire le coût en tokens",
		costNote:
			"Le piège : architect a l'air léger, mais il appelle arena dès que le design est « gros ou contesté ». Feature appelle aussi arena d'office quand plusieurs formes de code sont valides. Un flow moyen peut donc devenir lourd sans prévenir.",
		costLevels: [
			["Léger", "Pas de subagent, ou presque. Lecture, réécriture, règles."],
			["Moyen", "Un ou deux subagents."],
			[
				"Lourd",
				"Plusieurs agents en parallèle (3 par défaut pour arena et interrogate, N pour swarm), ou une longue boucle.",
			],
			["Très lourd", "Un agent par PR, un swarm de vérification, un audit toutes les heures."],
		] satisfies readonly [Pair, Pair, Pair, Pair],
		vocab: "Vocabulaire",
		cursorTitle: "Ce qui est propre à Cursor",
		cursorText:
			"Les éléments de type « Cursor, hors pstack ». Pour un workflow qui marche avec Claude Code et Codex, il faut un équivalent ou les retirer.",
		cursorCols: ["Dans pstack", "C'est quoi", "Équivalent à prévoir"],
		/** "{n}" is replaced by the count. */
		results: ["{n} résultat", "{n} résultats"] satisfies Plural,
	},
	en: {
		apiTitle: "API reference",
		apiIntro:
			"Everything in pstack: skills, playbooks, agents, principles. Search, filter, sort, then click a row for its details.",
		apiTabs: ["Catalog", "Guide"],
		guideIntro: "Landmarks for reading the reference: token cost, vocabulary, and what is Cursor-specific.",
		search: "Search a skill…",
		allKinds: "All types",
		allCosts: "All costs",
		views: ["Table", "Graph"],
		cols: ["Name", "Type", "Cost", "What it does"],
		reset: "Clear filters",
		graphHint:
			"Each arrow means “calls”. Click a node for its details, scroll or pinch to zoom. Principles only show when you filter on Principle.",
		noResults: "No results.",
		costTitle: "How to read token cost",
		costNote:
			"The catch: architect looks light, but it calls arena as soon as the design is “big or contested”. Feature also calls arena by default when several code shapes are valid. A medium flow can turn heavy without warning.",
		costLevels: [
			["Light", "No subagent, or almost none. Reading, rewriting, rules."],
			["Medium", "One or two subagents."],
			["Heavy", "Several agents in parallel (3 by default for arena and interrogate, N for swarm), or a long loop."],
			["Very heavy", "One agent per PR, a verification swarm, an hourly audit."],
		],
		vocab: "Vocabulary",
		cursorTitle: "What is Cursor-specific",
		cursorText:
			"Items of type “Cursor, outside pstack”. For a workflow that runs on Claude Code and Codex, each needs an equivalent or must go.",
		cursorCols: ["In pstack", "What it is", "Equivalent to plan"],
		results: ["{n} result", "{n} results"],
	},
	es: {
		results: ["{n} resultado", "{n} resultados"],
	},
});
