export default function TestimonialsSection() {
  return (
    <section className={"voices"} id={"voices"}>
      <div className={"container"}>
        <div className={"voices-head reveal"}>
          <p className={"eyebrow"}>{"Made for thoughtful teams"}</p>
          <h2>
            {"Good work deserves a "}
            <span className={"display"}>{"good way of working."}</span>
          </h2>
        </div>
        <div className={"voices-grid"}>
          <figure className={"quote featured reveal"}>
            <span className={"quote-mark"}>{"“"}</span>
            <blockquote>
              {
                "Woven gave our team a single, shared sense of what we’re saying—and why it matters. It’s the first social tool that feels like part of our creative practice."
              }
            </blockquote>
            <figcaption className={"person"}>
              <i className={"person-avatar"}></i>
              <span>
                <b>{"Mara Li"}</b>
                <span>{"Creative Director, Onda Studio"}</span>
              </span>
            </figcaption>
          </figure>
          <figure
            className={"quote reveal"}
            style={{ transitionDelay: ".08s" }}
          >
            <span className={"quote-mark"}>{"“"}</span>
            <blockquote>
              {
                "It turned our content calendar from a spreadsheet I avoided into a space I actually want to open."
              }
            </blockquote>
            <figcaption className={"person"}>
              <i className={"person-avatar two"}></i>
              <span>
                <b>{"Daniel Evans"}</b>
                <span>{"Founder, Field Notes"}</span>
              </span>
            </figcaption>
          </figure>
          <figure
            className={"quote reveal"}
            style={{ transitionDelay: ".16s" }}
          >
            <span className={"quote-mark"}>{"“"}</span>
            <blockquote>
              {
                "Our best conversations no longer disappear into a dozen tabs. That alone changed how we show up."
              }
            </blockquote>
            <figcaption className={"person"}>
              <i className={"person-avatar three"}></i>
              <span>
                <b>{"Amira Khan"}</b>
                <span>{"Community Lead, Common Ground"}</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
