import FeatureSection from "./sections/FeatureSection/FeatureSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import PastConcertsShowcase from "./sections/PastConcertsShowcase/PastConcertsShowcase";
import RecordingSection from "./sections/RecordingSection/RecordingSection";
import SiteFooter from "./sections/SiteFooter/SiteFooter";
import SiteHeader from "./sections/SiteHeader/SiteHeader";

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
