import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryHref = "/contact",
  primaryLabel = "Start a Project",
  secondaryHref,
  secondaryLabel,
  variant = "plain"
}) {
  return (
    <section className={`pageHero ${variant}`}>
      <div className="pageHeroInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="heroText">{text}</p>
        <div className="heroActions">
          <Link className="button primary" href={primaryHref}>
            {primaryLabel}
          </Link>
          {secondaryHref ? (
            <Link className="button secondary dark" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
