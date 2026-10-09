import { useEffect, type RefObject } from "react";

export function useRevealAnimations(pageRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const page = pageRef.current;
    const targets = page?.querySelectorAll<HTMLElement>(
      ".reveal, #threadDiagram",
    );
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let observer: IntersectionObserver | undefined;

    if (targets && (reduceMotion || !("IntersectionObserver" in window))) {
      targets.forEach((target) => target.classList.add("in"));
    } else if (targets) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      targets.forEach((target) => observer?.observe(target));
    }

    return () => observer?.disconnect();
  }, [pageRef]);
}
