import PageHero from "../components/PageHero";
import { governance, processSteps } from "../lib/content";

export const metadata = {
  title: "Process | Stratex PMC",
  description:
    "Stratex project delivery process for food retail interiors from discovery to launch readiness."
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Process"
        title="A calm operating system for complex commercial interiors."
        text="Stratex gives clients a predictable rhythm for decisions, drawings, vendors, site issues, quality checks, and final handover."
        secondaryHref="/contact"
        secondaryLabel="Discuss a Project"
      />
      <section className="processRail">
        {processSteps.map((step, index) => (
          <article className="processBlock reveal" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>
      <section className="band">
        <div className="sectionIntro">
          <p className="eyebrow">Governance stack</p>
          <h2>Executive clarity without losing site detail.</h2>
          <p>
            Placeholder for tools, templates, meeting cadence, documentation standards,
            and escalation rules used by Stratex.
          </p>
        </div>
        <div className="governanceGrid">
          {governance.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
