/** Search text: lower case, accents removed, so "resume" finds "résumé". Used at build time and in the browser. */
export const searchText = (s: string): string =>
	s
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase();

/**
 * Where the query words appear in `text`, as [start, end) offsets into the original string, sorted and merged.
 * Matching runs on the search text, so "resume" marks "résumé".
 */
export function matchRanges(text: string, words: readonly string[]): [number, number][] {
	let norm = "";
	/** For each character of `norm`, the offset of the original character it comes from; one extra for the end. */
	const from: number[] = [];
	let offset = 0;
	for (const ch of text) {
		const n = searchText(ch);
		from.push(...Array.from(n, () => offset));
		norm += n;
		offset += ch.length;
	}
	from.push(offset);
	const found: [number, number][] = [];
	for (const w of words) {
		if (!w) continue;
		for (let s = norm.indexOf(w); s >= 0; s = norm.indexOf(w, s + w.length)) {
			found.push([from[s] ?? offset, from[s + w.length] ?? offset]);
		}
	}
	found.sort((a, b) => a[0] - b[0]);
	const merged: [number, number][] = [];
	for (const [start, end] of found) {
		const last = merged.at(-1);
		if (last && start <= last[1]) last[1] = Math.max(last[1], end);
		else merged.push([start, end]);
	}
	return merged;
}
