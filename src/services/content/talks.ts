/** Talks and writing about pstack. */
import { localize } from "../i18n/localize";
import { getOrdered } from "./store";
import type { Talk } from "../../types/content";
import type { Lang } from "../../types/i18n";

export async function listTalks(lang: Lang): Promise<Talk[]> {
	return (await getOrdered("talks")).map(({ data: t }) => ({
		url: t.url,
		secondary: t.secondary ?? false,
		title: localize(t.title, lang),
		meta: localize(t.meta, lang),
		desc: localize(t.desc, lang),
	}));
}
