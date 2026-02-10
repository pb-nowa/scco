import { useCallback, useEffect, useRef } from "react";
import useScrollManager from "../../../hooks/useScrollManager";
import "./PastConcertsFooter.css";

/** Max downward translate as the footer scrolls into view (keeps image in frame) */
const PARALLAX_MAX_OFFSET_PX = 50;

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769881017/IMG_7146_clajal.jpg";

const PastConcertsFooter = ({ src = DEFAULT_IMAGE, alt = "Past concerts background" }) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const updateParallax = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) {
      return;
    }
    const rect = container.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const start = viewportHeight;
    const end = 0;
    const progress =
      start === end
        ? 1
        : Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
    const offset = progress * PARALLAX_MAX_OFFSET_PX;
    wrapper.style.setProperty("--parallax-y", `${offset}px`);
  }, []);

  const prefersReducedMotion = useScrollManager(updateParallax);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.style.setProperty("--parallax-y", "0px");
    }
  }, [prefersReducedMotion]);

  return (
    <div ref={containerRef} className="past-concerts__footer">
      <div ref={wrapperRef} className="past-concerts__footer-image-wrap">
        <img
          className="past-concerts__footer-image"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default PastConcertsFooter;
