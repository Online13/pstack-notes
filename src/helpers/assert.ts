/** Small runtime checks that narrow types without casts. */

/** Returns the value, or throws when it is missing: a missing value here is a bug, not a state to handle. */
export function required<T>(value: T | null | undefined, what: string): T {
	if (value === null || value === undefined) throw new Error(`missing ${what}`);
	return value;
}

export const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null;

export const isStringArray = (v: unknown): v is string[] => Array.isArray(v) && v.every((x) => typeof x === "string");

/** True when `v` is one of `options`. */
export const isOneOf = <T extends string>(v: unknown, options: readonly T[]): v is T => options.some((o) => o === v);
