import "./SiteHeader.css";

const SiteHeader = () => (
  <header className="site-header">
    <div className="layout__container site-header__inner">
      <nav className="site-header__nav" aria-label="Primary">
        <a className="site-header__nav-link" href="#about">
          About
        </a>
        <a className="site-header__nav-link" href="#concerts">
          Upcoming
        </a>
        <a className="site-header__nav-link" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default SiteHeader;
