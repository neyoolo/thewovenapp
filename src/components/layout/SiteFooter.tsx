export default function SiteFooter() {
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"footer-top"}>
          <div>
            <a className={"brand"} href={"#top"}>
              <span className={"brand-mark"}>
                <svg
                  width={"18"}
                  height={"18"}
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"2.6"}
                >
                  <path d={"M4 6.5 8.1 18 12 8l3.9 10L20 6.5"}></path>
                </svg>
              </span>
              {" woven"}
            </a>
            <p className={"footer-note"}>
              {"A calmer, clearer space for social work with a point of view."}
            </p>
          </div>
          <div className={"footer-links"}>
            <div>
              <b>{"Product"}</b>
              <a href={"#product"}>{"Studio"}</a>
              <a href={"#workflow"}>{"Planner"}</a>
              <a href={"#signals"}>{"Signals"}</a>
            </div>
            <div>
              <b>{"Company"}</b>
              <a href={"#voices"}>{"Stories"}</a>
              <a href={"mailto:hello@woven.app"}>{"Contact"}</a>
              <a href={"#top"}>{"Careers"}</a>
            </div>
            <div>
              <b>{"Follow"}</b>
              <a href={"#top"}>{"Instagram"}</a>
              <a href={"#top"}>{"LinkedIn"}</a>
              <a href={"#top"}>{"Threads"}</a>
            </div>
          </div>
        </div>
        <div className={"footer-bottom"}>
          <span>{"© 2026 Woven, Inc."}</span>
          <span>{"Made with intention, everywhere."}</span>
          <span>
            <a href={"#top"}>{"Privacy"}</a>
            {" · "}
            <a href={"#top"}>{"Terms"}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
