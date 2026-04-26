import PageHero from "../components/PageHero";
import { faqs } from "../lib/content";

export const metadata = {
  title: "About | Stratex PMC",
  description:
    "About Stratex, a project management consulting enterprise for cafe and fast food interior projects."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Stratex"
        title="A project partner for brands that cannot afford messy launches."
        text="Placeholder about Stratex: add founder background, project experience, values, operating geography, and differentiators for commercial interior delivery."
        secondaryHref="/services"
        secondaryLabel="Explore Services"
        variant="imageWash"
      />
      <section className="aboutStory">
        <div>
          <p className="eyebrow">Positioning</p>
          <h2>Design sensitivity with project discipline.</h2>
        </div>
        <p>
          Placeholder company narrative. Stratex can be described as a PMC startup
          focused on the food retail interior domain, bringing together site
          coordination, commercial tracking, vendor accountability, and brand-led
          execution for cafes, QSRs, and compact hospitality spaces.
        </p>
      </section>
      <section className="valuesGrid">
        {["Clarity", "Control", "Craft", "Commercial Discipline"].map((value) => (
          <article className="valueCard reveal" key={value}>
            <h2>{value}</h2>
            <p>
              Placeholder description for how Stratex expresses {value.toLowerCase()} in
              projects, communication, documentation, and site execution.
            </p>
          </article>
        ))}
      </section>
      <section className="faq">
        <div className="sectionIntro">
          <p className="eyebrow">Common questions</p>
          <h2>Useful details for early conversations.</h2>
        </div>
        {faqs.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
