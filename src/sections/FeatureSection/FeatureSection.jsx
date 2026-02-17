import { useCallback, useEffect, useRef } from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import FeatureHeading from "../../components/FeatureHeading/FeatureHeading";
import FeatureQuotes from "../../components/FeatureQuotes/FeatureQuotes";
import useScrollManager from "../../hooks/useScrollManager";
import "./FeatureSection.css";

const PARALLAX_OFFSET_PX = 50;

const FeatureSection = () => {
  const sectionRef = useRef(null);
  const photoRef = useRef(null);

  const updateParallax = useCallback(() => {
    if (typeof window === "undefined") return;
    const section = sectionRef.current;
    const photo = photoRef.current;
    if (!section || !photo) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const start = viewportHeight;
    const end = -rect.height * 0.5;
    const progress =
      start === end
        ? 1
        : Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
    const offset = -progress * PARALLAX_OFFSET_PX;
    photo.style.setProperty("--feature-photo-parallax-y", `${offset}px`);
  }, []);

  const prefersReducedMotion = useScrollManager(updateParallax, {
    runOnInit: true,
  });

  useEffect(() => {
    if (prefersReducedMotion && photoRef.current) {
      photoRef.current.style.setProperty("--feature-photo-parallax-y", "0px");
    }
  }, [prefersReducedMotion]);

  return (
    <section ref={sectionRef} className="section feature" id="upcoming">
      <img
        className="feature__bg"
        src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820597/IMG_7130_mpifsr.jpg"
        alt=""
        aria-hidden="true"
      />
      <FeatureHeading />
      <div className="feature__grid section-split__grid">
        <div className="feature__visual-wrap section-split__right">
          <div className="feature__visual">
            <FeatureCard />
            <FeatureQuotes />
          </div>
        </div>
        <img
          ref={photoRef}
          className="feature__photo section-split__left"
          src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820664/IMG_1376_cyswwz.jpg"
          alt="Shoal Circle Chamber Orchestra ensemble"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
