import Link from "next/link";
import { navItems } from "../lib/content";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand footerBrand" href="/">
          <span className="brandMark">S</span>
          <span>Stratex</span>
        </Link>
        <p>Enterprise PMC for cafe, QSR, and food retail interiors.</p>
      </div>
      <div className="footerLinks">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="domainLinks">
        <a href="https://stratex.com">stratex.com</a>
        <a href="https://stratex.in">stratex.in</a>
      </div>
    </footer>
  );
}
