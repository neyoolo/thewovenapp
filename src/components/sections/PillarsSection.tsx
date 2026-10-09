export default function PillarsSection() {
  return (
    <section className={"pillars"} id={"workflow"}>
      <div className={"container"}>
        <div className={"section-head reveal"}>
          <div>
            <p className={"eyebrow"}>{"Less managing. More making."}</p>
            <h2>
              {"The whole rhythm,"}
              <br />
              <span className={"display"}>{"finally in one place."}</span>
            </h2>
          </div>
          <p className={"lede"}>
            {
              "From the first flicker of an idea to the conversation it starts, Woven keeps your work beautifully connected."
            }
          </p>
        </div>
        <div className={"pillar-grid"}>
          <article className={"pillar reveal"}>
            <div className={"p-icon coral"}>
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
              >
                <path
                  d={"M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"}
                ></path>
              </svg>
            </div>
            <h3>{"Find the thread."}</h3>
            <p>
              {
                "Drop in a passing thought, a voice note, a saved post. Woven helps the ideas that belong together find each other."
              }
            </p>
            <div className={"mini-visual"}>
              <i className={"thread-line"}></i>
              <div className={"thread-note"}>{"A quieter kind of launch"}</div>
              <div className={"thread-note"}>{"Why we make in public"}</div>
              <div className={"thread-note"}>{"The studio’s next chapter"}</div>
            </div>
          </article>
          <article
            className={"pillar reveal"}
            style={{ transitionDelay: ".09s" }}
          >
            <div className={"p-icon blue"}>
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
              >
                <rect
                  x={"3"}
                  y={"4"}
                  width={"18"}
                  height={"17"}
                  rx={"2"}
                ></rect>
                <path
                  d={"M8 2v4m8-4v4M3 10h18M8 14h.01M12 14h.01M16 14h.01"}
                ></path>
              </svg>
            </div>
            <h3>{"Shape it for every room."}</h3>
            <p>
              {
                "One strong point of view becomes native, intentional work for every platform—without losing the voice that made it yours."
              }
            </p>
            <div className={"mini-visual"}>
              <div className={"platform-pills"}>
                <b>{"LinkedIn · long-form"}</b>
                <b>{"Instagram · carousel"}</b>
                <b>{"Threads · conversational"}</b>
              </div>
              <div className={"post-card"}>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </article>
          <article
            className={"pillar reveal"}
            style={{ transitionDelay: ".18s" }}
          >
            <div className={"p-icon green"}>
              <svg
                viewBox={"0 0 24 24"}
                fill={"none"}
                stroke={"currentColor"}
                strokeWidth={"1.8"}
              >
                <path d={"M3 20V10l5-5 4 4 6-6 3 3M3 16h18"}></path>
              </svg>
            </div>
            <h3>{"Keep the good bits."}</h3>
            <p>
              {
                "See what earned attention, sparked a real reply, or simply felt right. Your next decision starts with a clearer signal."
              }
            </p>
            <div className={"mini-visual"}>
              <div className={"post-bubble"}>{"Worth doing again ↑"}</div>
              <div className={"post-card"}>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
