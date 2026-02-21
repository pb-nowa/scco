import useScrollReveal from "../../hooks/useScrollReveal";
import LinkCta from "../LinkCta/LinkCta";
import "./FeatureCard.css";

const FeatureCard = () => {
  const { ref: cardRef, isVisible } = useScrollReveal();

  return (
    <article
      className={`feature-card${isVisible ? " feature-card--in-view" : ""}`}
      ref={cardRef}
    >
      <span className="feature-card__label section-heading">UPCOMING CONCERT</span>
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
      <LinkCta className="cta--feature" href="/contact">
        Get concert updates
      </LinkCta>
    </article>
  );
};

export default FeatureCard;
