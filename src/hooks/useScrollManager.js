import { useEffect, useRef, useState } from "react";
import { scrollManager } from "../utils/scrollManager";

const useScrollManager = (callback, options = {}) => {
  const { respectReducedMotion = true, runOnInit = true } = options;
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    const shouldEnable = !respectReducedMotion || !prefersReducedMotion;
    if (!shouldEnable) {
      return undefined;
    }

    const handler = () => {
      callbackRef.current();
    };

    scrollManager.subscribe(handler);
    if (runOnInit) {
      handler();
    }

    return () => {
      scrollManager.unsubscribe(handler);
    };
  }, [prefersReducedMotion, respectReducedMotion, runOnInit]);

  return prefersReducedMotion;
};

export default useScrollManager;
