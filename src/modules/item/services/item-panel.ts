/** Loads the pre-rendered HTML of an item's details (pages/[lang]/items/[id].astro). Each item is fetched once. */
const cache = new Map<string, Promise<string>>();

/** `baseUrl` is the items folder of the current language, e.g. "/en/items/". */
export function fetchItemPanel(baseUrl: string, id: string): Promise<string> {
	const url = `${baseUrl}${encodeURIComponent(id)}/`;
	let p = cache.get(url);
	if (!p) {
		p = fetch(url).then((r) => {
			if (!r.ok) throw new Error(`${r.status} ${r.url}`);
			return r.text();
		});
		p.catch(() => cache.delete(url));
		cache.set(url, p);
	}
	return p;
}
