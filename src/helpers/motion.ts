export const reducedMotion = (): boolean => matchMedia("(prefers-reduced-motion: reduce)").matches;
export const scrollBehavior = (): ScrollBehavior => (reducedMotion() ? "auto" : "smooth");
