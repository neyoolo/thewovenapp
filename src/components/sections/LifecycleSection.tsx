export default function LifecycleSection() {
  return (
    <section className={"lifecycle"}>
      <div className={"container"}>
        <div
          className={"reveal"}
          style={{ maxWidth: "620px", marginInline: "auto" }}
        >
          <p className={"eyebrow"}>{"Why Woven's AI is different"}</p>
          <h2>
            {
              "Most AI tools stop at the caption. Ours stays for the whole journey."
            }
          </h2>
        </div>
        <div
          className={"thread-diagram"}
          id={"threadDiagram"}
          role={"img"}
          aria-label={
            "Diagram: an orange thread connects Brand context, Content creation, Calendar and planning, Publishing, and Feedback and analytics in a continuous loop"
          }
        >
          <svg className={"thread-svg"} viewBox={"0 0 1000 300"}>
            <path
              className={"thread-path"}
              d={
                "M100 110 C 160 110 190 60 250 60 S 350 150 410 150 S 510 70 570 70 S 670 150 730 150 S 840 90 900 90"
              }
            ></path>
            <path
              className={"thread-loop"}
              d={"M900 130 C 900 250 100 250 100 150"}
              markerEnd={"none"}
            ></path>
            <polygon
              className={"thread-loop"}
              points={"100,150 94,138 106,138"}
              fill={"#e8590c"}
              stroke={"none"}
              style={{ transitionDelay: "1.7s" }}
            ></polygon>
            <g className={"tnode"}>
              <rect
                x={"25"}
                y={"60"}
                width={"150"}
                height={"76"}
                rx={"14"}
              ></rect>
              <text x={"100"} y={"94"} textAnchor={"middle"}>
                {"Brand context"}
              </text>
              <text className={"sub"} x={"100"} y={"116"} textAnchor={"middle"}>
                {"voice, tone, rules"}
              </text>
            </g>
            <g className={"tnode"}>
              <rect
                x={"235"}
                y={"60"}
                width={"150"}
                height={"76"}
                rx={"14"}
              ></rect>
              <text x={"310"} y={"94"} textAnchor={"middle"}>
                {"Content creation"}
              </text>
              <text className={"sub"} x={"310"} y={"116"} textAnchor={"middle"}>
                {"captions · hashtags"}
              </text>
            </g>
            <g className={"tnode"}>
              <rect
                x={"445"}
                y={"60"}
                width={"150"}
                height={"76"}
                rx={"14"}
              ></rect>
              <text x={"520"} y={"94"} textAnchor={"middle"}>
                {"Calendar"}
              </text>
              <text className={"sub"} x={"520"} y={"116"} textAnchor={"middle"}>
                {"plan & schedule"}
              </text>
            </g>
            <g className={"tnode"}>
              <rect
                x={"655"}
                y={"60"}
                width={"150"}
                height={"76"}
                rx={"14"}
              ></rect>
              <text x={"730"} y={"94"} textAnchor={"middle"}>
                {"Publishing"}
              </text>
              <text className={"sub"} x={"730"} y={"116"} textAnchor={"middle"}>
                {"5 platforms, 1 click"}
              </text>
            </g>
            <g className={"tnode core"}>
              <rect
                x={"825"}
                y={"60"}
                width={"150"}
                height={"76"}
                rx={"14"}
              ></rect>
              <text x={"900"} y={"94"} textAnchor={"middle"}>
                {"Feedback"}
              </text>
              <text className={"sub"} x={"900"} y={"116"} textAnchor={"middle"}>
                {"analytics & replies"}
              </text>
            </g>
          </svg>
        </div>
        <p className={"diagram-caption reveal"}>
          <b>{"The thread stays attached."}</b>
          {
            " Woven's AI carries what it learns about your brand through every stage — and feeds performance back into the next draft. It doesn't just write your caption; it remembers why it worked."
          }
        </p>
      </div>
    </section>
  );
}
