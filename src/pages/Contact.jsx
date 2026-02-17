import { useState } from "react";
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
                  Stay Connected
                </h2>
                <p className="contact-form__description">
                  Stay tuned for performances, releases, and news.
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
                  <button type="submit" className="contact-form__submit contact-form__submit--newsletter">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="section-split__right">
              <form
                className="contact-form contact-form--contact"
                onSubmit={handleContactSubmit}
                aria-labelledby="contact-heading"
              >
                <h2 id="contact-heading" className="contact-form__heading section-heading">
                  Contact us
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
                <button type="submit" className="contact-form__submit contact-form__submit--contact">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  </main>
  );
};

export default Contact;
