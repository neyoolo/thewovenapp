import { useEffect, useState } from "react";
import WovenLogo from "../layout/WovenLogo";

type HeroSlide =
  | { type: "logo"; label: string }
  | { type: "image"; src: string; alt: string; label: string };

const slides: HeroSlide[] = [
  { type: "logo", label: "Woven, woven into every idea." },
  {
    type: "image",
    src: "/images/idea-threads.svg",
    alt: "A WOVEN illustration connecting ideas across a creative workflow",
    label: "Ideas, connected.",
  },
  {
    type: "image",
    src: "/images/team-planning.jpg",
    alt: "A creative team sharing ideas around a table",
    label: "Make it together.",
  },
  {
    type: "image",
    src: "/images/creative-studio.jpg",
    alt: "A quiet, light-filled creative studio",
    label: "Room to make.",
  },
  {
    type: "image",
    src: "/images/creative-orbit.svg",
    alt: "A colorful WOVEN illustration of a creative campaign taking shape",
    label: "Find your next spark.",
  },
  {
    type: "image",
    src: "/images/content-creation.jpg",
    alt: "Creative collaborators working together over a laptop",
    label: "Keep good work moving.",
  },
];

export default function HeroScreen() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % slides.length);
      }
    }, 4200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const slide = slides[activeSlide];

  return (
    <div
      className={"hero-screen"}
      role={"img"}
      aria-label={`Woven slideshow: ${slide.label}`}
    >
      <div className={"hero-screen-antenna"} aria-hidden={"true"}>
        <i></i>
        <i></i>
      </div>
      <div className={"hero-screen-frame"}>
        <div className={"hero-screen-top"} aria-hidden={"true"}>
          <i></i>
          <i></i>
          <i></i>
          <span>{"WOVEN TV"}</span>
        </div>
        <div className={"hero-screen-display"}>
          {slide.type === "logo" ? (
            <div className={"hero-screen-brand"} key={"woven-logo"}>
              <WovenLogo />
            </div>
          ) : (
            <img key={slide.src} src={slide.src} alt={slide.alt} />
          )}
          <span className={"hero-screen-caption"} key={slide.label}>
            {slide.label}
          </span>
        </div>
        <div className={"hero-screen-controls"} aria-hidden={"true"}>
          <span>{"CHANNEL 01"}</span>
          <div>
            {slides.map((item, index) => (
              <i
                className={index === activeSlide ? "active" : undefined}
                key={item.label}
              ></i>
            ))}
          </div>
          <span>{"● LIVE"}</span>
        </div>
      </div>
      <div className={"hero-screen-feet"} aria-hidden={"true"}>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}
