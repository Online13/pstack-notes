/**
 * Small preferences kept in the browser. Storage can be unavailable (private mode, blocked site data):
 * reads then return the fallback and writes are dropped.
 */
export function readString(key: string): string | null {
	try {
		return localStorage.getItem(key);
	} catch {
		return null;
	}
}

export function writeString(key: string, value: string): void {
	try {
		localStorage.setItem(key, value);
	} catch {
		/* storage unavailable or full: drop the write */
	}
}

/** Reads a JSON value; `isValid` checks its shape, so a stale or edited value falls back instead of breaking. */
export function readJson<T>(key: string, isValid: (v: unknown) => v is T, fallback: T): T {
	const raw = readString(key);
	if (raw === null) return fallback;
	try {
		const value: unknown = JSON.parse(raw);
		return isValid(value) ? value : fallback;
	} catch {
		return fallback;
	}
}

export function writeJson(key: string, value: unknown): void {
	writeString(key, JSON.stringify(value));
}
