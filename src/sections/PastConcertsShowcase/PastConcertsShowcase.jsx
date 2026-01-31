import "./PastConcertsShowcase.css";

const posters = [
  {
    title: "Monsters Symphonic",
    subtitle: "Live at Palo Alto Arts Center",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880893/Insta_story.PNG_w3wnqh.png",
  },
  {
    title: "Silver Linings",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880879/Insta_story_2_o4t0kn.png",
  },
  {
    title: "Daydream",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880844/IMG_3970_cw9xeo.png",
  },
  {
    title: "Shoal Circle Chamber Orchestra",
    subtitle: "A winter concert",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880901/Program-Invite_ekfqcz.jpg",
  },
];

const PastConcertsShowcase = () => (
  <section id="past-concerts" className="section past-concerts">
    <div className="past-concerts__bg-wrap">
      <img
        className="past-concerts__bg"
        src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769881017/IMG_7146_clajal.jpg"
        alt=""
        aria-hidden="true"
      />
    </div>
    <div className="past-concerts__media">
      <div className="layout__container past-concerts__content">
        <h2 className="past-concerts__title section-title section-title--past">
          <span>Past</span>
          <span>Concerts</span>
        </h2>
      </div>
    </div>
    <div className="layout__container past-concerts__posters">
      {posters.map((poster) => (
        <article key={poster.title} className="past-concerts__poster">
          <img
            className="past-concerts__poster-image"
            src={poster.image}
            alt={`${poster.title} poster`}
          />
        </article>
      ))}
    </div>
  </section>
);

export default PastConcertsShowcase;
