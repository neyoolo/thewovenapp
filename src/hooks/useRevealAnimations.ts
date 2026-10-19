import { useEffect, type RefObject } from "react";

export function useRevealAnimations(
  pageRef: RefObject<HTMLElement | null>,
  routeKey: string,
) {
  useEffect(() => {
    const page = pageRef.current;
    const targets = page?.querySelectorAll<HTMLElement>(
      ".reveal, .motion-reveal, #threadDiagram",
    );
    if (!page || !targets) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let observer: IntersectionObserver | undefined;

    if (
      reduceMotion ||
      !("IntersectionObserver" in window) ||
      document.hidden
    ) {
      targets.forEach((target) => target.classList.add("in"));
      return;
    }

    page.classList.add("reveal-ready");
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

    return () => {
      observer?.disconnect();
      page.classList.remove("reveal-ready");
    };
  }, [pageRef, routeKey]);
}
