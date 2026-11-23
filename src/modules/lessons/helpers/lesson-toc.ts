/** Lesson table of contents: highlights the lesson being read and scrolls below the sticky header. */
import { findElements, requireData } from "../../../helpers/dom";
import { scrollBehavior } from "../../../helpers/motion";

/** Scrolls to a lesson, leaving room for the header when it is sticky. */
function goTo(k: string, behavior: ScrollBehavior) {
	const target = document.getElementById(`gsl-${k}`);
	if (!target) return;
	const header = document.querySelector(".site-header");
	const sticky = header instanceof HTMLElement && getComputedStyle(header).position === "sticky";
	const offset = (sticky ? header.offsetHeight : 0) + 24;
	window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior });
}

export function initLessonToc() {
	const links = findElements(".gstoc a", HTMLAnchorElement);
	links.forEach((a) =>
		a.addEventListener("click", (e) => {
			e.preventDefault();
			const k = requireData(a, "k");
			goTo(k, scrollBehavior());
			history.replaceState(null, "", `#gsl-${k}`);
		}),
	);

	const io = new IntersectionObserver(
		(entries) =>
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const k = entry.target.id.slice(4);
				links.forEach((a) => a.classList.toggle("on", a.dataset.k === k));
			}),
		{ rootMargin: "-30% 0px -60% 0px" },
	);
	document.querySelectorAll(".gsl").forEach((s) => io.observe(s));
}
