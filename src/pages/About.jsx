import { useCallback, useEffect, useRef } from "react";
import useScrollManager from "../hooks/useScrollManager";
import { getScrollY } from "../utils/scrollPosition";
import "./About.css";

const About = () => {
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  const setSectionRef = useCallback((index) => (node) => {
    sectionRefs.current[index] = node;
  }, []);

  const updateSectionFade = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const scrollY = getScrollY();
    const titleScaleProgress = Math.min(1, Math.max(0, scrollY / 140));
    const titleScale = 1 - titleScaleProgress * 0.5;
    titleRef.current?.style.setProperty("--about-title-scale", titleScale.toFixed(3));

    sectionRefs.current.forEach((section, index) => {
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / rect.height)
      );

      // Fade out only sections 1 and 2 after they have paused near the title.
      let opacity = 1;
      if (index < 2 && progress > 0.7) {
        opacity = Math.max(0, 1 - (progress - 0.7) / 0.22);
      }

      section.style.setProperty("--about-section-opacity", opacity.toFixed(3));
    });
  }, []);

  const prefersReducedMotion = useScrollManager(updateSectionFade);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    sectionRefs.current.forEach((section) => {
      section?.style.setProperty("--about-section-opacity", "1");
    });
  }, [prefersReducedMotion]);

  return (
    <main className="about-page">
      <div className="about-page__circle" aria-hidden="true">
        <div className="about-page__circle-frame" />
      </div>
      <section className="about-page__hero section">
        <div className="layout__container">
          <h1 className="about-page__title" ref={titleRef}>
            ABOUT US
          </h1>
        </div>
      </section>
      <section className="about-page__content">
        <div className="layout__container">
          <section className="about-page__scroll-section" ref={setSectionRef(0)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__lead">
                Shoal Circle Chamber Orchestra is a community chamber ensemble for
                adult musicians of any level.
              </p>
              <p className="about-page__text">
                Our mission is to create a space where adult musicians regardless
                of background or experience can play and perform together in a
                thoughtful, collaborative setting.
              </p>
            </div>
          </section>

          <section className="about-page__scroll-section" ref={setSectionRef(1)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__text about-page__text--section-2">
                We believe great performances do not belong only to professionals
                or major concert halls. Each year, SCCO presents a community
                concert featuring a wide range of repertoire shaped by the
                ensemble&apos;s unique instrumentation and skill levels. Programs
                evolve organically, reflecting the musicians involved and the
                strengths they bring to the group.
              </p>
            </div>
          </section>

          <section className="about-page__scroll-section" ref={setSectionRef(2)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__text">
                By centering flexibility, inclusion, and musical curiosity, Shoal
                Circle Chamber Orchestra offers adult players the opportunity to
                grow artistically and share meaningful performances with their
                friends and family.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
