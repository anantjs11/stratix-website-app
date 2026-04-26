import Link from "next/link";
import PageHero from "../components/PageHero";
import ReadinessTool from "../components/ReadinessTool";
import { services } from "../lib/content";

export const metadata = {
  title: "Services | Stratex PMC",
  description:
    "Project management consulting services for cafe chains, QSR stores, and food retail interiors."
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="Project controls for every stage of a food retail interior."
        text="Stratex can support early-stage planning, design coordination, tendering, site execution, rollout governance, and handover. Replace placeholders with exact commercial packages and engagement terms."
        secondaryHref="/process"
        secondaryLabel="See Process"
      />
      <section className="section">
        <div className="wideGrid">
          {services.map((service, index) => (
            <article className="featureCard reveal" key={service.title}>
              <span className="cardIndex">{String(index + 1).padStart(2, "0")}</span>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <ul className="chipList">
                {service.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="band split">
        <div>
          <p className="eyebrow">Engagement models</p>
          <h2>Flexible support for founders, operators, and expanding brands.</h2>
        </div>
        <div className="stackList">
          <p>Single outlet launch PMC</p>
          <p>Multi-location rollout governance</p>
          <p>Design-to-site coordination retainer</p>
          <p>Audit, recovery, and launch-readiness sprint</p>
        </div>
      </section>
      <ReadinessTool />
      <section className="ctaBand">
        <h2>Need a clear project path before fit-out starts?</h2>
        <Link className="button primary" href="/contact">
          Request Consultation
        </Link>
      </section>
    </main>
  );
}
