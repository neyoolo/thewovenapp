type ProductPageProps = {
  eyebrow: string;
  title: string;
  displayTitle: string;
  description: string;
  highlights: Array<{ title: string; description: string }>;
  nextStep: string;
  nextHref: string;
  label: string;
  pageKind: "studio" | "planner" | "signals";
};

function ProductPage({
  eyebrow,
  title,
  displayTitle,
  description,
  highlights,
  nextStep,
  nextHref,
  label,
  pageKind,
}: ProductPageProps) {
  return (
    <section className={`info-page product-page product-page--${pageKind}`}>
      <div className={"container"}>
        <header className={"page-hero motion-reveal"}>
          <p className={"eyebrow"}>{eyebrow}</p>
          <h1>
            {title}
            <br />
            <span className={"display"}>{displayTitle}</span>
          </h1>
          <p className={"lede"}>{description}</p>
          <a className={"btn btn-dark"} href={nextHref}>
            {nextStep}
            <span className={"arrow"}>{"→"}</span>
          </a>
        </header>

        <div className={"product-page-grid"}>
          {highlights.map((highlight, index) => (
            <article
              className={"product-highlight motion-reveal"}
              key={highlight.title}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <span className={"product-highlight-number"}>
                {`0${index + 1}`}
              </span>
              <h2>{highlight.title}</h2>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>

        <p className={"product-preview-note motion-reveal"}>
          {label}
          {" is part of Woven’s product vision. Some features shown in the "}
          {"website preview are illustrative and may not yet be available."}
        </p>
      </div>
    </section>
  );
}

export function StudioPage() {
  return (
    <ProductPage
      eyebrow={"The Woven Studio"}
      title={"A home for"}
      displayTitle={"the whole idea."}
      description={
        "Bring brand context, creative drafts, and the small signals that shape your work into one calm, connected workspace."
      }
      highlights={[
        {
          title: "Keep the context close",
          description:
            "Give ideas a home alongside the voice, tone, and creative direction that make them feel like you.",
        },
        {
          title: "Move from spark to draft",
          description:
            "Turn a passing thought into a considered first draft, then shape it with an AI assistant informed by your brand context.",
        },
        {
          title: "Make it together",
          description:
            "Give collaborators a shared view of what is taking shape, what is ready, and what still needs a little thought.",
        },
      ]}
      nextStep={"Explore plans"}
      nextHref={"/pricing"}
      label={"The Studio"}
      pageKind={"studio"}
    />
  );
}

export function PlannerPage() {
  return (
    <ProductPage
      eyebrow={"The Woven Planner"}
      title={"A rhythm that"}
      displayTitle={"leaves room."}
      description={
        "Gather the ideas worth keeping, give them a thoughtful place in your schedule, and see how each piece fits into the bigger picture."
      }
      highlights={[
        {
          title: "Catch ideas while they’re fresh",
          description:
            "Collect notes, links, and early thoughts in a shared library, so good ideas are easier to return to.",
        },
        {
          title: "Plan with the whole week in view",
          description:
            "Arrange upcoming work across a clear content calendar and see what is planned, in progress, or ready to share.",
        },
        {
          title: "Prepare each post with purpose",
          description:
            "Shape one point of view for different social spaces without losing the voice that made it yours.",
        },
      ]}
      nextStep={"See the Studio"}
      nextHref={"/studio"}
      label={"The Planner"}
      pageKind={"planner"}
    />
  );
}

export function SignalsPage() {
  return (
    <ProductPage
      eyebrow={"The Woven Signals"}
      title={"Learn from"}
      displayTitle={"what resonates."}
      description={
        "Look beyond a busy dashboard. Bring audience responses and publishing patterns back to the ideas and choices behind your next post."
      }
      highlights={[
        {
          title: "Notice meaningful responses",
          description:
            "Bring replies, saves, and audience engagement into view to help understand which ideas are connecting.",
        },
        {
          title: "See patterns over time",
          description:
            "Compare recent activity across a chosen period and spot changes worth a closer look.",
        },
        {
          title: "Carry a lesson into the next draft",
          description:
            "Connect what you learn to the work ahead, so performance informs the next creative decision instead of living in another report.",
        },
      ]}
      nextStep={"Explore plans"}
      nextHref={"/pricing"}
      label={"Woven Signals"}
      pageKind={"signals"}
    />
  );
}
