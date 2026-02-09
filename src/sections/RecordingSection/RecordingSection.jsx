import "./RecordingSection.css";

const RecordingSection = () => (
  <section className="section recording">
    <div className="layout__container recording__container section-split__grid">
      <div className="section-split__left recording__left"></div>
      <div className="recording__content section-split__right">
        <p className="recording__title section-heading">Featured recordings</p>
        <div className="recording__frame">
          <div className="recording__row">
            <button
              className="recording__play"
              type="button"
              aria-label="Play Randy Newman - Monsters, Inc."
            >
              <span className="recording__play-icon" aria-hidden="true" />
            </button>
            <p className="recording__track">Randy Newman - Monsters, Inc.</p>
            <p className="recording__duration">3:25</p>
          </div>
          <div className="recording__divider" aria-hidden="true" />
          <div className="recording__row">
            <button
              className="recording__play"
              type="button"
              aria-label="Play Randy Newman - Monsters, Inc."
            >
              <span className="recording__play-icon" aria-hidden="true" />
            </button>
            <p className="recording__track">Randy Newman - Monsters, Inc.</p>
            <p className="recording__duration">3:25</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RecordingSection;
