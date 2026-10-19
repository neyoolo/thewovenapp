import { useState, type FormEvent } from "react";

export function CareersPage() {
  return (
    <section className={"info-page careers-page"}>
      <div className={"container"}>
        <header className={"page-hero motion-reveal"}>
          <p className={"eyebrow"}>{"Careers at Woven"}</p>
          <h1>
            {"Make room"}
            <br />
            <span className={"display"}>{"for better work."}</span>
          </h1>
          <p className={"lede"}>
            {
              "We’re building a calmer, more thoughtful way for people to show up online. We care about craft, clear thinking, and tools that help good ideas find their way into the world."
            }
          </p>
        </header>

        <div className={"career-panel motion-reveal"}>
          <div className={"career-panel-mark"} aria-hidden={"true"}>
            {"W"}
          </div>
          <p className={"eyebrow"}>{"Open positions"}</p>
          <h2>{"No roles posted right now."}</h2>
          <p>
            {
              "We’re a growing team, and the right conversation can start before a role is listed. If you care about thoughtful product, design, engineering, or helping creative teams thrive, we’d be glad to hear from you."
            }
          </p>
          <a
            className={"btn btn-dark"}
            href={
              "mailto:hello@woven.app?subject=Careers%20at%20Woven&body=Hi%20Woven%20team%2C%0A%0AI%27d%20love%20to%20introduce%20myself."
            }
          >
            {"Introduce yourself "}
            <span className={"arrow"}>{"→"}</span>
          </a>
          <small>
            {
              "Include a little about the work you do and a link to your portfolio or profile."
            }
          </small>
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  const selectedPlan = new URLSearchParams(window.location.search).get("plan");
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "General enquiry");
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`${topic} — ${name}`);
    const plan = selectedPlan ? `Plan: ${selectedPlan}\n` : "";
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n${plan}\n${message}`,
    );

    setStatus("Opening your email app with your message.");
    window.location.href = `mailto:hello@woven.app?subject=${subject}&body=${body}`;
  }

  return (
    <section className={"info-page contact-page"}>
      <div className={"container"}>
        <header className={"page-hero motion-reveal"}>
          <p className={"eyebrow"}>{"Get in touch"}</p>
          <h1>
            {"Let’s find"}
            <br />
            <span className={"display"}>{"the right thread."}</span>
          </h1>
          <p className={"lede"}>
            {
              "Whether you’re exploring Woven, planning for a team, or just have a question, we’re here to help."
            }
          </p>
        </header>

        <div className={"contact-layout"}>
          <aside className={"contact-aside motion-reveal"}>
            <p className={"eyebrow"}>{"The direct route"}</p>
            <h2>{"A real person, not a maze."}</h2>
            <p>
              {
                "Send us a note and tell us what you’re working on. We’ll make sure it reaches the right person."
              }
            </p>
            <a className={"contact-email"} href={"mailto:hello@woven.app"}>
              {"hello@woven.app"}
            </a>
            <div className={"contact-detail"}>
              <span>{"For teams"}</span>
              <p>
                {
                  "Tell us about your workspaces, collaborators, and the rhythm you want to build."
                }
              </p>
            </div>
            <div className={"contact-detail"}>
              <span>{"For everything else"}</span>
              <p>
                {
                  "Partnerships, press, feedback, or a simple hello are all welcome."
                }
              </p>
            </div>
          </aside>

          <form
            className={"contact-form motion-reveal"}
            onSubmit={handleSubmit}
            style={{ transitionDelay: ".1s" }}
          >
            <h2>{"Send a note"}</h2>
            {selectedPlan && (
              <p className={"form-context"}>
                {"You’re asking about "}
                <strong>{selectedPlan}</strong>
                {"."}
              </p>
            )}
            <label>
              {"Your name"}
              <input
                autoComplete={"name"}
                maxLength={100}
                name={"name"}
                required
                placeholder={"How should we address you?"}
              />
            </label>
            <label>
              {"Email address"}
              <input
                autoComplete={"email"}
                name={"email"}
                required
                type={"email"}
                placeholder={"you@yourstudio.com"}
              />
            </label>
            <label>
              {"What can we help with?"}
              <select
                name={"topic"}
                defaultValue={selectedPlan ? "Plans & pricing" : ""}
                required
              >
                <option disabled value={""}>
                  {"Choose a topic"}
                </option>
                <option>{"Plans & pricing"}</option>
                <option>{"Product question"}</option>
                <option>{"Partnership or press"}</option>
                <option>{"Something else"}</option>
              </select>
            </label>
            <label>
              {"Your message"}
              <textarea
                maxLength={1500}
                name={"message"}
                required
                rows={5}
                placeholder={
                  "A little context helps us give you a useful answer."
                }
              ></textarea>
            </label>
            <button className={"btn btn-dark"} type={"submit"}>
              {"Open email to send "}
              <span className={"arrow"}>{"→"}</span>
            </button>
            <p className={"form-note"}>
              {
                "This opens your email app with your message addressed to hello@woven.app."
              }
            </p>
            <p aria-live={"polite"} className={"form-status"}>
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

const termsSections = [
  {
    id: "using-woven",
    title: "1. Using Woven",
    paragraphs: [
      "Woven provides tools to collect ideas, create and adapt social content, plan publishing, and learn from audience responses. These terms apply when you visit or use the Woven website and services.",
      "You must be able to enter into a binding agreement to use Woven. If you use Woven for an organisation, you confirm that you are authorised to accept these terms on its behalf. Keep your account details secure and let us know if you suspect someone else has accessed your account.",
    ],
  },
  {
    id: "accounts-and-plans",
    title: "2. Accounts and plans",
    paragraphs: [
      "Some features may require an account. You are responsible for activity carried out through your account and for keeping the information associated with it accurate.",
      "Woven's current pricing page lists Small but mighty at $15 per month, In the flow at $30 per month, and Made together at $45 per month. All prices are monthly. Plan availability, billing, and included features should be confirmed with Woven before signing up. We will communicate material changes before they take effect where required.",
      "Paid subscriptions, billing timing, renewal, cancellation, and any applicable taxes will be presented during purchase. If you have questions about a plan or need help changing it, contact hello@woven.app.",
    ],
  },
  {
    id: "your-content",
    title: "3. Your content and permissions",
    paragraphs: [
      "You retain ownership of the ideas, drafts, media, and other materials you provide to Woven (“your content”). You give Woven permission to host, process, and display your content only as reasonably needed to provide, secure, and improve the service.",
      "You are responsible for having the rights and permissions needed to use your content and to publish it through connected social platforms. Do not submit content that is unlawful, infringes another person’s rights, or violates platform rules.",
    ],
  },
  {
    id: "ai-and-platforms",
    title: "4. AI features and connected platforms",
    paragraphs: [
      "Woven may use AI to help generate, rewrite, or adapt ideas. AI output can be incomplete or inaccurate and may not be unique. Review and edit output before relying on it or publishing it; you remain responsible for the content you share.",
      "Publishing, analytics, and other integrations may depend on third-party social platforms. Those services have their own terms, policies, and availability. Woven does not control third-party platforms and cannot guarantee that an integration or platform feature will always be available.",
    ],
  },
  {
    id: "acceptable-use",
    title: "5. Acceptable use",
    paragraphs: [
      "Use Woven lawfully and respectfully. You may not misuse the service, interfere with its operation or security, attempt unauthorised access, distribute malware, use the service to harass or deceive others, or use it in a way that infringes rights or violates applicable rules.",
      "We may investigate suspected misuse and take reasonable steps to protect Woven, our users, and third parties, including restricting access where necessary.",
    ],
  },
  {
    id: "privacy",
    title: "6. Privacy",
    paragraphs: [
      "We treat personal information with care. For information about how personal information is handled and the choices available to you, contact hello@woven.app.",
    ],
  },
  {
    id: "availability-and-changes",
    title: "7. Availability and changes",
    paragraphs: [
      "We work to keep Woven useful and available, but the service may change, be interrupted, or include features that are still evolving. We may update or discontinue features as the product develops.",
      "We may revise these terms from time to time. The date at the top of this page shows when they were last updated. If a change materially affects your use, we will take reasonable steps to notify you.",
    ],
  },
  {
    id: "ending-use",
    title: "8. Ending your use",
    paragraphs: [
      "You can stop using Woven at any time. You may cancel a paid plan through the account or billing controls made available to you, or contact us for assistance.",
      "We may suspend or end access if these terms are materially breached, if required by law, or if continued access presents a risk to Woven or others. Where appropriate, we will provide notice and an opportunity to address the issue.",
    ],
  },
  {
    id: "disclaimers",
    title: "9. Disclaimers and liability",
    paragraphs: [
      "To the extent permitted by law, Woven is provided on an “as available” basis. We do not promise that the service will be uninterrupted, error-free, or suitable for every purpose. Nothing in these terms limits rights or remedies that cannot legally be excluded.",
      "To the extent permitted by law, Woven is not responsible for indirect or consequential loss arising from use of the service. These terms do not exclude liability where exclusion is not permitted by applicable law.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    paragraphs: [
      "Questions about these terms? Email hello@woven.app and include enough detail for us to understand your question.",
    ],
  },
];

const privacySections = [
  {
    id: "privacy-scope",
    title: "1. About this notice",
    paragraphs: [
      "This Privacy Notice describes the Woven marketing website and the interactive product previews currently available on it. It does not describe a production account, billing, social publishing, or analytics service: those product capabilities are not connected to this website today.",
      "If Woven makes account-based product features available, we will provide an updated notice describing the information and services involved before asking you to use those features. Please do not enter confidential, sensitive, or real customer information into the illustrative previews on this website.",
    ],
  },
  {
    id: "information-we-handle",
    title: "2. Information we handle",
    paragraphs: [
      "The website does not provide account registration or a server-submitted contact form. The contact form prepares a message in your device’s email application; it does not send form fields to a Woven web server. If you choose to send that email, Woven will receive the information you include, such as your name, email address, enquiry topic, and message.",
      "Like most websites, the hosting provider may process technical request information to deliver and protect the site, such as an IP address, browser and device details, requested page, and request time. We do not control the hosting provider’s logs or their retention settings; contact us if you need current hosting-provider details.",
      "The site loads its typefaces through Google Fonts. Your browser requests those font files from Google, which may receive technical request information such as your IP address and browser details. If you follow a link to a social network or another external site, that service may receive information according to its own privacy notice.",
    ],
  },
  {
    id: "why-we-use-information",
    title: "3. Why we use information",
    paragraphs: [
      "If you email us, we use the information you choose to send to understand and respond to your enquiry, follow up where needed, and keep an appropriate record of the conversation.",
      "Technical request information may be used by the hosting provider to deliver the website, diagnose faults, and help prevent abuse or security incidents.",
      "The current website does not use account profiles, advertising pixels, or analytics tools to build a marketing profile about visitors. The interactive previews run in your browser and do not save the sample text or chart selections to a Woven account.",
    ],
  },
  {
    id: "cookies-and-storage",
    title: "4. Cookies and local storage",
    paragraphs: [
      "The Woven website does not currently set analytics or advertising cookies, or store contact-form submissions in browser storage. Essential technologies used by the hosting provider or by external services such as Google Fonts may operate when your browser loads the site. You can manage cookies and similar technologies through your browser settings.",
    ],
  },
  {
    id: "sharing",
    title: "5. Sharing and service providers",
    paragraphs: [
      "We do not sell personal information collected through this website. Information may be handled by providers that deliver website hosting, email, or font services, and may be disclosed where required by law or reasonably necessary to protect people, the website, or our rights.",
      "Google Fonts and any social network you choose to visit are independent services. Their processing of information is governed by their own terms and privacy notices, rather than this notice.",
    ],
  },
  {
    id: "retention-and-security",
    title: "6. Retention and security",
    paragraphs: [
      "We keep email enquiries only for as long as reasonably needed to respond, maintain an appropriate business record, and meet legal requirements. Hosting and email providers may retain their own technical records under their own schedules.",
      "We take reasonable care when handling correspondence, but email and internet communications are not guaranteed to be completely secure. Please do not send passwords, payment details, or sensitive personal information by email.",
    ],
  },
  {
    id: "your-choices",
    title: "7. Your choices and rights",
    paragraphs: [
      "Depending on where you live, you may have rights to request access to, correction of, or deletion of personal information, or to object to or restrict certain processing. You can ask a privacy question or make a request by emailing hello@woven.app. We may need to verify your identity before responding.",
      "You can choose not to submit an enquiry. You can also manage cookies and external-site permissions in your browser. Visiting external links is optional.",
    ],
  },
  {
    id: "children",
    title: "8. Children",
    paragraphs: [
      "The website is intended for people exploring a professional social-work product, not for children. Please contact us if you believe a child has sent us personal information so that we can review the request.",
    ],
  },
  {
    id: "international-visitors",
    title: "9. International visitors",
    paragraphs: [
      "The website and external services may be accessed from different countries. Google Fonts, website hosting, and email services may process technical or correspondence data in locations that differ from yours. Their providers’ notices describe their own international data practices.",
    ],
  },
  {
    id: "privacy-changes",
    title: "10. Changes and contact",
    paragraphs: [
      "We may update this notice as the website and Woven product develop. The date at the top shows when it was last reviewed. Material updates will be reflected on this page.",
      "For privacy questions or requests, contact hello@woven.app.",
    ],
  },
];

export function PrivacyPage() {
  return (
    <section className={"info-page privacy-page"}>
      <div className={"container"}>
        <header className={"page-hero motion-reveal"}>
          <p className={"eyebrow"}>{"Privacy at Woven"}</p>
          <h1>
            {"Your work is"}
            <br />
            <span className={"display"}>{"yours to trust."}</span>
          </h1>
          <p className={"lede"}>
            {
              "A clear explanation of what this website handles, what it does not, and the choices available to you."
            }
          </p>
          <p className={"terms-updated"}>{"Last updated: 18 October 2026"}</p>
        </header>

        <div className={"privacy-scope-note motion-reveal"}>
          <b>{"A note about the current website"}</b>
          <p>
            {
              "This notice covers the public website and illustrative product previews. Account sign-up, billing, connected social accounts, and live AI features are not connected here. We’ll update this notice before those services become available."
            }
          </p>
        </div>

        <div className={"terms-layout"}>
          <nav
            className={"terms-nav motion-reveal"}
            aria-label={"Privacy notice sections"}
          >
            <b>{"On this page"}</b>
            {privacySections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </nav>
          <article className={"terms-content motion-reveal"}>
            {privacySections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

export function TermsPage() {
  return (
    <section className={"info-page terms-page"}>
      <div className={"container"}>
        <header className={"page-hero motion-reveal"}>
          <p className={"eyebrow"}>{"The details"}</p>
          <h1>
            {"Terms of"}
            <br />
            <span className={"display"}>{"service."}</span>
          </h1>
          <p className={"lede"}>
            {
              "These terms describe the ground rules for using Woven. Please read them before using the service."
            }
          </p>
          <p className={"terms-updated"}>{"Last updated: 18 October 2026"}</p>
        </header>

        <div className={"terms-layout"}>
          <nav
            className={"terms-nav motion-reveal"}
            aria-label={"Terms sections"}
          >
            <b>{"On this page"}</b>
            {termsSections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title.replace(/^\d+\.\s/, "")}
              </a>
            ))}
          </nav>
          <article className={"terms-content motion-reveal"}>
            <p className={"terms-intro"}>
              {
                "By accessing or using Woven, you agree to these terms. If you do not agree, please do not use the service."
              }
            </p>
            {termsSections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

export function NotFoundPage() {
  return (
    <section className={"info-page not-found-page"}>
      <div className={"container page-hero motion-reveal"}>
        <p className={"eyebrow"}>{"404 · Page not found"}</p>
        <h1>
          {"This thread"}
          <br />
          <span className={"display"}>{"ends here."}</span>
        </h1>
        <p className={"lede"}>
          {"The page may have moved, or the address may not be quite right."}
        </p>
        <a className={"btn btn-dark"} href={"/"}>
          {"Back to Woven "}
          <span className={"arrow"}>{"→"}</span>
        </a>
      </div>
    </section>
  );
}
