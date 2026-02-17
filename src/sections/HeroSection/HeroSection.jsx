import { useCallback, useEffect, useRef } from "react";
import LinkCta from "../../components/LinkCta/LinkCta";
import useScrollManager from "../../hooks/useScrollManager";
import { getScrollY } from "../../utils/scrollPosition";
import "./HeroSection.css";

const HeroSection = () => {
  const heroRef = useRef(null);

  const applyHeroStyles = useCallback((opacity, scale) => {
    const section = heroRef.current;
    if (!section) {
      return;
    }

    section.style.setProperty("--hero-video-opacity", opacity.toFixed(3));
    section.style.setProperty("--hero-circle-scale", scale.toFixed(3));
  }, []);

  const updateOpacity = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const section = heroRef.current;
    if (!section) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollTop = getScrollY();
    const sectionTop = scrollTop + rect.top;
    const sectionHeight = section.offsetHeight;
    const maxScroll = Math.max(1, sectionHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, (scrollTop - sectionTop) / maxScroll));
    const opacity = 0.2 + 0.4 * progress;
    const scale = 1 + 0.15 * progress;

    applyHeroStyles(opacity, scale);
  }, [applyHeroStyles]);

  const prefersReducedMotion = useScrollManager(updateOpacity);

  useEffect(() => {
    if (prefersReducedMotion) {
      applyHeroStyles(0.2, 1);
    }
  }, [applyHeroStyles, prefersReducedMotion]);

  return (
    <section className="hero section" id="about" ref={heroRef}>
      <div className="hero__circle" aria-hidden="true">
        <div className="hero__circle-frame">
          <video
            className="hero__circle-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://res.cloudinary.com/dhjttb9y2/video/upload/so_0/SCCO_Hero_Video_wtekid.jpg"
          >
            <source
              src="https://res.cloudinary.com/dhjttb9y2/video/upload/SCCO_Hero_Video_wtekid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="layout__container hero__grid">
        <div className="hero__top">
          <div className="hero__left">
            <div className="hero__left-top">
              <h1 className="hero__title">
                <span>SHOAL</span>
                <span>CIRCLE</span>
                <span>CHAMBER</span>
                <span>ORCHESTRA</span>
              </h1>
              <p className="hero__location section-heading">SAN MATEO, CA</p>
            </div>
          </div>
          <div className="hero__right">
            <div className="hero__upcoming">
              <p className="hero__label section-heading">Upcoming concert</p>
              <div className="hero__event">
                <span>Palo Alto, CA</span>
                <span>December 2026</span>
              </div>
            </div>
            <div className="hero__cta">
              <LinkCta href="#upcoming">Get concert updates</LinkCta>
            </div>
          </div>
        </div>
        <div className="hero__bottom" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;
