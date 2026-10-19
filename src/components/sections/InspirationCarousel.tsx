import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/team-planning.jpg",
    alt: "A creative team sharing ideas around a table",
    category: "Find your people",
    title: "Good ideas get better together.",
    description:
      "Bring your team into the same creative rhythm, from the first spark to the final share.",
  },
  {
    image: "/images/idea-threads.svg",
    alt: "Original WOVEN illustration connecting ideas across a creative workflow",
    category: "Connect the dots",
    title: "One spark can go a hundred places.",
    description:
      "Give every thought a thread to follow, and watch the pieces of your next great idea come together.",
  },
  {
    image: "/images/creative-studio.jpg",
    alt: "A bright, calm workspace ready for a new project",
    category: "Make room to think",
    title: "A little space can change everything.",
    description:
      "Give your next big idea a calm home, clear context, and room to become something real.",
  },
  {
    image: "/images/creative-orbit.svg",
    alt: "Original WOVEN illustration of a bright creative campaign taking shape",
    category: "Dream it, then shape it",
    title: "Make something only you could make.",
    description:
      "Mix your point of view with a little structure, and make space for work that feels unmistakably yours.",
  },
  {
    image: "/images/content-creation.jpg",
    alt: "Colleagues collaborating over a laptop at a table",
    category: "Create in your own way",
    title: "Your point of view belongs out there.",
    description:
      "Turn the notes, drafts, and half-formed thoughts into work that sounds like you.",
  },
  {
    image: "/images/team-workspace.jpg",
    alt: "A shared studio space designed for focused team work",
    category: "Keep the good work flowing",
    title: "Make a practice that feels good.",
    description:
      "From planning day to publish day, keep the work moving without losing the joy in it.",
  },
];

export default function InspirationCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isPaused, setIsPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) setIsPaused(true);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () =>
      mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) {
        setActiveSlide((current) => (current + 1) % slides.length);
      }
    }, 6000);

    return () => window.clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  const slide = slides[activeSlide];

  return (
    <section className={"inspiration"} aria-label={"Woven inspiration"}>
      <div className={"container"}>
        <div className={"inspiration-heading reveal"}>
          <p className={"eyebrow"}>{"A little inspiration"}</p>
          <h2>
            {"Good things happen when "}
            <span className={"display"}>{"ideas find their people."}</span>
          </h2>
        </div>

        <div
          className={"inspiration-carousel motion-reveal"}
          role={"region"}
          aria-roledescription={"carousel"}
          aria-label={"Creative work inspiration"}
        >
          <div
            className={"inspiration-copy"}
            aria-live={isPaused ? "polite" : "off"}
          >
            <p className={"inspiration-category"}>{slide.category}</p>
            <h3 key={slide.title}>{slide.title}</h3>
            <p className={"inspiration-description"}>{slide.description}</p>

            <div className={"inspiration-controls"}>
              <button
                className={"carousel-arrow"}
                type={"button"}
                aria-label={"Previous slide"}
                onClick={() => goToSlide(activeSlide - 1)}
              >
                {"←"}
              </button>
              <button
                className={"carousel-arrow"}
                type={"button"}
                aria-label={"Next slide"}
                onClick={() => goToSlide(activeSlide + 1)}
              >
                {"→"}
              </button>
              <button
                className={"carousel-toggle"}
                type={"button"}
                aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                onClick={() => setIsPaused((paused) => !paused)}
                disabled={prefersReducedMotion}
              >
                {isPaused ? "Play" : "Pause"}
                <span aria-hidden={"true"}>{isPaused ? "▶" : "Ⅱ"}</span>
              </button>
            </div>

            <div
              className={"carousel-pagination"}
              aria-label={"Choose a slide"}
            >
              {slides.map((item, index) => (
                <button
                  key={item.image}
                  type={"button"}
                  aria-label={`Show slide ${index + 1}: ${item.category}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  className={index === activeSlide ? "active" : undefined}
                  onClick={() => goToSlide(index)}
                />
              ))}
              <span className={"carousel-count"}>
                {String(activeSlide + 1).padStart(2, "0")}
                {" / "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <figure className={"inspiration-visual"}>
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fetchPriority={"high"}
            />
            <figcaption>
              <span>{"A more human way to make social."}</span>
              <span className={"inspiration-spark"} aria-hidden={"true"}>
                {"✳"}
              </span>
            </figcaption>
          </figure>
        </div>
        <p className={"image-credit"}>
          {"Photography from "}
          <a href={"https://unsplash.com"} target={"_blank"} rel={"noreferrer"}>
            {"Unsplash"}
          </a>
          {" · Original WOVEN illustrations."}
        </p>
      </div>
    </section>
  );
}
