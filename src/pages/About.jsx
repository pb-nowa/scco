import LinkCta from "../components/LinkCta/LinkCta";
import "./About.css";

const About = () => (
  <main className="about-page">
    <section className="about-page__hero section">
      <div className="layout__container">
        <h1 className="about-page__title">
          <span>SHOAL</span>
          <span>CIRCLE</span>
          <span>CHAMBER</span>
          <span>ORCHESTRA</span>
        </h1>
        <p className="about-page__location section-heading">SAN MATEO, CA</p>
      </div>
    </section>
    <section className="about-page__content section">
      <div className="layout__container">
        <p className="about-page__lead">
          The Shoal Circle Chamber Orchestra is a community chamber ensemble for
          adult musicians of any level. Each year the group hosts a community
          concert.
        </p>
        <p className="about-page__text">
          The musicians feature a wide range of music styles that change each
          year depending on the group's unique instrumentation and skill levels.
        </p>
        <LinkCta href="/#upcoming">View upcoming concerts</LinkCta>
      </div>
    </section>
  </main>
);

export default About;
