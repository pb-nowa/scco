import NavLink from "../../components/NavLink/NavLink";
import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="site-header">
    <div className="layout__container site-header__inner">
      <nav className="site-header__nav" aria-label="Primary">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#concerts">Upcoming</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
