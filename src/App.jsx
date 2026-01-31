import LinkCta from "./LinkCta";
import FeatureCard from "./FeatureCard";
import PastConcertsShowcase from "./PastConcertsShowcase";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const upcomingConcerts = [
  {
    title: "Opening Night: Echoes of the Shore",
    date: "September 14, 2026",
    venue: "Shoal Circle Hall",
    details: "String serenades and modern works inspired by coastal light.",
  },
  {
    title: "Autumn Chamber Voices",
    date: "October 26, 2026",
    venue: "Ridgeway Arts Center",
    details: "A warm program of winds and strings with guest soloists.",
  },
  {
    title: "Winter Solstice Portraits",
    date: "December 12, 2026",
    venue: "North Point Chapel",
    details: "Intimate chamber works by candlelight.",
  },
];

function App() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dhjttb9y2' } });
  const img = cld
    .image('IMG_1376_cyswwz')
    .format('auto')
    .quality('auto')
    .resize(auto().gravity(autoGravity()).width(500).height(500));

  return (
    <div className="layout">
      <header className="site-header">
        <div className="layout__container site-header__inner">
          <nav className="site-header__nav" aria-label="Primary">
            <a className="site-header__nav-link" href="#about">About</a>
            <a className="site-header__nav-link" href="#concerts">Upcoming</a>
            <a className="site-header__nav-link" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="about">
          <div className="layout__container hero__grid">
            <div className="hero__left">
              <h1 className="hero__title">
                <span>SHOAL</span>
                <span>CIRCLE</span>
                <span>CHAMBER</span>
                <span>ORCHESTRA</span>
              </h1>
              <p className="hero__location">SAN MATEO, CA</p>
              <p className="hero__tagline">Find your inner musician.</p>
            </div>
            <div className="hero__right">
              <div className="hero__upcoming">
                <p className="hero__label">Upcoming concert</p>
                <div className="hero__event">
                  <span>Palo Alto, CA</span>
                  <span>December 2026</span>
                </div>
              </div>
              <LinkCta href="#concerts">Get concert updates</LinkCta>
            </div>
            <div className="hero__circle" aria-hidden="true" />
          </div>
        </section>

        <section className="section feature" id="music">
          <img
            className="feature__bg"
            src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820597/IMG_7130_mpifsr.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="feature__heading-wrap">
            <h2 className="feature__heading">
              <span className="feature__heading-row feature__heading-row--wide">
                <span>LET'S</span>
                <span>MAKE</span>
              </span>
              <span className="feature__heading-row">SOME</span>
              <span className="feature__heading-row">MUSIC</span>
            </h2>
          </div>
          <div className="layout__container feature__grid">
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
            <img
              className="feature__photo"
              src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820664/IMG_1376_cyswwz.jpg"
              alt="Shoal Circle Chamber Orchestra ensemble"
            />
          </div>
        </section>

        <section className="section recording">
          <div className="layout__container recording__container">
            <div className="recording__content">
              <p className="recording__title">Featured recording</p>
              <div className="recording__frame">
                <div className="recording__placeholder">
                  SoundCloud embed placeholder
                </div>
              </div>
            </div>
          </div>
        </section>

        <PastConcertsShowcase />
      </main>

      <footer className="site-footer" id="contact">
        <div className="layout__container site-footer__top">
          <div className="site-footer__intro">
            <h2 className="site-footer__heading">Let's make some music!</h2>
            <p className="site-footer__message">
              We'd love to hear from you! Reach out for inquiries about joining
              the orchestra or future concerts.
            </p>
            <LinkCta
              href="mailto:info@shoalcirclechamberorchestra.org"
              className="cta--footer"
            >
              CONTACT US
            </LinkCta>
          </div>
        </div>
        <div className="layout__container site-footer__bottom">
          <div className="site-footer__social">
            <span className="site-footer__social-label">
              Follow us on social media!
            </span>
            <a className="site-footer__link" href="#">
              Instagram
            </a>
            <span className="site-footer__separator" aria-hidden="true">
              |
            </span>
            <a className="site-footer__link" href="#">
              YouTube
            </a>
            <span className="site-footer__separator" aria-hidden="true">
              |
            </span>
            <a className="site-footer__link" href="#">
              SoundCloud
            </a>
          </div>
          <nav className="site-footer__nav" aria-label="Footer">
            <a className="site-footer__nav-link" href="#about">
              About
            </a>
            <a className="site-footer__nav-link" href="#concerts">
              Upcoming
            </a>
            <a className="site-footer__nav-link" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
