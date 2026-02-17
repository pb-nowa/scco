import LinkCta from "../../components/LinkCta/LinkCta";
import NavLink from "../../components/NavLink/NavLink";
import { NAV_LINKS } from "../../constants/navLinks";
import "./SiteFooter.css";

const SiteFooter = () => (
  <footer className="site-footer" id="contact">
    <div className="layout__container site-footer__main">
      <div className="site-footer__intro">
        <h2 className="site-footer__heading section-heading">
          Let's make some music!
        </h2>
        <p className="site-footer__message">
          We'd love to hear from you! Reach out for inquiries about joining the
          orchestra or future concerts.
        </p>
        <LinkCta className="cta--feature" href="mailto:info@shoalcirclechamberorchestra.org">
          Contact us
        </LinkCta>
      </div>
      <div className="site-footer__social">
        <span className="site-footer__social-label section-heading">
          Follow us on social media
        </span>
        <NavLink href="#">Instagram</NavLink>
        <NavLink href="#">YouTube</NavLink>
        <NavLink href="#">SoundCloud</NavLink>
      </div>
    </div>
    <div className="layout__container site-footer__bottom">
      <div className="site-footer__copyright">© 2026 Shoal Circle Chamber Orchestra. All rights reserved.</div>
      <nav className="site-footer__nav" aria-label="Footer">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
