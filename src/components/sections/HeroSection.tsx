import { useState } from "react";

export default function HeroSection() {
  const [alternateDraft, setAlternateDraft] = useState(false);

  return (
    <section className={"hero"} id={"top"}>
      <div className={"container"}>
        <div className={"hero-copy reveal"}>
          <p className={"eyebrow"}>{"The social operating system"}</p>
          <h1>
            <span className={"hero-title-line"}>{"Make space for"}</span>
            <br />
            <span className={"display hero-title-highlight"}>
              {"better social."}
            </span>
          </h1>
          <p className={"lede"}>
            {
              "Woven turns all the scattered work behind your social presence into one calm, brilliantly connected studio."
            }
          </p>
          <div className={"hero-actions"}>
            <a href={"#pricing"} className={"btn btn-coral"}>
              {"Start creating free "}
              <span className={"arrow"}>{"→"}</span>
            </a>
            <a href={"#product"} className={"btn btn-light"}>
              <span>{"◉"}</span>
              {" See it in motion"}
            </a>
          </div>
          <div className={"micro-proof"}>
            <span className={"faces"} aria-hidden={"true"}>
              <i className={"face"}></i>
              <i className={"face"}></i>
              <i className={"face"}></i>
            </span>
            {" Trusted by 2,000+ thoughtful teams"}
          </div>
        </div>
        <div
          className={"studio-wrap reveal"}
          style={{ transitionDelay: ".12s" }}
          id={"product"}
        >
          <div
            className={"studio"}
            aria-label={"A preview of the Woven content studio"}
          >
            <aside className={"studio-side"}>
              <div className={"workspace"}>
                <span className={"mini-logo"}>{"w"}</span>
                <span>
                  {"Onda Studio"}
                  <small>{"Creative workspace"}</small>
                </span>
              </div>
              <p className={"side-label"}>{"Workspace"}</p>
              <div className={"side-links"}>
                <a className={"side-link active"} href={"#product"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                  >
                    <path d={"M4 12h16M4 6h16M4 18h10"}></path>
                  </svg>
                  {" Today "}
                  <i className={"side-dot"}></i>
                </a>
                <a className={"side-link"} href={"#workflow"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                  >
                    <rect
                      x={"3"}
                      y={"4"}
                      width={"18"}
                      height={"17"}
                      rx={"2"}
                    ></rect>
                    <path d={"M8 2v4m8-4v4M3 10h18"}></path>
                  </svg>
                  {" Planner"}
                </a>
                <a className={"side-link"} href={"#voices"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                  >
                    <path
                      d={
                        "M20 15a4 4 0 0 1-4 4H8l-4 3V7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4z"
                      }
                    ></path>
                  </svg>
                  {" Community"}
                </a>
                <a className={"side-link"} href={"#workflow"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                  >
                    <path d={"M4 19V5m0 14h16M7 15l4-4 3 2 5-6"}></path>
                  </svg>
                  {" Signals"}
                </a>
              </div>
              <p className={"side-label"}>{"Library"}</p>
              <div className={"side-links"}>
                <a className={"side-link"} href={"#workflow"}>
                  <svg
                    viewBox={"0 0 24 24"}
                    fill={"none"}
                    stroke={"currentColor"}
                    strokeWidth={"2"}
                  >
                    <path d={"M4 4h16v16H4zM8 8h8M8 12h8M8 16h5"}></path>
                  </svg>
                  {" Brand voice"}
                </a>
              </div>
              <div className={"side-bottom"}>
                <small>{"Woven plan"}</small>
                <b>{"18 of 25 ideas used"}</b>
                <div className={"side-progress"}>
                  <i></i>
                </div>
              </div>
            </aside>
            <div className={"studio-main"}>
              <div className={"studio-top"}>
                <div className={"crumb"}>
                  <span>{"Today"}</span>
                  <span>{"/"}</span>
                  <b>{"Make the invisible, visible"}</b>
                </div>
                <div className={"avatar-stack"}>
                  <span className={"avatar"}>{"ML"}</span>
                  <span className={"avatar"}>{"AN"}</span>
                  <span className={"avatar"}>{"RK"}</span>
                  <i className={"pulse"} title={"All changes saved"}></i>
                </div>
              </div>
              <div className={"editor-heading"}>
                <h3>
                  {"A bright idea, "}
                  <span className={"display"}>{"already in motion."}</span>
                </h3>
                <p>{"Saved just now"}</p>
              </div>
              <div className={"smart-card"}>
                <div className={"smart-head"}>
                  <span className={"ai-label"}>
                    <i className={"spark"}>{"✦"}</i>
                    {" Woven draft"}
                  </span>
                  <button aria-label={"More draft options"}>{"•••"}</button>
                </div>
                <div className={"prompt"}>
                  {alternateDraft
                    ? "Clarity is not the absence of ideas. It’s knowing "
                    : "The best creative work doesn’t need more noise. It needs a little more "}
                  <strong>
                    {alternateDraft
                      ? "which one deserves the room."
                      : "room to connect."}
                  </strong>
                  <span className={"prompt-caret"}></span>
                </div>
                <div className={"tag-row"}>
                  <span className={"tag active"}>{"In your voice"}</span>
                  <span className={"tag"}>{"Thoughtful"}</span>
                  <span className={"tag"}>{"LinkedIn"}</span>
                </div>
                <div className={"composer-foot"}>
                  <span className={"tone"}>
                    {"Tone "}
                    <b>{"Clear & warm"}</b>
                  </span>
                  <button
                    className={"mini-send"}
                    id={"refreshDraft"}
                    onClick={() => setAlternateDraft((alternate) => !alternate)}
                  >
                    {alternateDraft ? "Try another " : "Refresh "}
                    <span>{"↻"}</span>
                  </button>
                </div>
              </div>
              <div className={"plan-row"}>
                <div className={"plan"}>
                  <div className={"plan-top"}>
                    <span>{"Content pulse"}</span>
                    <small>{"LAST 7 DAYS"}</small>
                  </div>
                  <div className={"mini-bars"}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <div className={"plan"}>
                  <div className={"plan-top"}>
                    <span>{"Best time"}</span>
                    <small>{"THU · 9:00"}</small>
                  </div>
                  <div className={"mini-bars"}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
                <div className={"plan"}>
                  <div className={"plan-top"}>
                    <span>{"Ideas ready"}</span>
                    <small>{"08"}</small>
                  </div>
                  <div className={"mini-bars"}>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
            <aside className={"studio-insights"}>
              <div className={"insights-title"}>
                {"Your signal "}
                <span className={"live"}>{"live"}</span>
              </div>
              <div className={"insight-callout"}>
                <strong>
                  {"Stories with a point of view travel 2.3× further."}
                </strong>
                <p>{"Try opening with your strongest belief this week."}</p>
                <span className={"up"}>{"↑ 18% THIS MONTH"}</span>
              </div>
              <p className={"queue-title"}>{"Up next"}</p>
              <div className={"queue"}>
                <div className={"queue-item"}>
                  <i className={"queue-art"}></i>
                  <span className={"queue-copy"}>
                    <b>{"Studio notes, vol. 04"}</b>
                    <span>{"Tomorrow · 09:00"}</span>
                  </span>
                </div>
                <div className={"queue-item"}>
                  <i className={"queue-art"}></i>
                  <span className={"queue-copy"}>
                    <b>{"Meet the makers"}</b>
                    <span>{"Friday · 11:30"}</span>
                  </span>
                </div>
                <div className={"queue-item"}>
                  <i className={"queue-art"}></i>
                  <span className={"queue-copy"}>
                    <b>{"Behind the palette"}</b>
                    <span>{"Monday · 08:00"}</span>
                  </span>
                </div>
              </div>
              <div className={"calendar-tiny"}>
                <span>
                  {"M"}
                  <i></i>
                </span>
                <span>
                  {"T"}
                  <i></i>
                </span>
                <span>
                  {"W"}
                  <i></i>
                </span>
                <span>
                  {"T"}
                  <i></i>
                </span>
                <span>
                  {"F"}
                  <i></i>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
