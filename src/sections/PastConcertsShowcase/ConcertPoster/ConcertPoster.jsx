import "./ConcertPoster.css";

const ConcertPoster = ({ year, title, image, program = [] }) => (
  <article className="concert-poster">
    <span className="concert-poster__year">{year}</span>
    <div className="concert-poster__card">
      <div className="concert-poster__inner">
        <div className="concert-poster__front">
          <img
            className="concert-poster__image"
            src={image}
            alt={`${title} poster`}
          />
        </div>
        <div className="concert-poster__back" aria-hidden="true">
          <span className="concert-poster__back-year">{year}</span>
          <h2 className="concert-poster__back-program-name">{title}</h2>
          <ul className="concert-poster__program-list">
            {program.map(({ piece, composer }, i) => (
              <li key={i} className="concert-poster__program-item">
                <span className="concert-poster__program-piece">{piece}</span>
                <span className="concert-poster__program-composer">{composer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </article>
);

export default ConcertPoster;
