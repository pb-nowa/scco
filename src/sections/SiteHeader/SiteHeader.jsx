import NavLink from "../../components/NavLink/NavLink";
import { NAV_LINKS } from "../../constants/navLinks";
import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="site-header">
    <div className="layout__container site-header__inner">
      <nav className="site-header__nav" aria-label="Primary">
        {NAV_LINKS.map(({ href, label }) => (
          <NavLink key={href} href={href}>
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default SiteHeader;
