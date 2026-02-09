import FeatureCard from "../../components/FeatureCard/FeatureCard";
import FeatureHeading from "../../components/FeatureHeading/FeatureHeading";
import FeatureQuotes from "../../components/FeatureQuotes/FeatureQuotes";
import "./FeatureSection.css";

const FeatureSection = () => (
  <section className="section feature" id="music">
    <img
      className="feature__bg"
      src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820597/IMG_7130_mpifsr.jpg"
      alt=""
      aria-hidden="true"
    />
    <FeatureHeading />
    <div className="feature__grid section-split__grid">
      <div className="feature__visual-wrap section-split__right">
        <div className="feature__visual">
          <FeatureCard />
          <FeatureQuotes />
        </div>
      </div>
      <img
        className="feature__photo section-split__left"
        src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820664/IMG_1376_cyswwz.jpg"
        alt="Shoal Circle Chamber Orchestra ensemble"
      />
    </div>
  </section>
);

export default FeatureSection;
