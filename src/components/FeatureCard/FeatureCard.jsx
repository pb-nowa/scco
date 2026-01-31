import LinkCta from "../LinkCta/LinkCta";
import "./FeatureCard.css";

const FeatureCard = () => (
  <article className="feature-card">
    <p className="feature-card__location">PALO ALTO, CA</p>
    <p className="feature-card__date">DECEMBER 2026</p>
    <p className="feature-card__venue">PALO ALTO ARTS CENTER</p>
    <p className="feature-card__details">
      The Shoal Circle Chamber Orchestra will be presenting their 2026 concert
      at the Palo Alto Arts Center in Palo Alto, California.
    </p>
    <p className="feature-card__details">
      Program and concert title are TBD. Details to RSVP will be released in
      October 2026.
    </p>
    <LinkCta className="cta--feature" href="#concerts">
      Get concert updates
    </LinkCta>
  </article>
);

export default FeatureCard;
