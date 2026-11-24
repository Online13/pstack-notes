/** Types of the home module. */

/** One search result as the client needs it: a catalog item opens the item panel, the rest are links. */
interface SearchBase {
	label: string;
	/** Section the result belongs to (API reference, Use cases, Getting started): results are grouped by it. */
	group: string;
	/** What the result is inside its section: an item kind, a use case group or a note number. */
	meta: string;
	desc: string;
	/** CSS custom property holding the dot's color, e.g. "--k-pb". */
	color: string;
	/** Lower-cased text without accents (label, id, description) the query is matched against. */
	search: string;
}

export type SearchEntry =
	(SearchBase & { open: string; href?: undefined }) | (SearchBase & { href: string; open?: undefined });
