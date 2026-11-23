/** Prompt boxes type their command the first time they are mostly visible. The full text is in the HTML. */
import { reducedMotion } from "../../../helpers/motion";

export function initTyping() {
	const io = new IntersectionObserver(
		(entries) =>
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				io.unobserve(entry.target);
				const typed = entry.target.querySelector(".typed");
				if (!(typed instanceof HTMLElement) || reducedMotion()) return;
				const text = typed.dataset.text ?? "";
				typed.textContent = "";
				let n = 0;
				const tick = () => {
					if (!typed.isConnected) return;
					typed.textContent = text.slice(0, ++n);
					if (n < text.length) setTimeout(tick, 18 + Math.random() * 34);
				};
				setTimeout(tick, 300);
			}),
		{ threshold: 0.6 },
	);
	document.querySelectorAll(".term").forEach((t) => io.observe(t));
}
