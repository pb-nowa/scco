import "./RecordingSection.css";

const RecordingSection = () => (
  <section className="section recording">
    <div className="layout__container recording__container section-split__grid">
      <div className="section-split__left recording__left"></div>
      <div className="recording__content section-split__right">
        <p className="recording__title">Featured recording</p>
        <div className="recording__frame">
          <div className="recording__placeholder">
            SoundCloud embed placeholder
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RecordingSection;
