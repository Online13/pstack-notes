/** API reference guide: vocabulary, and what is Cursor-specific. */
import { localize } from "../i18n/localize";
import { getOrdered } from "./store";
import type { CursorSpecificEntry, VocabularyEntry } from "../../types/content";
import type { Lang } from "../../types/i18n";

export async function listVocabulary(lang: Lang): Promise<VocabularyEntry[]> {
	return (await getOrdered("vocabulary")).map(({ data }) => ({
		term: data.term,
		definition: localize(data.definition, lang),
	}));
}

export async function listCursorSpecific(lang: Lang): Promise<CursorSpecificEntry[]> {
	return (await getOrdered("cursorSpecific")).map(({ data }) => ({
		name: data.name,
		what: localize(data.what, lang),
		equivalent: localize(data.equivalent, lang),
	}));
}
