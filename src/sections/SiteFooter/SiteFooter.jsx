import LinkCta from "../../components/LinkCta/LinkCta";
import NavLink from "../../components/NavLink/NavLink";
import "./SiteFooter.css";

const SiteFooter = () => (
  <footer className="site-footer" id="contact">
    <div className="layout__container site-footer__top">
      <div className="site-footer__intro">
        <h2 className="site-footer__heading section__title">
          Let's make some music!
        </h2>
        <p className="site-footer__message">
          We'd love to hear from you! Reach out for inquiries about joining the
          orchestra or future concerts.
        </p>
        <LinkCta href="mailto:info@shoalcirclechamberorchestra.org">
          Contact us
        </LinkCta>
      </div>
    </div>
    <div className="layout__container site-footer__bottom">
      <div className="site-footer__social">
        <span className="site-footer__social-label section-heading">
          Follow us on social media
        </span>
        <NavLink href="#">Instagram</NavLink>
        <NavLink href="#">YouTube</NavLink>
        <NavLink href="#">SoundCloud</NavLink>
      </div>
      <nav className="site-footer__nav" aria-label="Footer">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#concerts">Upcoming</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
