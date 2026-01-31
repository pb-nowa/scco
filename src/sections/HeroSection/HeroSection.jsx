import LinkCta from "../../components/LinkCta/LinkCta";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero section" id="about">
    <div className="layout__container hero__grid">
      <div className="hero__left">
        <h1 className="hero__title">
          <span>SHOAL</span>
          <span>CIRCLE</span>
          <span>CHAMBER</span>
          <span>ORCHESTRA</span>
        </h1>
        <p className="hero__location">SAN MATEO, CA</p>
        <p className="hero__tagline">Find your inner musician.</p>
      </div>
      <div className="hero__right">
        <div className="hero__upcoming">
          <p className="hero__label">Upcoming concert</p>
          <div className="hero__event">
            <span>Palo Alto, CA</span>
            <span>December 2026</span>
          </div>
        </div>
        <LinkCta href="#concerts">Get concert updates</LinkCta>
      </div>
      <div className="hero__circle" aria-hidden="true" />
    </div>
  </section>
);

export default HeroSection;
