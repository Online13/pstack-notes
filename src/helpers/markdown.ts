import type { LinkRenderer } from "../types/ui";
/**
 * Markdown to HTML, for the few places that show Markdown or a bit of inline markup.
 * Supported: front matter table, headings, paragraphs, lists, `code`, **bold**, and links (rendered by the caller).
 */

/** Escapes text for use inside HTML built as a string. */
export const escapeHtml = (s: string): string => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Escapes, then turns **x** into <b class="{className}">x</b>. */
export const renderEmphasis = (s: string, className: string): string =>
	escapeHtml(s).replace(/\*\*([^*]+)\*\*/g, `<b class="${className}">$1</b>`);

/** By default a link keeps only its text. */
const textOnly: LinkRenderer = (text) => text;

function inline(s: string, link: LinkRenderer): string {
	return s
		.split(/(`[^`]+`)/)
		.map((part) => {
			if (/^`[^`]+`$/.test(part)) return `<code>${escapeHtml(part.slice(1, -1))}</code>`;
			const html = escapeHtml(part).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
			return html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, text: string, target: string) => link(text, target));
		})
		.join("");
}

export function renderMarkdown(
	body: string,
	{ frontMatter = {}, link = textOnly }: { frontMatter?: Record<string, string>; link?: LinkRenderer } = {},
): string {
	const lines = body.replace(/\n+$/, "").split("\n");
	let html = "";
	let para: string[] = [];
	let list: { tag: "ul" | "ol"; items: string[] } | null = null;
	const flush = () => {
		if (para.length) {
			html += `<p>${inline(para.join(" "), link)}</p>`;
			para = [];
		}
		if (list) {
			html += `<${list.tag}>${list.items.map((x) => `<li>${inline(x, link)}</li>`).join("")}</${list.tag}>`;
			list = null;
		}
	};

	const meta = Object.entries(frontMatter);
	if (meta.length)
		html += `<table class="mdfm">${meta.map(([k, v]) => `<tr><th>${k}</th><td>${inline(v, link)}</td></tr>`).join("")}</table>`;

	for (const line of lines) {
		if (!line.trim()) {
			flush();
			continue;
		}
		const heading = /^(#{1,6}) (.*)$/.exec(line);
		if (heading) {
			flush();
			const [, hashes = "", text = ""] = heading;
			html += `<h${hashes.length + 2} class="mh${hashes.length}">${inline(text, link)}</h${hashes.length + 2}>`;
			continue;
		}
		const item = /^(?:-|\d+\.) (.*)$/.exec(line);
		if (item) {
			const tag = line.startsWith("-") ? "ul" : "ol";
			if (para.length || (list && list.tag !== tag)) flush();
			list ??= { tag, items: [] };
			list.items.push(item[1] ?? "");
			continue;
		}
		if (list) flush();
		para.push(line.trim());
	}
	flush();
	return html;
}
