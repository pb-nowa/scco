import FeatureHeading from "../../components/FeatureHeading/FeatureHeading";
import PastConcertsFooter from "./PastConcertsFooter/PastConcertsFooter";
import "./PastConcertsShowcase.css";

const posters = [
  {
    year: "2025",
    title: "Monsters Symphonic",
    subtitle: "Live at Palo Alto Arts Center",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880893/Insta_story.PNG_w3wnqh.png",
  },
  {
    year: "2024",
    title: "Silver Linings",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880879/Insta_story_2_o4t0kn.png",
  },
  {
    year: "2023",
    title: "Daydream",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880844/IMG_3970_cw9xeo.png",
  },
  {
    year: "2022",
    title: "Shoal Circle Chamber Orchestra",
    subtitle: "A winter concert",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880901/Program-Invite_ekfqcz.jpg",
  },
];

const PastConcertsShowcase = () => (
  <>
    <section id="past-concerts" className="section past-concerts">
      <div className="past-concerts__media">
        <div className="layout__container past-concerts__content">
          <div className="past-concerts__title section-title section-title--past">
            <FeatureHeading lines={["PAST", "CONCERTS"]} />
          </div>
          <div className="past-concerts__rules" aria-hidden="true">
            <span className="past-concerts__rule" />
            <span className="past-concerts__rule" />
            <span className="past-concerts__rule" />
          </div>
        </div>
      </div>
      <div className="layout__container past-concerts__posters">
        {posters.map((poster) => (
          <article key={poster.title} className="past-concerts__poster-item">
            <span className="past-concerts__poster-year">{poster.year}</span>
            <div className="past-concerts__poster">
              <img
                className="past-concerts__poster-image"
                src={poster.image}
                alt={`${poster.title} poster`}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
    <PastConcertsFooter />
  </>
);

export default PastConcertsShowcase;
