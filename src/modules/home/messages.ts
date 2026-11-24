/** Strings of the home page: the search and the index of pstack under it. */
import { defineMessages } from "../../services/i18n/localize";

/** Heading of an index column, then its "see all" link. */
type Column = readonly [string, string];

export const homeMessages = defineMessages({
	fr: {
		metaTitle: "Mes notes sur pstack, le kit de skills pour agents",
		metaDesc:
			"Mes notes et ma synthèse de pstack, le kit de skills de Lauren Tan pour livrer du code de qualité avec des agents : chaque skill, playbook et principe, et la commande à taper selon la situation.",
		h1: "Chercher dans pstack",
		sub: "Mes notes sur le kit de skills de Lauren Tan (poteto) pour coder avec des agents.",
		search: "Un skill, un playbook, une situation…",
		searchLabel: "Chercher dans pstack",
		/** Typed one after the other in the empty search box; each one must find something. */
		ideas: ["corriger un bug", "poteto-mode", "ouvrir une PR", "vérifier", "refactoring"],
		/** "{q}" becomes the query. */
		empty: "Rien pour « {q} ». Essaie un autre mot, ou parcours l'API reference.",
		/** "{n}" becomes the count. */
		count: ["{n} résultat", "{n} résultats"],
		/** "{n}" becomes the number of hidden results. */
		more: "Voir les {n} autres",
		note: "Note",
		indexLabel: "Sommaire de pstack",
		tilesTitle: "À taper, selon la situation",
		/** "{n}" becomes the count. */
		index: [
			["Getting started", "Les {n} notes"],
			["Use cases", "Les {n} situations"],
			["Playbooks", "Les {n} playbooks"],
			["Skills les plus appelés", "Les {n} skills"],
		] satisfies readonly [Column, Column, Column, Column],
		about: "À propos de ces notes",
	},
	en: {
		metaTitle: "My notes on pstack, the agent skill kit",
		metaDesc:
			"My notes and synthesis of pstack, Lauren Tan's skill kit for shipping quality code with agents: every skill, playbook and principle, and the command to type for each situation.",
		h1: "Search pstack",
		sub: "My notes on the skill kit Lauren Tan (poteto) built to code with agents.",
		search: "A skill, a playbook, a situation…",
		searchLabel: "Search pstack",
		/** Typed one after the other in the empty search box; each one must find something. */
		ideas: ["fix a bug", "poteto-mode", "open a PR", "verify", "refactoring"],
		/** "{q}" becomes the query. */
		empty: "Nothing for “{q}”. Try another word, or browse the API reference.",
		/** "{n}" becomes the count. */
		count: ["{n} result", "{n} results"],
		/** "{n}" becomes the number of hidden results. */
		more: "Show {n} more",
		note: "Note",
		indexLabel: "pstack at a glance",
		tilesTitle: "What to type, by situation",
		/** "{n}" becomes the count. */
		index: [
			["Getting started", "All {n} notes"],
			["Use cases", "All {n} situations"],
			["Playbooks", "All {n} playbooks"],
			["Most-called skills", "All {n} skills"],
		],
		about: "About these notes",
	},
	es: {
		ideas: ["un bug", "poteto-mode", "abrir una PR", "verificar", "refactoring"],
		empty: "Nada para «{q}». Prueba otra palabra, o recorre la API reference.",
		count: ["{n} resultado", "{n} resultados"],
		more: "Ver {n} más",
		note: "Nota",
		indexLabel: "pstack de un vistazo",
		tilesTitle: "Qué escribir, según la situación",
		index: [
			["Getting started", "Las {n} notas"],
			["Use cases", "Las {n} situaciones"],
			["Playbooks", "Los {n} playbooks"],
			["Skills más llamados", "Los {n} skills"],
		],
	},
});
