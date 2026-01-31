import LinkCta from "../../components/LinkCta/LinkCta";
import "./SiteFooter.css";

const SiteFooter = () => (
  <footer className="site-footer" id="contact">
    <div className="layout__container site-footer__top">
      <div className="site-footer__intro">
        <h2 className="site-footer__heading">Let's make some music!</h2>
        <p className="site-footer__message">
          We'd love to hear from you! Reach out for inquiries about joining the
          orchestra or future concerts.
        </p>
        <LinkCta
          href="mailto:info@shoalcirclechamberorchestra.org"
          className="cta--footer"
        >
          CONTACT US
        </LinkCta>
      </div>
    </div>
    <div className="layout__container site-footer__bottom">
      <div className="site-footer__social">
        <span className="site-footer__social-label">
          Follow us on social media!
        </span>
        <a className="site-footer__link" href="#">
          Instagram
        </a>
        <span className="site-footer__separator" aria-hidden="true">
          |
        </span>
        <a className="site-footer__link" href="#">
          YouTube
        </a>
        <span className="site-footer__separator" aria-hidden="true">
          |
        </span>
        <a className="site-footer__link" href="#">
          SoundCloud
        </a>
      </div>
      <nav className="site-footer__nav" aria-label="Footer">
        <a className="site-footer__nav-link" href="#about">
          About
        </a>
        <a className="site-footer__nav-link" href="#concerts">
          Upcoming
        </a>
        <a className="site-footer__nav-link" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
