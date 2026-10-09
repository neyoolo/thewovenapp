import { useRef } from "react";
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

export default function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  useRevealAnimations(pageRef);

  return (
    <div className="woven-page" ref={pageRef}>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <LogoCloudSection />
        <LifecycleSection />
        <SignalSection />
        <PillarsSection />
        <WorkflowSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <SiteFooter />
    </div>
  );
}
