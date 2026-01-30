const LinkCta = ({ href, children }) => (
  <a className="hero-cta" href={href}>
    <span className="hero-cta-icon" aria-hidden="true">
      →
    </span>
    <span>{children}</span>
  </a>
);

export default LinkCta;
