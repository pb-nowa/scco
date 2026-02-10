import { useEffect } from "react";
import FeatureSection from "./sections/FeatureSection/FeatureSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import PastConcertsShowcase from "./sections/PastConcertsShowcase/PastConcertsShowcase";
import RecordingSection from "./sections/RecordingSection/RecordingSection";
import SiteFooter from "./sections/SiteFooter/SiteFooter";
import SiteHeader from "./sections/SiteHeader/SiteHeader";

function App() {
  // #region agent log
  useEffect(() => {
    const run = () => {
      const docEl = document.documentElement;
      const scrollW = docEl.scrollWidth;
      const clientW = docEl.clientWidth;
      const innerW = window.innerWidth;
      const hasOverflow = scrollW > clientW || scrollW > innerW;
      const overflowPx = scrollW - Math.min(clientW, innerW);
      const overflowing = [];
      const walk = (el) => {
        if (el.nodeType !== 1) return;
        const rect = el.getBoundingClientRect();
        if (rect.right > innerW + 1 || rect.left < -1) {
          const name = el.className && typeof el.className === "string" ? el.className : "";
          if (name || el.tagName) overflowing.push({ tag: el.tagName, class: name, left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) });
        }
        for (let i = 0; i < el.children.length; i++) walk(el.children[i]);
      };
      walk(document.body);
      fetch("http://127.0.0.1:7242/ingest/618d1f7e-0c94-4c35-92e6-364ea83c31ae", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ location: "App.jsx", message: "horizontal scroll check", data: { scrollWidth: scrollW, clientWidth: clientW, innerWidth: innerW, hasOverflow, overflowPx, overflowing: overflowing.slice(0, 15) }, timestamp: Date.now(), hypothesisId: "A" }) }).catch(() => {});
    };
    const t = requestAnimationFrame(() => requestAnimationFrame(run));
    return () => cancelAnimationFrame(t);
  }, []);
  // #endregion

  return (
    <div className="layout">
      <SiteHeader />

      <main>
        <HeroSection />
        <FeatureSection />
        <RecordingSection />
        <PastConcertsShowcase />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
