import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "../../components/NavLink/NavLink";
import { NAV_LINKS } from "../../constants/navLinks";
import useScrollManager from "../../hooks/useScrollManager";
import "./SiteHeader.css";

const SiteHeader = () => {
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();

  const checkScrollPastHero = useCallback(() => {
    if (location.pathname !== "/") {
      setShowLogo(true);
      return;
    }
    const hero = document.getElementById("about");
    if (!hero) {
      setShowLogo(false);
      return;
    }
    const rect = hero.getBoundingClientRect();
    setShowLogo(rect.bottom <= 0);
  }, [location.pathname]);

  useScrollManager(checkScrollPastHero);

  useEffect(() => {
    checkScrollPastHero();
  }, [location.pathname, checkScrollPastHero]);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="site-header">
      <div className="layout__container site-header__inner">
        <div className="site-header__left">
          {showLogo && (
            <Link
              to="/"
              className="site-header__logo"
              onClick={handleLogoClick}
              state={location.pathname !== "/" ? { fromLogo: true } : undefined}
            >
              SCCO
            </Link>
          )}
        </div>
        <nav className="site-header__nav" aria-label="Primary">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
