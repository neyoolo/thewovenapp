import { useEffect, useRef, useState, type MouseEvent } from "react";
import "../7.css";
import SiteHeader from "./components/layout/SiteHeader";
import HeroSection from "./components/sections/HeroSection";
import LogoCloudSection from "./components/sections/LogoCloudSection";
import LifecycleSection from "./components/sections/LifecycleSection";
import SignalSection from "./components/sections/SignalSection";
import PillarsSection from "./components/sections/PillarsSection";
import WorkflowSection from "./components/sections/WorkflowSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import PricingSection from "./components/sections/PricingSection";
import SiteFooter from "./components/layout/SiteFooter";
import { useRevealAnimations } from "./hooks/useRevealAnimations";
import {
  CareersPage,
  ContactPage,
  NotFoundPage,
  PrivacyPage,
  TermsPage,
} from "./pages/InfoPages";
import PricingPage from "./pages/PricingPage";
import { PlannerPage, SignalsPage, StudioPage } from "./pages/ProductPages";

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [currentUrl, setCurrentUrl] = useState(
    () =>
      `${window.location.pathname}${window.location.search}${window.location.hash}`,
  );
  const url = new URL(currentUrl, window.location.origin);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const routeKey = `${path}${url.search}${url.hash}`;
  useRevealAnimations(pageRef, routeKey);

  useEffect(() => {
    const updateUrl = () => {
      setCurrentUrl(
        `${window.location.pathname}${window.location.search}${window.location.hash}`,
      );
    };

    window.addEventListener("popstate", updateUrl);
    window.addEventListener("hashchange", updateUrl);
    return () => {
      window.removeEventListener("popstate", updateUrl);
      window.removeEventListener("hashchange", updateUrl);
    };
  }, []);

  useEffect(() => {
    const metadata: Record<string, { title: string; description: string }> = {
      "/": {
        title: "Woven — Make space for better social",
        description:
          "Woven is the calm command centre for creating, publishing, and learning from social media.",
      },
      "/pricing": {
        title: "Plans & Pricing — Woven",
        description:
          "Explore Woven plans for thoughtful solo creators, growing teams, and studio-scale work.",
      },
      "/terms": {
        title: "Terms of Service — Woven",
        description: "Read the terms for using the Woven website and services.",
      },
      "/careers": {
        title: "Careers — Woven",
        description:
          "Learn about working with Woven and introduce yourself to our team.",
      },
      "/contact": {
        title: "Contact — Woven",
        description:
          "Contact Woven with questions about plans, the product, partnerships, or anything else.",
      },
      "/studio": {
        title: "Woven Studio — Creative workspace",
        description:
          "Discover the Woven Studio: a connected workspace for brand context, creative drafts, and collaboration.",
      },
      "/planner": {
        title: "Woven Planner — Thoughtful publishing",
        description:
          "See how Woven helps gather ideas, plan a content calendar, and prepare social posts.",
      },
      "/signals": {
        title: "Woven Signals — Learn from your work",
        description:
          "Learn how Woven brings audience responses and publishing patterns into your next creative decision.",
      },
      "/privacy": {
        title: "Privacy Notice — Woven",
        description:
          "Read what information the Woven website handles and the choices available to you.",
      },
    };
    const pageMetadata = metadata[path] ?? {
      title: "Page not found — Woven",
      description: "The requested page could not be found on Woven.",
    };
    document.title = pageMetadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", pageMetadata.description);

    if (url.hash) {
      const targetId = decodeURIComponent(url.hash.slice(1));
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView();
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [path, url.search, url.hash]);

  function handleInternalNavigation(event: MouseEvent<HTMLDivElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Element)) return;

    const anchor = target.closest<HTMLAnchorElement>("a[href]");
    if (
      !anchor ||
      anchor.target ||
      anchor.hasAttribute("download")
    ) {
      return;
    }

    const destination = new URL(anchor.href, window.location.href);
    if (
      destination.origin !== window.location.origin ||
      !["http:", "https:"].includes(destination.protocol)
    ) {
      return;
    }

    const destinationPath = destination.pathname.replace(/\/+$/, "") || "/";
    if (
      destinationPath === path &&
      destination.search === url.search &&
      destination.hash &&
      destination.hash !== url.hash
    ) {
      return;
    }

    event.preventDefault();
    if (
      destinationPath === path &&
      destination.search === url.search &&
      destination.hash === url.hash
    ) {
      return;
    }

    const nextUrl = `${destination.pathname}${destination.search}${destination.hash}`;
    window.history.pushState(null, "", nextUrl);
    setCurrentUrl(nextUrl);
  }

  let page;
  switch (path) {
    case "/":
      page = (
        <>
          <HeroSection />
          <LogoCloudSection />
          <LifecycleSection />
          <SignalSection />
          <PillarsSection />
          <WorkflowSection />
          <TestimonialsSection />
          <PricingSection />
        </>
      );
      break;
    case "/pricing":
      page = <PricingPage />;
      break;
    case "/studio":
      page = <StudioPage />;
      break;
    case "/planner":
      page = <PlannerPage />;
      break;
    case "/signals":
      page = <SignalsPage />;
      break;
    case "/privacy":
      page = <PrivacyPage />;
      break;
    case "/terms":
      page = <TermsPage />;
      break;
    case "/careers":
      page = <CareersPage />;
      break;
    case "/contact":
      page = <ContactPage />;
      break;
    default:
      page = <NotFoundPage />;
  }

  return (
    <div
      className="woven-page"
      ref={pageRef}
      onClick={handleInternalNavigation}
    >
      <SiteHeader pathname={path} />
      <main id="main">{page}</main>
      <SiteFooter />
    </div>
  );
}
