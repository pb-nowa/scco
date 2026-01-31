const LinkCta = ({ href, children, className = "" }) => (
  <a className={`cta ${className}`.trim()} href={href}>
    <span className="cta__icon" aria-hidden="true">
      →
    </span>
    <span className="cta__text">{children}</span>
  </a>
);

export default LinkCta;
