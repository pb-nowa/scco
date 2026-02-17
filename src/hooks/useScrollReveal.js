import { useCallback, useEffect, useRef, useState } from "react";
import useScrollManager from "./useScrollManager";
import { getScrollY } from "../utils/scrollPosition";

const DEFAULT_THRESHOLD = 0.85;

const useScrollReveal = (options = {}) => {
  const {
    threshold = DEFAULT_THRESHOLD,
    requireScrollDirection = "down",
    once = true,
    runOnInit = false,
  } = options;
  const targetRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateVisibility = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const target = targetRef.current;
    if (!target) {
      return;
    }

    const currentScrollY = getScrollY();
    const scrollDelta = currentScrollY - lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (requireScrollDirection === "down" && scrollDelta <= 0) {
      return;
    }

    if (requireScrollDirection === "up" && scrollDelta >= 0) {
      return;
    }

    if (once && isVisible) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const isInView = rect.top <= viewportHeight * threshold && rect.bottom >= 0;

    if (isInView) {
      setIsVisible(true);
    } else if (!once) {
      setIsVisible(false);
    }
  }, [isVisible, once, requireScrollDirection, threshold]);

  const prefersReducedMotion = useScrollManager(updateVisibility, {
    runOnInit,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
    }
  }, [prefersReducedMotion]);

  return { ref: targetRef, isVisible };
};

export default useScrollReveal;
