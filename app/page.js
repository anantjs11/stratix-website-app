import Link from "next/link";
import ContactForm from "./components/ContactForm";
import ReadinessTool from "./components/ReadinessTool";
import { processSteps, sectors, services, stats } from "./lib/content";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroBackdrop" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">PMC for commercial food-space interiors</p>
          <h1>Stratex builds sharper rollouts for cafes and fast food brands.</h1>
          <p className="heroText">
            Placeholder introduction for Stratex: an enterprise project management
            consulting partner helping QSR stores, fast casual cafes, and food
            chains move from design intent to launch-ready interiors with disciplined
            cost, quality, timeline, and stakeholder control.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/contact">
              Start a Project
            </Link>
            <Link className="button secondary" href="/services">
              View Services
            </Link>
          </div>
        </div>
        <aside className="launchPanel" aria-label="Project delivery highlights">
          <span>Launch Readiness</span>
          <strong>Design-led PMC</strong>
          <p>
            Site coordination, execution control, vendor alignment, and clear
            reporting for food retail interiors.
          </p>
        </aside>
      </section>

      <section className="metrics" aria-label="Company highlights">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="sectionIntro reveal">
          <p className="eyebrow">Enterprise offering</p>
          <h2>Structured PMC for interiors where opening dates matter.</h2>
          <p>
            Replace this placeholder with precise service descriptions, leadership
            credentials, city coverage, completed project references, and operating
            model details.
          </p>
        </div>
        <div className="serviceGrid">
          {services.slice(0, 4).map((service, index) => (
            <article className="serviceCard reveal" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
        <div className="sectionAction">
          <Link className="textLink" href="/services">
            Explore all offerings
          </Link>
        </div>
      </section>

      <section className="commandCenter">
        <div>
          <p className="eyebrow">Project command center</p>
          <h2>One rhythm for scope, vendors, site, budget, and launch readiness.</h2>
          <p>
            Placeholder for Stratex reporting style. Show how clients get clear
            decisions, issue escalation, site progress, and commercial visibility.
          </p>
        </div>
        <div className="dashboardMock" aria-label="Project dashboard preview">
          <div className="dashTop">
            <span>Store rollout</span>
            <strong>74%</strong>
          </div>
          <div className="progressLine">
            <span style={{ width: "74%" }} />
          </div>
          <div className="dashGrid">
            <span>Snags: 18</span>
            <span>Risks: 04</span>
            <span>RFI: 07</span>
            <span>Launch: 12 days</span>
          </div>
        </div>
      </section>

      <section className="showcase" aria-label="Interior categories">
        {sectors.slice(0, 3).map((item) => (
          <article
            className="showcaseItem"
            key={item.name}
            style={{ "--image": `url(${item.image})` }}
          >
            <div>
              <p>Interior format</p>
              <h3>{item.name}</h3>
            </div>
          </article>
        ))}
      </section>

      <section className="section split">
        <div className="sectionIntro reveal">
          <p className="eyebrow">Delivery framework</p>
          <h2>Clear checkpoints from first brief to opening day.</h2>
          <p>
            Placeholder for Stratex methodology, reporting cadence, stakeholder
            communication style, site visit frequency, and quality controls.
          </p>
        </div>
        <ol className="timeline">
          {processSteps.map((step) => (
            <li key={step.title}>
              <span />
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <ReadinessTool />

      <section className="contact">
        <div>
          <p className="eyebrow">Project enquiry</p>
          <h2>Plan your next cafe or fast food store with Stratex.</h2>
          <p>
            Placeholder for phone, email, office address, preferred enquiry details,
            and links for stratex.com / stratex.in.
          </p>
        </div>
        <ContactForm compact />
      </section>
    </main>
  );
}
