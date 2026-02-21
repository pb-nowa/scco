import { useState } from "react";
import LinkCta from "../components/LinkCta/LinkCta";
import "./Contact.css";

const Contact = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up newsletter subscription
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up contact form submission
  };

  return (
    <main className="contact-page">
      <section className="contact-page__hero section">
        <h1 className="contact-page__title">Stay in the Loop</h1>
      </section>
      <section className="contact-page__forms section">
        <div className="layout__container">
          <div className="contact-page__forms-grid section-split__grid">
            <div className="section-split__left">
              <form
                className="contact-form contact-form--newsletter"
                onSubmit={handleNewsletterSubmit}
                aria-labelledby="newsletter-heading"
              >
                <h2 id="newsletter-heading" className="contact-form__heading section-heading">
                  Join our mailing list
                </h2>
                <p className="contact-form__description">
                  Stay tuned for performance updates and news.
                </p>
                <div className="contact-form__row">
                  <input
                    type="email"
                    className="contact-form__input"
                    placeholder="Your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />
                </div>
                <LinkCta
                  as="button"
                  type="submit"
                  className="cta--feature contact-form__submit"
                >
                  Join the Mailing List
                </LinkCta>
              </form>
            </div>
            <div className="section-split__right">
              <form
                className="contact-form contact-form--contact"
                onSubmit={handleContactSubmit}
                aria-labelledby="contact-heading"
              >
                <h2 id="contact-heading" className="contact-form__heading section-heading">
                  Send us a note
                </h2>
                <input
                  type="email"
                  className="contact-form__input"
                  placeholder="Your email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <textarea
                  className="contact-form__textarea"
                  placeholder="Your message"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  rows={5}
                  aria-label="Message"
                />
                <LinkCta
                  as="button"
                  type="submit"
                  className="cta--feature contact-form__submit"
                >
                  send a note
                </LinkCta>
              </form>
            </div>
          </div>
        </div>
      </section>
      <hr className="page-separator" aria-hidden="true" />
    </main>
  );
};

export default Contact;
