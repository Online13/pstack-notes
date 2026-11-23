/** The example verification skill shipped with pstack (Markdown files, shown verbatim in a lesson). */
import { getCollection } from "astro:content";
import { FEATURE_MAP_EXAMPLE_BASE } from "./collections";
import type { ExampleFile } from "../../types/content";

/** The files in the given order. Throws when one is missing. */
export async function getExampleFiles(paths: string[]): Promise<ExampleFile[]> {
	const files = (await getCollection("featureMapExample")).map((e) => ({
		path: (e.filePath ?? "").slice(FEATURE_MAP_EXAMPLE_BASE.length + 1),
		frontMatter: e.data,
		body: e.body ?? "",
	}));
	return paths.map((p) => {
		const file = files.find((f) => f.path === p);
		if (!file) throw new Error(`feature map example: no file "${p}"`);
		return file;
	});
}
