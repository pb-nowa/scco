import { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { scrollManager } from "../../utils/scrollManager";
import { setScrollYFromLenis, clearLenisSource } from "../../utils/scrollPosition";
import { ScrollToProvider } from "../../context/ScrollToContext";

function LenisScrollBridge() {
  useLenis((lenis) => {
    setScrollYFromLenis(lenis.scroll);
    scrollManager.requestTick();
  });
  return null;
}

function NativeScrollToProvider({ children }) {
  const scrollTo = (target) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }
    if (typeof target === "object" && target !== null && "top" in target) {
      window.scrollTo({ top: target.top, behavior: "smooth" });
      return;
    }
    const el = typeof target === "string" ? document.getElementById(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return <ScrollToProvider scrollTo={scrollTo}>{children}</ScrollToProvider>;
}

function LenisScrollToProvider({ children }) {
  const lenis = useLenis();
  const scrollTo = (target) => {
    if (!lenis) return;
    if (typeof target === "number" || (typeof target === "object" && target !== null && "top" in target)) {
      lenis.scrollTo(0, { lerp: 0.1 });
      return;
    }
    const el = typeof target === "string" ? document.getElementById(target) : target;
    if (el) lenis.scrollTo(el, { offset: 0, lerp: 0.1 });
  };
  return <ScrollToProvider scrollTo={scrollTo}>{children}</ScrollToProvider>;
}

export function LenisProvider({ children }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      clearLenisSource();
    }
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <NativeScrollToProvider>{children}</NativeScrollToProvider>;
  }

  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      <LenisScrollBridge />
      <LenisScrollToProvider>{children}</LenisScrollToProvider>
    </ReactLenis>
  );
}
