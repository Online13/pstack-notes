/** Kinds of catalog items and token cost levels. Order matters: it is the order of filters and sorting. */
import { localize } from "../i18n/localize";
import type { Cost, Kind } from "../../types/content";
import type { Lang, Text } from "../../types/i18n";

export const KIND_KEYS = ["pb", "sk", "pr", "ag", "loc", "ext", "tool", "bn"] as const satisfies readonly Kind[];

const KINDS: Record<Kind, { name: Text; color: string }> = {
	pb: { name: { fr: "Playbook", en: "Playbook" }, color: "--k-pb" },
	sk: { name: { fr: "Skill pstack", en: "pstack skill" }, color: "--k-sk" },
	pr: { name: { fr: "Principe", en: "Principle" }, color: "--k-pr" },
	ag: { name: { fr: "Agent", en: "Agent" }, color: "--k-ag" },
	loc: { name: { fr: "Skill de ton projet", en: "Your project's skill" }, color: "--k-loc" },
	ext: { name: { fr: "Cursor, hors pstack", en: "Cursor, outside pstack" }, color: "--k-ext" },
	tool: { name: { fr: "Script ou référence", en: "Script or reference" }, color: "--k-tool" },
	bn: { name: { fr: "Automatisation Benny", en: "Benny automation" }, color: "--k-bn" },
};

export const kindName = (kind: Kind, lang: Lang): string => localize(KINDS[kind].name, lang);
/** CSS custom property holding the kind's color, e.g. "--k-pb". */
export const kindColor = (kind: Kind): string => KINDS[kind].color;

export const COST_LEVELS = [0, 1, 2, 3] as const satisfies readonly Cost[];
