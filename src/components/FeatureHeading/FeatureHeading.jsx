import { useCallback, useEffect, useRef, useState } from "react";
import useScrollManager from "../../hooks/useScrollManager";

const PARALLAX_OFFSET = 100;

const FeatureHeading = () => {
  const headingRef = useRef(null);
  const [translateY, setTranslateY] = useState(-PARALLAX_OFFSET);

  const updatePosition = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const heading = headingRef.current;
    if (!heading) {
      return;
    }

    const rect = heading.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const start = viewportHeight;
    const end = viewportHeight * 0.2;
    const progress =
      start === end
        ? 1
        : Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

    setTranslateY(-PARALLAX_OFFSET * (1 - progress));
  }, []);

  const prefersReducedMotion = useScrollManager(updatePosition);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTranslateY(0);
    }
  }, [prefersReducedMotion]);

  return (
    <div
      className="feature__heading-wrap"
      ref={headingRef}
      style={{ transform: `translate3d(0, ${translateY}px, 0)` }}
    >
      <h2 className="feature__heading section-title section-title--feature">
        <span className="feature__heading-row feature__heading-row--wide">
          <span>LET&apos;S</span>
          <span>MAKE</span>
        </span>
        <span className="feature__heading-row">SOME</span>
        <span className="feature__heading-row">MUSIC</span>
      </h2>
    </div>
  );
};

export default FeatureHeading;
