import { useEffect, useState } from "react";
import { useFirstLoad } from "../../context/FirstLoadContext";
import "./LoadScreen.css";

const ANIMATION_DURATION_MS = 2000;
const FADE_OUT_DURATION_MS = 400;

const LoadScreen = () => {
  const { isFirstLoad } = useFirstLoad();
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const [progress, setProgress] = useState(1);
  const [prevProgress, setPrevProgress] = useState(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 400 : ANIMATION_DURATION_MS;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = Math.max(0, now - startTime - 250);
      const t = Math.min(1, elapsed / duration);
      const step = Math.min(4, Math.max(1, Math.ceil(t * 4)));
      setProgress((prev) => {
        if (step !== prev) setPrevProgress(prev);
        return step;
      });
      if (t < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = prefersReducedMotion ? 400 : ANIMATION_DURATION_MS;

    const timer = setTimeout(() => {
      setIsExiting(true);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (prevProgress !== null && prevProgress !== progress) {
      const timer = setTimeout(() => setPrevProgress(progress), 200);
      return () => clearTimeout(timer);
    }
  }, [progress, prevProgress]);

  useEffect(() => {
    if (!isExiting) return;

    const timer = setTimeout(() => {
      setIsMounted(false);
    }, FADE_OUT_DURATION_MS);

    return () => clearTimeout(timer);
  }, [isExiting]);

  useEffect(() => {
    if (!isFirstLoad || !isMounted) return;
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      window.scrollTo(0, scrollY);
    };
  }, [isFirstLoad, isMounted]);

  if (!isFirstLoad || !isMounted) return null;

  return (
    <div
      className={`load-screen ${isExiting ? "load-screen--exiting" : ""}`}
      aria-hidden="true"
    >
      <div className="load-screen__content">
        <div className="load-screen__circle-wrapper">
          <div className="load-screen__circle-ring" />
        </div>
        <div className="load-screen__text-wrap">
          {prevProgress !== null && prevProgress !== progress && (
            <div className="load-screen__fraction load-screen__text--out" key={`prev-${prevProgress}`}>
              <span className="load-screen__fraction-top">{prevProgress}</span>
              <span className="load-screen__fraction-line" />
              <span className="load-screen__fraction-bottom">4</span>
            </div>
          )}
          <div className="load-screen__fraction load-screen__text--in" key={progress}>
            <span className="load-screen__fraction-top">{progress}</span>
            <span className="load-screen__fraction-line" />
            <span className="load-screen__fraction-bottom">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadScreen;
