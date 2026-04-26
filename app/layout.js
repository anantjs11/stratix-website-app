import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

export const metadata = {
  title: "Stratex | PMC for Fast Food & Cafe Interiors",
  description:
    "Stratex is a project management consulting enterprise for fast food stores, fast casual cafes, and cafe chain interiors.",
  metadataBase: new URL("https://stratex.in"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Stratex | PMC for Fast Food & Cafe Interiors",
    description:
      "Project management consulting for commercial interior rollouts, fast food stores, and cafe chains.",
    url: "https://stratex.in",
    siteName: "Stratex",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
