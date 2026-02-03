import LinkCta from "../../components/LinkCta/LinkCta";
import "./HeroSection.css";

const HeroSection = () => (
  <section className="hero section" id="about">
    <div className="hero__circle" aria-hidden="true">
      <div className="hero__circle-frame">
        <video
          className="hero__circle-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://res.cloudinary.com/dhjttb9y2/video/upload/so_0/SCCO_Hero_Video_wtekid.jpg"
        >
          <source
            src="https://res.cloudinary.com/dhjttb9y2/video/upload/SCCO_Hero_Video_wtekid.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
    <div className="layout__container hero__grid">
      <div className="hero__top">
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
      </div>
      <div className="hero__bottom" aria-hidden="true" />
    </div>
  </section>
);

export default HeroSection;
