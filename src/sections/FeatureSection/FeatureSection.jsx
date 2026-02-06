import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./FeatureSection.css";

const FeatureSection = () => (
  <section className="section feature" id="music">
    <img
      className="feature__bg"
      src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820597/IMG_7130_mpifsr.jpg"
      alt=""
      aria-hidden="true"
    />
    <div className="feature__heading-wrap">
      <h2 className="feature__heading section-title section-title--feature">
        <span className="feature__heading-row feature__heading-row--wide">
          <span>LET'S</span>
          <span>MAKE</span>
        </span>
        <span className="feature__heading-row">SOME</span>
        <span className="feature__heading-row">MUSIC</span>
      </h2>
    </div>
    <div className="layout__container feature__grid">
      <div className="feature__visual-wrap">
        <div className="feature__visual">
          <FeatureCard />
          <div className="feature__quotes">
            <div>
              <p>“Wow this sounds like music”</p>
              <p className="feature__quote-author">- Preston's mom</p>
            </div>
            <div>
              <p>“The food is really good”</p>
              <p className="feature__quote-author">
                - anonymous concert attendee
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        className="feature__photo"
        src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820664/IMG_1376_cyswwz.jpg"
        alt="Shoal Circle Chamber Orchestra ensemble"
      />
    </div>
  </section>
);

export default FeatureSection;
