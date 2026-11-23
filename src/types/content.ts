/** The pstack content, as the content service returns it (already in the requested language). */

export type Kind = "pb" | "sk" | "pr" | "ag" | "loc" | "ext" | "tool" | "bn";

/** 0 light, 1 medium, 2 heavy, 3 very heavy. */
export type Cost = 0 | 1 | 2 | 3;

export interface CatalogItem {
	id: string;
	kind: Kind;
	cost: Cost;
	label: string;
	desc: string;
	kindName: string;
	/** CSS custom property holding the kind's color, e.g. "--k-pb". */
	color: string;
	/** Path in the pstack repository, or a hint when the item lives elsewhere. */
	path?: string;
}

/**
 * A call tree node: a reference to a catalog item (`ref`) or a plain step (`text`), optionally under a
 * condition, with optional children. Source trees are in French; the service returns them translated.
 */
export interface TreeNode {
	ref?: string;
	text?: string;
	cond?: string;
	kids?: TreeNode[];
}

/** Call trees by owner id. */
export type Trees = Map<string, TreeNode[]>;

/** Where, in a tree, a called item first appears. `text` is the step's text, absent for a direct call. */
export interface StepRef {
	index: number;
	text?: string;
	cond?: string;
}

/** A block of a use case card: a catalog item with its own steps, or a plain step with its sub-steps. */
export type CaseUnit =
	| { item: CatalogItem; steps: TreeNode[]; via?: string; cond?: string }
	| { item?: undefined; text: string; steps: TreeNode[] };

export interface UseCase {
	id: string;
	title: string;
	when: string;
	prompt?: string;
	cost: Cost;
	units: CaseUnit[];
}

export interface UseCaseGroup {
	id: string;
	name: string;
	cases: UseCase[];
}

export interface UseCaseLink {
	id: string;
	title: string;
}

export interface LessonItem {
	title: string;
	/** `**x**` marks a generated artifact. */
	desc: string;
	chips?: string[];
}

export interface LessonBase {
	id: string;
	short: string;
	title: string;
	/** HTML. */
	intro?: string;
	figure?: "verif";
	/** Command shown in a prompt box. */
	prompt?: string;
}

export type Lesson =
	| (LessonBase & { type: "chain" | "cards"; items: LessonItem[] })
	| (LessonBase & { type: "sheet"; items: { want: string; type: string }[] })
	| (LessonBase & { type: "fmap" });

/** A lesson chip: color, label and one-line description. */
export interface GlossaryEntry {
	kind: "sk" | "pb" | "heavy";
	label: string;
	desc: string;
}

export interface Talk {
	url: string;
	/** About the author rather than by her. */
	secondary: boolean;
	title: string;
	meta: string;
	desc: string;
}

export interface VocabularyEntry {
	term: string;
	definition: string;
}

export interface CursorSpecificEntry {
	name: string;
	what: string;
	equivalent: string;
}

/** A Markdown file of the example verification skill. */
export interface ExampleFile {
	/** Path inside the skill folder, e.g. "features/search.md". */
	path: string;
	frontMatter: Record<string, string>;
	body: string;
}
