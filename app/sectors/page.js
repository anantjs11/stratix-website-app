import Link from "next/link";
import PageHero from "../components/PageHero";
import { sectors } from "../lib/content";

export const metadata = {
  title: "Sectors | Stratex PMC",
  description:
    "Interior PMC for fast casual cafes, QSR stores, cloud kitchens, pickup stores, and premium cafe concepts."
};

export default function SectorsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sectors"
        title="Built around the realities of food-service interiors."
        text="Each format has a different operational pressure. Stratex keeps design ambition, technical coordination, vendor execution, and launch readiness moving together."
        secondaryHref="/services"
        secondaryLabel="View Services"
        variant="imageWash"
      />
      <section className="sectorGrid">
        {sectors.map((sector) => (
          <article className="sectorCard reveal" key={sector.name}>
            <div
              className="sectorImage"
              style={{ "--image": `url(${sector.image})` }}
              aria-hidden="true"
            />
            <div>
              <h2>{sector.name}</h2>
              <p>{sector.text}</p>
              <ul className="cleanList">
                {sector.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="ctaBand">
        <h2>Tell Stratex about your store format and rollout ambition.</h2>
        <Link className="button primary" href="/contact">
          Share Project Brief
        </Link>
      </section>
    </main>
  );
}
