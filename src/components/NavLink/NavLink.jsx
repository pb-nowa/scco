import { Link, useLocation } from "react-router-dom";
import { useScrollTo } from "../../context/ScrollToContext";
import "./NavLink.css";

const NavLink = ({ to, href, children, className = "", onClick, ...props }) => {
  const classes = ["site-header__nav-link", className].filter(Boolean).join(" ");
  const destination = to ?? href;
  const location = useLocation();
  const scrollTo = useScrollTo();

  if (destination?.startsWith("http") || destination?.startsWith("mailto:")) {
    return (
      <a className={classes} href={destination} {...props}>
        {children}
      </a>
    );
  }

  const handleClick = (e) => {
    if (destination?.includes("#")) {
      const [path, hashPart] = destination.split("#");
      const targetPath = (path || "/").replace(/\/$/, "") || "/";
      const targetHash = hashPart ? `#${hashPart}` : "";
      const currentPath = location.pathname.replace(/\/$/, "") || "/";
      const currentHash = location.hash;

      if (currentPath === targetPath && currentHash === targetHash) {
        e.preventDefault();
        scrollTo?.(hashPart);
      }
    }
    onClick?.(e);
  };

  return (
    <Link
      className={classes}
      to={destination ?? "#"}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
