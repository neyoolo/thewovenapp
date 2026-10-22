import { useEffect, useState } from "react";
import WovenLogo from "./WovenLogo";

type SiteHeaderProps = {
  pathname: string;
};

export default function SiteHeader({ pathname }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = pathname === "/";
  const productHref = "/studio";
  const workflowHref = "/planner";
  const storiesHref = isHome ? "#voices" : "/#voices";

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
      <div className={"announcement"}>
        <span className={"announcement-dot"} aria-hidden={"true"}></span>
        <span>{"Woven for the work worth sharing"}</span>
        <a href={productHref}>
          {"Explore the studio"}
          <span aria-hidden={"true"}>{" ↗"}</span>
        </a>
      </div>
      <header id={"nav"} className={`nav${isScrolled ? " scrolled" : ""}`}>
        <div className={"container nav-inner"}>
          <a className={"brand"} href={"/"} aria-label={"Woven home"}>
            <WovenLogo />
          </a>
          <nav className={"nav-links"} aria-label={"Primary navigation"}>
            {/* <a href={productHref}>{"Product"}</a> */}
            <a href={storiesHref}>{"HomePage"}</a>
            <a href={workflowHref}>{"How it works"}</a>
            {/* <a href={"/signals"}>{"Signals"}</a> */}
            <a href={"/pricing"}>{"Pricing"}</a>
          </nav>
          <div className={"nav-actions"}>
            <a className={"login"} href={"/pricing"}>
              {"Sign in"}
            </a>
            <a className={"btn btn-dark"} href={"/pricing"}>
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
              <span className={"menu-label"}>
                {isMenuOpen ? "Close" : "Menu"}
              </span>
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
        <a href={productHref} onClick={closeMobileNav}>
          {"Product"}
        </a>
        <a href={workflowHref} onClick={closeMobileNav}>
          {"How it works"}
        </a>
        <a href={"/signals"} onClick={closeMobileNav}>
          {"Signals"}
        </a>
        <a href={storiesHref} onClick={closeMobileNav}>
          {"HomePage"}
        </a>
        <a href={"/pricing"} onClick={closeMobileNav}>
          {"Pricing"}
        </a>
        <a
          className={"btn btn-dark"}
          href={"/pricing"}
          onClick={closeMobileNav}
        >
          {"Start for free "}
          <span className={"arrow"}>{"→"}</span>
        </a>
      </nav>
    </>
  );
}
