import LinkCta from "../components/LinkCta/LinkCta";
import NavLink from "../components/NavLink/NavLink";
import "./Contact.css";

const Contact = () => (
  <main className="contact-page">
    <section className="contact-page__main section">
      <div className="layout__container">
        <h1 className="contact-page__heading section-heading">
          Let's make some music!
        </h1>
        <p className="contact-page__message">
          We'd love to hear from you! Reach out for inquiries about joining the
          orchestra or future concerts.
        </p>
        <LinkCta className="cta--feature" href="mailto:info@shoalcirclechamberorchestra.org">
          Contact us
        </LinkCta>
      </div>
    </section>
    <section className="contact-page__social section">
      <div className="layout__container">
        <span className="contact-page__social-label section-heading">
          Follow us on social media
        </span>
        <nav className="contact-page__links" aria-label="Social media">
          <NavLink href="#" className="contact-page__link">Instagram</NavLink>
          <NavLink href="#" className="contact-page__link">YouTube</NavLink>
          <NavLink href="#" className="contact-page__link">SoundCloud</NavLink>
        </nav>
      </div>
    </section>
  </main>
);

export default Contact;
