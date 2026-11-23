/** Getting started: the lessons in reading order, and the glossary shown on their chips. */
import { getCollection, getEntry } from "astro:content";
import { localize } from "../i18n/localize";
import { getOrdered } from "./store";
import type { GlossaryEntry, Lesson, LessonBase } from "../../types/content";
import type { Lang } from "../../types/i18n";

export async function listLessons(lang: Lang): Promise<Lesson[]> {
	return (await getOrdered("lessons")).map(({ id, data: l }) => {
		const base: LessonBase = {
			id,
			short: localize(l.short, lang),
			title: localize(l.title, lang),
			intro: l.intro && localize(l.intro, lang),
			figure: l.figure,
			prompt: l.prompt,
		};
		switch (l.type) {
			case "sheet":
				return {
					...base,
					type: l.type,
					items: l.items.map((x) => ({ want: localize(x.want, lang), type: x.type })),
				};
			case "fmap":
				return { ...base, type: l.type };
			default:
				return {
					...base,
					type: l.type,
					items: l.items.map((x) => ({
						title: localize(x.title, lang),
						desc: localize(x.desc, lang),
						chips: x.chips,
					})),
				};
		}
	});
}

export async function countLessons(): Promise<number> {
	return (await getCollection("lessons")).length;
}

export async function getGlossaryEntry(id: string, lang: Lang): Promise<GlossaryEntry | undefined> {
	const e = await getEntry("glossary", id);
	if (!e) return undefined;
	return {
		kind: e.data.kind,
		label: e.data.label ? localize(e.data.label, lang) : `/${id}`,
		desc: localize(e.data.desc, lang),
	};
}
