// Global type augmentations.
import "astro/astro-jsx";

declare global {
	namespace JSX {
		// Astro types template elements as `any` to support every JSX framework. This site renders plain HTML,
		// so a template element is an HTMLElement: type-aware lint rules can check `.map(...)` in templates.
		type Element = HTMLElement;
	}

	interface HTMLElementEventMap {
		/** A dropdown's value changed (helpers/dropdown.ts); detail is the new value. */
		"dd:change": CustomEvent<string>;
	}

	interface DocumentEventMap {
		/** A dropdown opened (helpers/dropdown.ts); detail is the dropdown, so the others close. */
		"dd:open": CustomEvent<HTMLElement>;
	}
}
