import FeatureSection from "./sections/FeatureSection";
import HeroSection from "./sections/HeroSection";
import PastConcertsShowcase from "./sections/PastConcertsShowcase";
import RecordingSection from "./sections/RecordingSection";
import SiteFooter from "./sections/SiteFooter";
import SiteHeader from "./sections/SiteHeader";

function App() {
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
