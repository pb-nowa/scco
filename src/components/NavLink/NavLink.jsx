import "./NavLink.css";

const NavLink = ({ href, children, className = "", ...props }) => {
  const classes = ["site-header__nav-link", className].filter(Boolean).join(" ");

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
};

export default NavLink;
