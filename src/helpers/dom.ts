/** Typed DOM lookups: every element is checked with `instanceof` instead of being cast. */

type ElementClass<T extends Element> = abstract new (...args: never[]) => T;

/** The element matching `selector`, checked to be a `type`. Throws when missing: the page is built with it. */
export function requireElement<T extends Element>(
	selector: string,
	type: ElementClass<T>,
	root: ParentNode = document,
): T {
	const el = root.querySelector(selector);
	if (!(el instanceof type)) throw new Error(`missing ${type.name} "${selector}"`);
	return el;
}

/** Every element matching `selector` that is a `type`. */
export function findElements<T extends Element>(
	selector: string,
	type: ElementClass<T>,
	root: ParentNode = document,
): T[] {
	return [...root.querySelectorAll(selector)].filter((el): el is T => el instanceof type);
}

/** The closest ancestor of an event target (itself included) matching `selector` and being a `type`. */
export function closestFrom<T extends Element>(
	target: EventTarget | null,
	selector: string,
	type: ElementClass<T>,
): T | null {
	if (!(target instanceof Element)) return null;
	const el = target.closest(selector);
	return el instanceof type ? el : null;
}

/** A data attribute that the markup always sets. Throws when missing. */
export function requireData(el: HTMLElement | SVGElement, key: string): string {
	const value = el.dataset[key];
	if (value === undefined) throw new Error(`missing data-${key} on ${el.tagName}`);
	return value;
}
