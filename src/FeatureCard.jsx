import LinkCta from "./LinkCta";

const FeatureCard = () => (
  <article className="feature-card">
    <p className="feature-location">PALO ALTO, CA</p>
    <p className="feature-date">DECEMBER 2026</p>
    <p className="feature-venue">PALO ALTO ARTS CENTER</p>
    <p className="feature-details">
      The Shoal Circle Chamber Orchestra will be presenting their 2026 concert
      at the Palo Alto Arts Center in Palo Alto, California.
    </p>
    <p className="feature-details">
      Program and concert title are TBD. Details to RSVP will be released in
      October 2026.
    </p>
    <LinkCta className="feature-cta" href="#concerts">
      Get concert updates
    </LinkCta>
  </article>
);

export default FeatureCard;
