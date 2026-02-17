import useScrollReveal from "../../../hooks/useScrollReveal";
import ConcertPoster from "../ConcertPoster/ConcertPoster";
import "./ConcertPosterReveal.css";

const ConcertPosterReveal = ({ year, title, image, program }) => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.85,
    once: true,
  });

  return (
    <div
      ref={ref}
      className={`concert-poster-reveal${isVisible ? " concert-poster-reveal--in-view" : ""}`}
    >
      <ConcertPoster year={year} title={title} image={image} program={program} />
    </div>
  );
};

export default ConcertPosterReveal;
