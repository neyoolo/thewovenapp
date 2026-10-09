import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNavState = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateNavState, { passive: true });
    updateNavState();

    return () => window.removeEventListener("scroll", updateNavState);
  }, []);

  const closeMobileNav = () => setIsMenuOpen(false);

  return (
    <>
      <a className={"skip"} href={"#main"}>
        {"Skip to content"}
      </a>
      <header id={"nav"} className={`nav${isScrolled ? " scrolled" : ""}`}>
        <div className={"container nav-inner"}>
          <a className={"brand"} href={"#top"} aria-label={"Woven home"}>
            <span className={"brand-mark"} aria-hidden={"true"}>
              <svg
                width={"18"}
                height={"18"}
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"2.6"}
              >
                <path d={"M4 6.5 8.1 18 12 8l3.9 10L20 6.5"}></path>
              </svg>
            </span>
            {" woven"}
          </a>
          <nav className={"nav-links"} aria-label={"Primary navigation"}>
            <a href={"#product"}>{"Product"}</a>
            <a href={"#workflow"}>{"How it works"}</a>
            <a href={"#voices"}>{"Stories"}</a>
            <a href={"#pricing"}>{"Pricing"}</a>
          </nav>
          <div className={"nav-actions"}>
            <a className={"login"} href={"#pricing"}>
              {"Sign in"}
            </a>
            <a className={"btn btn-dark"} href={"#pricing"}>
              {"Start for free "}
              <span className={"arrow"}>{"→"}</span>
            </a>
            <button
              id={"menu"}
              className={`menu${isMenuOpen ? " open" : ""}`}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <i></i>
            </button>
          </div>
        </div>
      </header>
      <nav
        id={"mobileNav"}
        aria-label={"Mobile navigation"}
        className={`mobile-nav${isMenuOpen ? " open" : ""}`}
      >
        <a href={"#product"} onClick={closeMobileNav}>
          {"Product"}
        </a>
        <a href={"#workflow"} onClick={closeMobileNav}>
          {"How it works"}
        </a>
        <a href={"#voices"} onClick={closeMobileNav}>
          {"Stories"}
        </a>
        <a href={"#pricing"} onClick={closeMobileNav}>
          {"Pricing"}
        </a>
        <a
          className={"btn btn-dark"}
          href={"#pricing"}
          onClick={closeMobileNav}
        >
          {"Start for free "}
          <span className={"arrow"}>{"→"}</span>
        </a>
      </nav>
    </>
  );
}
