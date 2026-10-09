export default function PricingSection() {
  return (
    <section className={"pricing"} id={"pricing"}>
      <div className={"container"}>
        <div className={"price-top reveal"}>
          <p className={"eyebrow"}>{"Begin with room to grow"}</p>
          <h2>
            {"A plan for the work"}
            <br />
            {"you’re building toward."}
          </h2>
          <p className={"lede"}>
            {
              "Start free. Change plans when the work calls for it. No per-seat surprises, no complicated credit math."
            }
          </p>
        </div>
        <div className={"price-grid"}>
          <article className={"price-card reveal"}>
            <span className={"price-kicker"}>{"For getting started"}</span>
            <h3>{"Small but mighty"}</h3>
            <p>{"For a person finding a more intentional rhythm."}</p>
            <div className={"price"}>
              {"$0 "}
              <small>{"/ month"}</small>
            </div>
            <ul className={"price-list"}>
              <li>{"1 social workspace"}</li>
              <li>{"30 AI-assisted ideas"}</li>
              <li>{"Essential publishing tools"}</li>
            </ul>
            <a className={"btn btn-light"} href={"#top"}>
              {"Start free"}
            </a>
          </article>
          <article
            className={"price-card popular reveal"}
            style={{ transitionDelay: ".08s" }}
          >
            <span className={"price-kicker"}>{"For growing teams"}</span>
            <h3>{"In the flow"}</h3>
            <p>
              {"For teams turning good instincts into a reliable practice."}
            </p>
            <div className={"price"}>
              {"$24 "}
              <small>{"/ month"}</small>
            </div>
            <ul className={"price-list"}>
              <li>{"Everything in Small but mighty"}</li>
              <li>{"Unlimited saved ideas"}</li>
              <li>{"Shared brand voice & signals"}</li>
            </ul>
            <a className={"btn btn-dark"} href={"#top"}>
              {"Start 14-day trial "}
              <span className={"arrow"}>{"→"}</span>
            </a>
          </article>
          <article
            className={"price-card reveal"}
            style={{ transitionDelay: ".16s" }}
          >
            <span className={"price-kicker"}>{"For studio-scale work"}</span>
            <h3>{"Made together"}</h3>
            <p>
              {"For organisations with more moving parts and bigger ambitions."}
            </p>
            <div className={"price"}>{"Let’s talk"}</div>
            <ul className={"price-list"}>
              <li>{"Multiple workspaces"}</li>
              <li>{"Advanced roles & permissions"}</li>
              <li>{"Dedicated creative partner"}</li>
            </ul>
            <a className={"btn btn-light"} href={"mailto:hello@woven.app"}>
              {"Talk to us "}
              <span className={"arrow"}>{"→"}</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
