export default function WorkflowSection() {
  return (
    <section className={"workflow"}>
      <div className={"container"}>
        <div className={"workflow-inner"}>
          <div className={"workflow-head reveal"}>
            <p className={"eyebrow"}>{"A gentler kind of momentum"}</p>
            <h2>
              {"From “we should post” to "}
              <span className={"display"}>{"“that felt like us.”"}</span>
            </h2>
            <p className={"lede"}>
              {
                "One loop for the work before, during, and after you hit publish."
              }
            </p>
          </div>
          <div className={"flow reveal"} style={{ transitionDelay: ".1s" }}>
            <article className={"flow-card"}>
              <span className={"flow-number"}>{"01 — COLLECT"}</span>
              <h3>{"Catch the spark"}</h3>
              <p>
                {"Save notes, links and fleeting ideas wherever they find you."}
              </p>
              <i className={"flow-arrow"}>{"→"}</i>
            </article>
            <article className={"flow-card"}>
              <span className={"flow-number"}>{"02 — CREATE"}</span>
              <h3>{"Make it yours"}</h3>
              <p>{"Work with a thoughtful AI that has learned your voice."}</p>
              <i className={"flow-arrow"}>{"→"}</i>
            </article>
            <article className={"flow-card"}>
              <span className={"flow-number"}>{"03 — SHARE"}</span>
              <h3>{"Send it well"}</h3>
              <p>{"Plan the right message for the right place and moment."}</p>
              <i className={"flow-arrow"}>{"→"}</i>
            </article>
            <article className={"flow-card"}>
              <span className={"flow-number"}>{"04 — LEARN"}</span>
              <h3>{"Bring it forward"}</h3>
              <p>{"Turn every response into a better next instinct."}</p>
              <i className={"flow-arrow"}>{"→"}</i>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
