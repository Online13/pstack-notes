/** Strings of the item details panel. */
import { defineMessages } from "../../services/i18n/localize";

import type { Plural } from "../../types/i18n";

export const itemMessages = defineMessages({
	fr: {
		calls: "Il appelle",
		calledBy: "Appelé par",
		inUseCases: "Dans les use cases",
		file: "Fichier dans le dépôt",
		atStep: "À l'étape",
		step: "Étape",
		noCaller: "aucun",
		nothingCalled: "Rien",
		close: "Fermer",
		back: "Retour",
		/** "{n}" is replaced by the count. */
		callsHint: [
			"{n} élément appelé. Clique pour ouvrir sa fiche.",
			"{n} éléments appelés. Clique pour ouvrir sa fiche.",
		] satisfies Plural,
	},
	en: {
		calls: "It calls",
		calledBy: "Called by",
		inUseCases: "In use cases",
		file: "File in the repository",
		atStep: "At step",
		step: "Step",
		noCaller: "none",
		nothingCalled: "Nothing",
		close: "Close",
		back: "Back",
		callsHint: [
			"{n} item called. Click one to open its details.",
			"{n} items called. Click one to open its details.",
		],
	},
	es: {
		callsHint: [
			"{n} elemento llamado. Haz clic en uno para abrir su ficha.",
			"{n} elementos llamados. Haz clic en uno para abrir su ficha.",
		],
	},
});
