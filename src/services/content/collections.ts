/**
 * Content collections: the YAML files in ./data, validated at build time.
 * Only the content service reads them (through astro:content); the rest of the app calls its functions.
 */
import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";
import { isRecord } from "../../helpers/assert";
import { KIND_KEYS } from "./kinds";
import type { TreeNode } from "../../types/content";

const DATA = "src/services/content/data";
export const FEATURE_MAP_EXAMPLE_BASE = `${DATA}/feature-map-example`;

/**
 * A YAML list whose order matters. Astro stores entries sorted by id, so each entry keeps its
 * position in the file as `order` (see ./store.ts).
 */
const orderedList = (name: string) =>
	file(`${DATA}/${name}`, {
		parser: (text) => {
			const list: unknown = parse(text);
			if (!Array.isArray(list)) throw new Error(`${name}: expected a list`);
			return list.map((entry: unknown, order) => {
				if (!isRecord(entry)) throw new Error(`${name}: entry ${order} is not an object`);
				return { ...entry, order };
			});
		},
	});
const order = z.number().int();

/** French and English; a plain string is the same in every language. */
const text = z.union([z.string(), z.object({ fr: z.string(), en: z.string(), es: z.string().optional() })]);
const cost = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]);

/** A call tree node (see helpers/call-tree.ts). */
const node: z.ZodType<TreeNode> = z.lazy(() =>
	z
		.object({
			ref: z.string().optional(),
			text: z.string().optional(),
			cond: z.string().optional(),
			kids: z.array(node).optional(),
		})
		.refine((n) => (n.ref === undefined) !== (n.text === undefined), "a node has either `ref` or `text`"),
);

const catalog = defineCollection({
	loader: orderedList("catalog.yaml"),
	schema: z.object({
		order,
		kind: z.enum(KIND_KEYS),
		cost,
		label: text,
		desc: text,
		/** Path in the pstack repository, or a hint when the item lives elsewhere. */
		path: z.string().optional(),
		steps: z.array(node).optional(),
	}),
});

const useCaseGroups = defineCollection({
	loader: orderedList("use-case-groups.yaml"),
	schema: z.object({ order, name: text }),
});

const useCases = defineCollection({
	loader: orderedList("use-cases.yaml"),
	schema: z.object({ order, group: z.string(), title: text, when: text, prompt: z.string().optional(), root: node }),
});

const lessonItem = z.object({ title: text, desc: text, chips: z.array(z.string()).optional() });
const lessonBase = {
	order,
	short: text,
	title: text,
	intro: text.optional(),
	figure: z.literal("verif").optional(),
	prompt: z.string().optional(),
};
const lessons = defineCollection({
	loader: orderedList("lessons.yaml"),
	schema: z.discriminatedUnion("type", [
		z.object({ ...lessonBase, type: z.enum(["chain", "cards"]), items: z.array(lessonItem) }),
		z.object({ ...lessonBase, type: z.literal("sheet"), items: z.array(z.object({ want: text, type: z.string() })) }),
		z.object({ ...lessonBase, type: z.literal("fmap") }),
	]),
});

const glossary = defineCollection({
	loader: file(`${DATA}/glossary.yaml`),
	schema: z.object({ kind: z.enum(["sk", "pb", "heavy"]), label: text.optional(), desc: text }),
});

const talks = defineCollection({
	loader: orderedList("talks.yaml"),
	schema: z.object({ order, url: z.url(), secondary: z.boolean().optional(), title: text, meta: text, desc: text }),
});

const vocabulary = defineCollection({
	loader: orderedList("vocabulary.yaml"),
	schema: z.object({ order, term: z.string(), definition: text }),
});

const cursorSpecific = defineCollection({
	loader: orderedList("cursor-specific.yaml"),
	schema: z.object({ order, name: z.string(), what: text, equivalent: text }),
});

/** The example verification skill shipped with pstack, shown verbatim in a lesson. */
const featureMapExample = defineCollection({
	loader: glob({ pattern: "**/*.md", base: FEATURE_MAP_EXAMPLE_BASE }),
	schema: z.record(z.string(), z.string()),
});

export const collections = {
	catalog,
	useCaseGroups,
	useCases,
	lessons,
	glossary,
	talks,
	vocabulary,
	cursorSpecific,
	featureMapExample,
};
