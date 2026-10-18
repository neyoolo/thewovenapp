export default function PricingPage() {
  return (
    <section className={"pricing pricing-page"}>
      <div className={"container"}>
        <div className={"price-top page-hero motion-reveal"}>
          <p className={"eyebrow"}>{"Simple monthly plans"}</p>
          <h1>
            {"A clearer way"}
            <br />
            {"to do your best work."}
          </h1>
          <p className={"lede"}>
            {"Choose a plan for the way you work today, with room to grow."}
          </p>
          <a className={"page-text-link"} href={"/studio"}>
            {"Explore the Woven studio "}
            <span aria-hidden={"true"}>{"→"}</span>
          </a>
        </div>

        <div className={"price-grid"}>
          <article className={"price-card motion-reveal"}>
            <span className={"price-kicker"}>{"For independent creators"}</span>
            <h2>{"Small but mighty"}</h2>
            <p>{"The essentials to build a more intentional social rhythm."}</p>
            <div className={"price"}>
              {"$15 "}
              <small>{"/ month"}</small>
            </div>
            <ul className={"price-list"}>
              <li>{"1 social workspace"}</li>
              <li>{"30 AI-assisted ideas"}</li>
              <li>{"Essential publishing tools"}</li>
            </ul>
            <a
              className={"btn btn-light"}
              href={"/contact?plan=Small%20but%20mighty%20%2415"}
            >
              {"Ask about this plan"}
            </a>
          </article>

          <article
            className={"price-card popular motion-reveal"}
            style={{ transitionDelay: ".1s" }}
          >
            <span className={"price-kicker"}>{"For growing teams"}</span>
            <h2>{"In the flow"}</h2>
            <p>
              {
                "A shared practice for teams turning good instincts into great work."
              }
            </p>
            <div className={"price"}>
              {"$30 "}
              <small>{"/ month"}</small>
            </div>
            <ul className={"price-list"}>
              <li>{"Everything in Small but mighty"}</li>
              <li>{"Unlimited saved ideas"}</li>
              <li>{"Shared brand voice & signals"}</li>
            </ul>
            <a
              className={"btn btn-dark"}
              href={"/contact?plan=In%20the%20flow%20%2430"}
            >
              {"Ask about this plan "}
              <span className={"arrow"}>{"→"}</span>
            </a>
          </article>

          <article
            className={"price-card motion-reveal"}
            style={{ transitionDelay: ".2s" }}
          >
            <span className={"price-kicker"}>{"For studio-scale work"}</span>
            <h2>{"Made together"}</h2>
            <p>
              {
                "More room for organisations with collaborators and multiple brands."
              }
            </p>
            <div className={"price"}>
              {"$45 "}
              <small>{"/ month"}</small>
            </div>
            <ul className={"price-list"}>
              <li>{"Everything in In the flow"}</li>
              <li>{"Multiple workspaces"}</li>
              <li>{"Advanced roles & permissions"}</li>
              <li>{"Creative partner support"}</li>
            </ul>
            <a
              className={"btn btn-light"}
              href={"/contact?plan=Made%20together%20%2445"}
            >
              {"Ask about this plan "}
              <span className={"arrow"}>{"→"}</span>
            </a>
          </article>
        </div>

        <div className={"pricing-note motion-reveal"}>
          <h2>{"Good to know"}</h2>
          <p>
            {
              "All listed prices are monthly. Plan enquiries currently go to our team, who can confirm availability, billing, and the features included before you sign up."
            }
          </p>
          <a className={"page-text-link"} href={"/contact"}>
            {"Questions about plans? Contact us "}
            <span aria-hidden={"true"}>{"→"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
