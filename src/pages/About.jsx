import { useCallback, useEffect, useRef } from "react";
import useScrollManager from "../hooks/useScrollManager";
import { getScrollY } from "../utils/scrollPosition";
import "./About.css";

const About = () => {
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const introImageRef = useRef(null);

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

    const circle = circleRef.current;
    if (circle) {
      const waveProgress = Math.min(1, Math.max(0, scrollY / 700));
      const phase = scrollY / 120;
      const waveStrength = 0.35 + waveProgress * 0.65;
      const wavePrimaryScale =
        1 + Math.sin(phase) * 0.012 * waveStrength + waveProgress * 0.01;
      const waveSecondaryScale =
        1 + Math.sin(phase + 1.2) * 0.01 * waveStrength + waveProgress * 0.006;
      const wavePrimaryOpacity =
        0.08 + (0.03 + Math.sin(phase + 0.6) * 0.015) * waveStrength;
      const waveSecondaryOpacity =
        0.055 + (0.02 + Math.sin(phase + 2) * 0.012) * waveStrength;
      const frameScale = 1 + Math.sin(phase + 0.35) * 0.004 * waveStrength;

      circle.style.setProperty(
        "--about-circle-wave-scale-primary",
        wavePrimaryScale.toFixed(4)
      );
      circle.style.setProperty(
        "--about-circle-wave-scale-secondary",
        waveSecondaryScale.toFixed(4)
      );
      circle.style.setProperty(
        "--about-circle-wave-opacity-primary",
        wavePrimaryOpacity.toFixed(4)
      );
      circle.style.setProperty(
        "--about-circle-wave-opacity-secondary",
        waveSecondaryOpacity.toFixed(4)
      );
      circle.style.setProperty("--about-circle-frame-scale", frameScale.toFixed(4));
    }

    sectionRefs.current.forEach((section, index) => {
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 0;
      const progress = Math.min(
        1,
        Math.max(0, (viewportHeight - rect.top) / rect.height)
      );

      // Fade each section in on entry and fade the first two sections out on exit.
      const fadeInOpacity = index === 0 ? 1 : Math.min(1, progress / 0.22);
      let fadeOutOpacity = 1;
      const fadeOutStart = 0.7;
      if (index < 3 && progress > fadeOutStart) {
        fadeOutOpacity = Math.max(0, 1 - (progress - fadeOutStart) / 0.22);
      }
      const opacity = Math.min(fadeInOpacity, fadeOutOpacity);

      section.style.setProperty("--about-section-opacity", opacity.toFixed(3));
    });

    const introImage = introImageRef.current;
    if (introImage) {
      const introRect = introImage.getBoundingClientRect();
      const fadeDistancePx = 160;
      const distancePastTop = introRect.top <= 0 ? Math.abs(introRect.top) : 0;
      const fadeProgress = distancePastTop / fadeDistancePx;
      const imageOpacity = Math.max(0, Math.min(1, 1 - fadeProgress));
      introImage.style.setProperty("--about-intro-image-opacity", imageOpacity.toFixed(3));
    }
  }, []);

  const prefersReducedMotion = useScrollManager(updateSectionFade);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    sectionRefs.current.forEach((section) => {
      section?.style.setProperty("--about-section-opacity", "1");
    });
    introImageRef.current?.style.setProperty("--about-intro-image-opacity", "1");

    const circle = circleRef.current;
    if (circle) {
      circle.style.setProperty("--about-circle-wave-scale-primary", "1");
      circle.style.setProperty("--about-circle-wave-scale-secondary", "1");
      circle.style.setProperty("--about-circle-wave-opacity-primary", "0.07");
      circle.style.setProperty("--about-circle-wave-opacity-secondary", "0.05");
      circle.style.setProperty("--about-circle-frame-scale", "1");
    }
  }, [prefersReducedMotion]);

  return (
    <main className="about-page">
      <div className="about-page__circle" aria-hidden="true" ref={circleRef}>
        <div className="about-page__circle-frame" />
        <div className="about-page__circle-wave about-page__circle-wave--primary" />
        <div className="about-page__circle-wave about-page__circle-wave--secondary" />
      </div>
      <section className="about-page__hero section">
        <div className="layout__container">
          <h1 className="about-page__title" ref={titleRef}>
            OUR STORY
          </h1>
        </div>
      </section>
      <section className="about-page__content">
        <div className="layout__container">
          <img
            ref={introImageRef}
            className="about-page__intro-image"
            src="https://res.cloudinary.com/dhjttb9y2/image/upload/f_auto,q_auto/IMG_1368_bvblq7.jpg"
            alt="Shoal Circle Chamber Orchestra musicians rehearsing"
          />
          <section className="about-page__scroll-section" ref={setSectionRef(0)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__lead">
                Shoal Circle Chamber Orchestra is a community chamber ensemble for
                adult amateur musicians of any level.
              </p>
              <p className="about-page__text">
                Our mission is to create a space where adult musicians regardless
                of background, experience, or instrument can play and perform
                together.
              </p>
            </div>
          </section>

          <section className="about-page__scroll-section" ref={setSectionRef(1)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__text about-page__text--section-2">
                SCCO was founded in 2022 by a group of friends who began playing
                music together in a living room in the San Francisco Peninsula.
                What started informally has grown into an annual community
                concert shaped entirely by amateur musicians.
              </p>
            </div>
          </section>

          <section className="about-page__scroll-section" ref={setSectionRef(2)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__text">
                Because the ensemble&apos;s instrumentation changes from year to
                year, the repertoire extends well beyond the traditional chamber
                orchestra canon. Programs are playful, eclectic, and sometimes
                experimental moving fluidly between classical works, jazz, pop,
                film music, Latin styles, and other genres depending on the
                group&apos;s unique combination of instruments and skill levels.
              </p>
            </div>
          </section>

          <section className="about-page__scroll-section" ref={setSectionRef(3)}>
            <div className="about-page__scroll-panel">
              <p className="about-page__text">
                We believe great performances don&apos;t belong only to
                professionals or major concert halls. The ensemble rehearses
                weekly in preparation for its annual concert and welcomes adult
                musicians of diverse experience levels. Each year, SCCO presents
                a community performance open to friends, families, and community
                members.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
