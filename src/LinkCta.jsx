const LinkCta = ({ href, children, className = "" }) => (
  <a className={`hero-cta ${className}`.trim()} href={href}>
    <span className="hero-cta-icon" aria-hidden="true">
      →
    </span>
    <span>{children}</span>
  </a>
);

export default LinkCta;
