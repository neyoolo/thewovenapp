import WovenLogo from "./WovenLogo";

export default function SiteFooter() {
  return (
    <footer className={"footer"}>
      <div className={"container"}>
        <div className={"footer-top"}>
          <div>
            <a className={"brand"} href={"/"} aria-label={"Woven home"}>
              <WovenLogo />
            </a>
            <p className={"footer-note"}>
              {"A calmer, clearer space for social work with a point of view."}
            </p>
          </div>
          <div className={"footer-links"}>
            <div>
              <b>{"Product"}</b>
              <a href={"/studio"}>{"Studio"}</a>
              <a href={"/planner"}>{"Planner"}</a>
              <a href={"/signals"}>{"Signals"}</a>
            </div>
            <div>
              <b>{"Company"}</b>
              <a href={"/#voices"}>{"Stories"}</a>
              <a href={"/contact"}>{"Contact"}</a>
              <a href={"/careers"}>{"Careers"}</a>
            </div>
            <div>
              <b>{"Follow"}</b>
              <a
                className={"social-link"}
                href={"https://www.instagram.com/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.8"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <rect
                    x={"3"}
                    y={"3"}
                    width={"18"}
                    height={"18"}
                    rx={"5"}
                  ></rect>
                  <circle cx={"12"} cy={"12"} r={"4"}></circle>
                  <circle
                    cx={"18"}
                    cy={"6"}
                    r={"0.8"}
                    fill={"currentColor"}
                  ></circle>
                </svg>
                {"Instagram"}
              </a>
              <a
                className={"social-link"}
                href={"https://twitter.com/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"currentColor"}
                  aria-hidden={"true"}
                >
                  <path
                    d={
                      "M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8 8 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.2 4.2 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2 18.7a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5A8.5 8.5 0 0 0 22 5.9Z"
                    }
                  ></path>
                </svg>
                {"Twitter"}
              </a>
              <a
                className={"social-link"}
                href={"https://www.linkedin.com/"}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <svg
                  viewBox={"0 0 24 24"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={"1.8"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  aria-hidden={"true"}
                >
                  <path
                    d={"M5 9v10M5 5v.01M9 19v-6a4 4 0 0 1 8 0v6M9 10v9"}
                  ></path>
                </svg>
                {"LinkedIn"}
              </a>
            </div>
          </div>
        </div>
        <div className={"footer-bottom"}>
          <span>{"© 2026 Woven, Inc."}</span>
          <span>{"Made with intention, everywhere."}</span>
          <span>
            <a href={"/privacy"}>{"Privacy"}</a>
            {" · "}
            <a href={"/terms"}>{"Terms"}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
