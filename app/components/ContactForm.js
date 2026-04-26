export default function ContactForm({ compact = false }) {
  return (
    <form className={`contactForm ${compact ? "compact" : ""}`}>
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="name@company.com" />
      </label>
      <label>
        Project Type
        <select name="projectType" defaultValue="">
          <option value="" disabled>
            Select a format
          </option>
          <option>Fast food store</option>
          <option>Fast casual cafe</option>
          <option>Cafe chain rollout</option>
          <option>Commercial kitchen + dine-in</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          placeholder="Tell us about the location, area, timeline, and current project stage."
        />
      </label>
      <button className="button primary" type="submit">
        Send Enquiry
      </button>
    </form>
  );
}
