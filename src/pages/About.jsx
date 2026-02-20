import { useCallback, useEffect, useRef, useState } from "react";
import LinkCta from "../components/LinkCta/LinkCta";
import useScrollManager from "../hooks/useScrollManager";
import { getScrollY } from "../utils/scrollPosition";
import "./About.css";

const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/dhjttb9y2/image/upload/f_auto,q_auto/";

const SECTION_PHOTO_IDS = [
  null,
  ["IMG_0154_fsfcsa", "IMG_7702_q0vwni"],
  ["IMG_7702_nyiojq", "IMG_0154_fsfcsa"],
  ["IMG_6767_qmnto6", "IMG_6304_vblfjn"],
];

const About = () => {
  const sectionRefs = useRef([]);
  const sectionPhotoRefs = useRef([]);
  const titleRef = useRef(null);
  const circleRef = useRef(null);
  const introImageRef = useRef(null);
  const ctaRef = useRef(null);
  const sectionIndicatorRef = useRef(null);
  const activeSectionRef = useRef(1);
  const [activeSection, setActiveSection] = useState(1);

  const setSectionRef = useCallback((index) => (node) => {
    sectionRefs.current[index] = node;
  }, []);

  const setSectionPhotoRef = useCallback((index) => (node) => {
    sectionPhotoRefs.current[index] = node;
  }, []);

  const rebuildTextLines = useCallback(() => {
    sectionRefs.current.forEach((section) => {
      if (!section) {
        return;
      }

      const textElements = section.querySelectorAll(".about-page__text");
      textElements.forEach((textElement) => {
        const existingOriginalText = textElement.dataset.aboutOriginalText;
        const originalText =
          existingOriginalText ??
          textElement.textContent?.replace(/\s+/g, " ").trim() ??
          "";

        textElement.dataset.aboutOriginalText = originalText;

        const words = originalText.split(" ").filter(Boolean);
        textElement.innerHTML = "";
        words.forEach((word, wordIndex) => {
          const wordNode = document.createElement("span");
          wordNode.className = "about-page__word";
          const isLastWord = wordIndex === words.length - 1;
          wordNode.textContent = isLastWord ? word : `${word} `;
          textElement.appendChild(wordNode);
        });

        const wordNodes = Array.from(textElement.querySelectorAll(".about-page__word"));
        const lines = [];
        let currentLineTop = null;

        wordNodes.forEach((wordNode) => {
          const wordTop = wordNode.offsetTop;
          if (currentLineTop === null || Math.abs(wordTop - currentLineTop) > 1) {
            currentLineTop = wordTop;
            lines.push([]);
          }
          lines[lines.length - 1].push(wordNode);
        });

        const fragment = document.createDocumentFragment();
        lines.forEach((lineWords, lineIndex) => {
          const lineNode = document.createElement("span");
          lineNode.className = "about-page__text-line";
          lineNode.dataset.aboutLineIndex = String(lineIndex);
          lineWords.forEach((lineWord) => lineNode.appendChild(lineWord));
          fragment.appendChild(lineNode);
        });

        textElement.innerHTML = "";
        textElement.appendChild(fragment);
        textElement.style.setProperty("--about-line-count", String(lines.length));
      });
    });
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

    let nextActiveSection = activeSectionRef.current;
    let nearestSectionDistance = Number.POSITIVE_INFINITY;

    let ctaVisibilityFactor = 1;
    let circleOpacity = 1;

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
      const viewportMidpoint = viewportHeight * 0.5;
      const isMidpointInsideSection =
        rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint;
      const sectionDistance = isMidpointInsideSection
        ? 0
        : Math.min(
            Math.abs(rect.top - viewportMidpoint),
            Math.abs(rect.bottom - viewportMidpoint)
          );
      if (sectionDistance < nearestSectionDistance) {
        nearestSectionDistance = sectionDistance;
        nextActiveSection = index + 1;
      }

      // Fade each section in on entry and fade the first two sections out on exit.
      const fadeInOpacity = index === 0 ? 1 : Math.min(1, progress / 0.22);
      let fadeOutOpacity = 1;
      const fadeOutStart = 0.9;
      const fadeOutDuration = 0.09;
      if (index < 3 && progress > fadeOutStart) {
        fadeOutOpacity = Math.max(
          0,
          1 - (progress - fadeOutStart) / fadeOutDuration
        );
      }
      const opacity = Math.min(fadeInOpacity, fadeOutOpacity);

      section.style.setProperty("--about-section-opacity", opacity.toFixed(3));

      const textRevealProgress = Math.min(1, Math.max(0, (progress - 0.08) / 0.72));
      const sectionTextElements = section.querySelectorAll(".about-page__text");
      sectionTextElements.forEach((textElement) => {
        const lineElements = textElement.querySelectorAll(".about-page__text-line");
        const lineCount = lineElements.length || 1;
        const sequentialProgress = textRevealProgress * lineCount;

        lineElements.forEach((lineElement, lineIndex) => {
          const lineReveal = Math.min(
            1,
            Math.max(0, sequentialProgress - lineIndex)
          );
          lineElement.style.setProperty("--about-line-reveal", lineReveal.toFixed(3));
        });
      });

      const sectionPhotoGroup = sectionPhotoRefs.current[index];
      if (sectionPhotoGroup) {
        const photoRevealProgress = Math.min(
          1,
          Math.max(0, progress / 0.16)
        );
        sectionPhotoGroup.style.setProperty(
          "--about-section-photo-opacity",
          photoRevealProgress.toFixed(3)
        );
      }

      if (index === 3 && ctaRef.current) {
        const ctaRevealProgress = Math.min(
          1,
          Math.max(0, (progress - 0.78) / 0.16)
        );
        ctaRef.current.style.setProperty(
          "--about-cta-opacity",
          ctaRevealProgress.toFixed(3)
        );
        ctaVisibilityFactor = 1 - ctaRevealProgress;
        circleOpacity = 1 - ctaRevealProgress;
      }
    });

    const circleEl = circleRef.current;
    if (circleEl) {
      circleEl.style.setProperty("--about-circle-opacity", circleOpacity.toFixed(3));
    }

    if (nextActiveSection !== activeSectionRef.current) {
      activeSectionRef.current = nextActiveSection;
      setActiveSection(nextActiveSection);
    }

    const introImage = introImageRef.current;
    if (introImage) {
      const introRect = introImage.getBoundingClientRect();
      const fadeDistancePx = 160;
      const distancePastTop = introRect.top <= 0 ? Math.abs(introRect.top) : 0;
      const fadeProgress = distancePastTop / fadeDistancePx;
      const imageOpacity = Math.max(0, Math.min(1, 1 - fadeProgress));
      introImage.style.setProperty("--about-intro-image-opacity", imageOpacity.toFixed(3));

      const indicatorVisibilityFromImage = Math.min(
        1,
        Math.max(0, (fadeProgress - 0.92) / 0.08)
      );
      const indicatorOpacity = indicatorVisibilityFromImage * ctaVisibilityFactor;
      sectionIndicatorRef.current?.style.setProperty(
        "--about-section-indicator-opacity",
        indicatorOpacity.toFixed(3)
      );
    }
  }, []);

  const prefersReducedMotion = useScrollManager(updateSectionFade);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const runRebuild = () => {
      rebuildTextLines();
      updateSectionFade();
    };

    const rafId = window.requestAnimationFrame(runRebuild);
    const handleResize = () => {
      window.requestAnimationFrame(runRebuild);
    };

    window.addEventListener("resize", handleResize);
    document.fonts?.ready.then(() => {
      runRebuild();
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [rebuildTextLines, updateSectionFade]);

  useEffect(() => {
    if (!prefersReducedMotion) {
      return;
    }

    sectionRefs.current.forEach((section) => {
      section?.style.setProperty("--about-section-opacity", "1");
      const sectionTextElements = section?.querySelectorAll(".about-page__text");
      sectionTextElements?.forEach((textElement) => {
        const lineElements = textElement.querySelectorAll(".about-page__text-line");
        lineElements.forEach((lineElement) => {
          lineElement.style.setProperty("--about-line-reveal", "1");
        });
      });
    });
    sectionPhotoRefs.current.forEach((photoGroup) => {
      photoGroup?.style.setProperty("--about-section-photo-opacity", "1");
    });
    activeSectionRef.current = 1;
    setActiveSection(1);
    ctaRef.current?.style.setProperty("--about-cta-opacity", "1");
    sectionIndicatorRef.current?.style.setProperty(
      "--about-section-indicator-opacity",
      "0"
    );
    introImageRef.current?.style.setProperty("--about-intro-image-opacity", "1");

    const circle = circleRef.current;
    if (circle) {
      circle.style.setProperty("--about-circle-opacity", "1");
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
                <span className="about-page__lead-emphasis">
                  Shoal Circle Chamber Orchestra
                </span>{" "}
                is a community chamber ensemble for adult amateur musicians of
                any level.
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
              <div
                className="about-page__section-photos"
                ref={setSectionPhotoRef(1)}
                aria-hidden="true"
              >
                <img
                  className="about-page__section-photo about-page__section-photo--left"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[1][0]}.jpg`}
                  alt=""
                />
                <img
                  className="about-page__section-photo about-page__section-photo--right"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[1][1]}.jpg`}
                  alt=""
                />
              </div>
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
              <div
                className="about-page__section-photos"
                ref={setSectionPhotoRef(2)}
                aria-hidden="true"
              >
                <img
                  className="about-page__section-photo about-page__section-photo--left"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[2][0]}.jpg`}
                  alt=""
                />
                <img
                  className="about-page__section-photo about-page__section-photo--right"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[2][1]}.jpg`}
                  alt=""
                />
              </div>
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
              <div
                className="about-page__section-photos"
                ref={setSectionPhotoRef(3)}
                aria-hidden="true"
              >
                <img
                  className="about-page__section-photo about-page__section-photo--left"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[3][0]}.jpg`}
                  alt=""
                />
                <img
                  className="about-page__section-photo about-page__section-photo--right"
                  src={`${CLOUDINARY_BASE_URL}${SECTION_PHOTO_IDS[3][1]}.jpg`}
                  alt=""
                />
              </div>
              <div className="about-page__cta" ref={ctaRef}>
                <LinkCta href="#upcoming">Get concert updates</LinkCta>
              </div>
            </div>
          </section>
        </div>
      </section>
      <hr className="about-page__separator" aria-hidden="true" />
      <div
        className="about-page__section-indicator"
        aria-hidden="true"
        ref={sectionIndicatorRef}
      >
        <span className="about-page__section-indicator-top">{activeSection}</span>
        <span className="about-page__section-indicator-line" />
        <span className="about-page__section-indicator-bottom">4</span>
      </div>
    </main>
  );
};

export default About;
