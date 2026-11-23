/** Reads a content collection in the order of its source file (Astro itself returns entries sorted by id). */
import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";

type Ordered = {
	[K in CollectionKey]: CollectionEntry<K>["data"] extends { order: number } ? K : never;
}[CollectionKey];

/** Position of an entry in its file, set by the `orderedList` loader (collections.ts). */
const orderOf = (data: unknown): number =>
	typeof data === "object" && data !== null && "order" in data && typeof data.order === "number" ? data.order : 0;

export async function getOrdered<K extends Ordered>(name: K): Promise<CollectionEntry<K>[]> {
	const entries = await getCollection(name);
	return entries.sort((a, b) => orderOf(a.data) - orderOf(b.data));
}
