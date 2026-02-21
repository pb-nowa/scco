import "./LinkCta.css";

const CtaIcon = () => (
  <span className="cta__icon" aria-hidden="true">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="3" y1="12" x2="20" y2="12" />
      <line x1="20" y1="12" x2="12.5" y2="5" />
      <line x1="20" y1="12" x2="12.5" y2="19" />
    </svg>
  </span>
);

const LinkCta = ({
  href,
  children,
  className = "",
  as: Component = "a",
  ...props
}) => (
  <Component
    className={`cta ${className}`.trim()}
    href={Component === "a" ? href : undefined}
    {...props}
  >
    <CtaIcon />
    <span className="cta__text">{children}</span>
  </Component>
);

export default LinkCta;
