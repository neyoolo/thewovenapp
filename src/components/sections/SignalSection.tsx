import { useState } from "react";

export default function SignalSection() {
  const [activePeriod, setActivePeriod] = useState<"7d" | "30d" | "90d">("30d");

  return (
    <section className={"story"} id={"signals"}>
      <div className={"container story-grid"}>
        <div className={"reveal"}>
          <p className={"eyebrow"}>{"The signal, not the noise"}</p>
          <h2>
            {"Every post teaches you "}
            <span className={"display"}>{"something useful."}</span>
          </h2>
          <p className={"lede"}>
            {
              "Woven notices the patterns hiding between your ideas, your audience, and your results—then turns them into your next best move."
            }
          </p>
          <div className={"story-stat"}>
            <strong>{"37%"}</strong>
            <span>{"more time spent making work you’re proud to share."}</span>
          </div>
        </div>
        <div
          className={"signal-board reveal"}
          style={{ transitionDelay: ".12s" }}
        >
          <div className={"signal-top"}>
            <b>{"Audience resonance"}</b>
            <div className={"time-tabs"}>
              <button
                className={activePeriod === "7d" ? "active" : undefined}
                onClick={() => setActivePeriod("7d")}
              >
                {"7d"}
              </button>
              <button
                className={activePeriod === "30d" ? "active" : undefined}
                onClick={() => setActivePeriod("30d")}
              >
                {"30d"}
              </button>
              <button
                className={activePeriod === "90d" ? "active" : undefined}
                onClick={() => setActivePeriod("90d")}
              >
                {"90d"}
              </button>
            </div>
          </div>
          <div className={"chart"}>
            <svg
              viewBox={"0 0 600 180"}
              preserveAspectRatio={"none"}
              aria-label={"Audience resonance rising over 30 days"}
            >
              <defs>
                <linearGradient id={"area"} x1={"0"} x2={"0"} y1={"0"} y2={"1"}>
                  <stop stopColor={"#5bc0be"} stopOpacity={".32"}></stop>
                  <stop
                    offset={"1"}
                    stopColor={"#5bc0be"}
                    stopOpacity={"0"}
                  ></stop>
                </linearGradient>
              </defs>
              <path
                d={
                  "M0 145 C35 135 48 150 78 137 S115 114 140 128 S182 146 205 112 S250 85 275 102 S310 125 337 93 S375 76 397 82 S430 114 457 73 S495 42 520 64 S555 84 600 22 L600 180 L0 180Z"
                }
                fill={"url(#area)"}
              ></path>
              <path
                d={
                  "M0 145 C35 135 48 150 78 137 S115 114 140 128 S182 146 205 112 S250 85 275 102 S310 125 337 93 S375 76 397 82 S430 114 457 73 S495 42 520 64 S555 84 600 22"
                }
                fill={"none"}
                stroke={"#5bc0be"}
                strokeWidth={"3"}
              ></path>
              <circle cx={"600"} cy={"22"} r={"5"} fill={"#6fffe9"}></circle>
            </svg>
            <div className={"chart-labels"}>
              <span>{"Aug 01"}</span>
              <span>{"Aug 08"}</span>
              <span>{"Aug 15"}</span>
              <span>{"Aug 22"}</span>
              <span>{"Aug 30"}</span>
            </div>
          </div>
          <div className={"signal-bottom"}>
            <div className={"metric"}>
              <small>{"Meaningful replies"}</small>
              <b>{"1,284"}</b>
              <span>{"↑ 24.8%"}</span>
            </div>
            <div className={"metric"}>
              <small>{"Saved posts"}</small>
              <b>{"647"}</b>
              <span>{"↑ 18.2%"}</span>
            </div>
            <div className={"metric"}>
              <small>{"Right audience"}</small>
              <b>{"78.4%"}</b>
              <span>{"↑ 6.1%"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
