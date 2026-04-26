import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Contact | Stratex PMC",
  description:
    "Contact Stratex for project management consulting support for cafe and fast food store interiors."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Bring Stratex into the project before delays become expensive."
        text="Share a few project basics and replace the placeholders below with official Stratex phone, email, address, and response-time details."
        primaryLabel="Project Enquiry"
      />
      <section className="contact contactPage">
        <div className="contactDetails">
          <p className="eyebrow">Reach Stratex</p>
          <h2>Start with a clear brief.</h2>
          <p>
            Placeholder contact details. Add office address, GST/company information,
            business hours, founder contact, enquiry email, and service areas.
          </p>
          <div className="detailRows">
            <span>Email: hello@stratex.in</span>
            <span>Phone: +91-00000-00000</span>
            <span>Web: stratex.in / stratex.com</span>
          </div>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
