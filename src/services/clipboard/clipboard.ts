/** Copies text to the clipboard. Resolves to false when the browser refuses. */
export function copyText(text: string): Promise<boolean> {
	// navigator.clipboard is only exposed in secure contexts
	if (isSecureContext)
		return navigator.clipboard.writeText(text).then(
			() => true,
			() => fallbackCopy(text),
		);
	return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text: string): boolean {
	const ta = document.createElement("textarea");
	ta.value = text;
	ta.setAttribute("readonly", "");
	ta.style.cssText = "position:fixed;top:-1000px;opacity:0";
	document.body.appendChild(ta);
	ta.select();
	let ok = false;
	try {
		// deprecated, but the only way to copy outside a secure context (e.g. a plain-http preview)
		// eslint-disable-next-line @typescript-eslint/no-deprecated
		ok = document.execCommand("copy");
	} catch {
		/* not supported: report failure */
	}
	ta.remove();
	return ok;
}
