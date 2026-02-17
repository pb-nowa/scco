import { useCallback, useEffect, useRef, useState } from "react";
import FeatureHeading from "../../components/FeatureHeading/FeatureHeading";
import useScrollManager from "../../hooks/useScrollManager";
import ConcertPoster from "./ConcertPoster/ConcertPoster";
import PastConcertsFooter from "./PastConcertsFooter/PastConcertsFooter";
import "./PastConcertsShowcase.css";

const placeholderProgram = [
  { piece: "Opening Fanfare", composer: "J. Smith" },
  { piece: "Serenade in D", composer: "A. Composer" },
  { piece: "Nocturne", composer: "M. Williams" },
  { piece: "Intermezzo", composer: "L. Jones" },
  { piece: "Scherzo", composer: "R. Brown" },
  { piece: "Adagio", composer: "K. Davis" },
  { piece: "Finale", composer: "E. Taylor" },
];

const posters = [
  {
    year: "2025",
    title: "Monsters SymphonInc",
    subtitle: "Live at Palo Alto Arts Center",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880893/Insta_story.PNG_w3wnqh.png",
    program: placeholderProgram,
  },
  {
    year: "2024",
    title: "Silver Linings",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880879/Insta_story_2_o4t0kn.png",
    program: placeholderProgram,
  },
  {
    year: "2023",
    title: "Day Dream",
    subtitle: "Shoal Circle Chamber Orchestra",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880844/IMG_3970_cw9xeo.png",
    program: placeholderProgram,
  },
  {
    year: "2022",
    title: "Shoal Circle Chamber Orchestra",
    subtitle: "A winter concert",
    image:
      "https://res.cloudinary.com/dhjttb9y2/image/upload/v1769880901/Program-Invite_ekfqcz.jpg",
    program: placeholderProgram,
  },
];

const PastConcertsShowcase = () => {
  const rulesRef = useRef(null);
  const [rulesInView, setRulesInView] = useState(false);

  const checkRulesInView = useCallback(() => {
    if (rulesInView || typeof window === "undefined") return;
    const el = rulesRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const threshold = window.innerHeight * 1.2;
    if (rect.top < threshold) {
      setRulesInView(true);
    }
  }, [rulesInView]);

  useScrollManager(checkRulesInView, { runOnInit: true });

  useEffect(() => {
    const el = rulesRef.current;
    if (!el) return;

    const checkInitial = () => {
      if (rulesInView) return;
      const rect = el.getBoundingClientRect();
      const threshold = window.innerHeight * 1.2;
      if (rect.top < threshold) {
        setRulesInView(true);
      }
    };

    const raf = requestAnimationFrame(checkInitial);
    return () => cancelAnimationFrame(raf);
  }, [rulesInView]);

  return (
    <>
      <section id="past-concerts" className="section past-concerts">
        <div className="past-concerts__media">
          <div className="layout__container past-concerts__content">
            <div className="past-concerts__title section-title section-title--past">
              <FeatureHeading lines={["PAST", "CONCERTS"]} />
            </div>
            <div
              ref={rulesRef}
              className={`past-concerts__rules${rulesInView ? " past-concerts__rules--in-view" : ""}`}
              aria-hidden="true"
            >
              <span className="past-concerts__rule" />
              <span className="past-concerts__rule" />
              <span className="past-concerts__rule" />
            </div>
          </div>
        </div>
        <div className="past-concerts__posters">
          {posters.map((poster) => (
            <ConcertPoster
              key={poster.title}
              year={poster.year}
              title={poster.title}
              image={poster.image}
              program={poster.program}
            />
          ))}
        </div>
      </section>
      <PastConcertsFooter />
    </>
  );
};

export default PastConcertsShowcase;
