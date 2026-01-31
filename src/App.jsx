import LinkCta from "./LinkCta";
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

const pastConcerts = [
  {
    title: "Spring Nocturnes",
    date: "April 2026",
    highlight: "Mozart and Florence Price in dialogue.",
  },
  {
    title: "New Horizons",
    date: "February 2026",
    highlight: "Contemporary chamber pieces and world premieres.",
  },
  {
    title: "The Art of the Trio",
    date: "November 2025",
    highlight: "A focused program for piano, violin, and cello.",
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
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#concerts">Upcoming</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="about">
          <div className="container hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">
                <span>SHOAL</span>
                <span>CIRCLE</span>
                <span>CHAMBER</span>
                <span>ORCHESTRA</span>
              </h1>
              <p className="hero-location">SAN MATEO, CA</p>
              <p className="hero-tagline">Find your inner musician.</p>
            </div>
            <div className="hero-right">
              <div className="hero-upcoming">
                <p className="hero-label">Upcoming concert</p>
                <div className="hero-event">
                  <span>Palo Alto, CA</span>
                  <span>December 2026</span>
                </div>
              </div>
              <LinkCta href="#concerts">Get concert updates</LinkCta>
            </div>
            <div className="hero-circle" aria-hidden="true" />
          </div>
        </section>

        <section className="section feature-section" id="music">
          <div className="container feature-grid">
            <div className="feature-copy">
              <h2 className="feature-heading">
                <span>LET'S</span>
                <span>MAKE</span>
                <span>SOME</span>
                <span>MUSIC</span>
              </h2>
            </div>
            <div className="feature-visual">
              <div className="feature-bg" aria-hidden="true" />
              <article className="feature-card">
                <p className="feature-location">PALO ALTO, CA</p>
                <p className="feature-date">DECEMBER 2026</p>
                <p className="feature-venue">PALO ALTO ARTS CENTER</p>
                <p className="feature-details">
                  The Shoal Circle Chamber Orchestra will be presenting their
                  2026 concert at the Palo Alto Arts Center in Palo Alto,
                  California.
                </p>
                <p className="feature-details">
                  Program and concert title are TBD. Details to RSVP will be
                  released in October 2026.
                </p>
                <a className="feature-cta" href="#concerts">
                  Get concert updates
                </a>
                <div className="feature-quotes">
                  <div>
                    <p>“Wow this sounds like music”</p>
                    <p className="feature-quote-author">- Preston's mom</p>
                  </div>
                  <div>
                    <p>“The food is really good”</p>
                    <p className="feature-quote-author">
                      - anonymous concert attendee
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <img
              className="feature-photo"
              src="https://res.cloudinary.com/dhjttb9y2/image/upload/v1769820664/IMG_1376_cyswwz.jpg"
              alt="Shoal Circle Chamber Orchestra ensemble"
            />
          </div>
        </section>

        <section id="concerts" className="section">
          <div className="container stack-lg">
            <div>
              <p className="eyebrow">Concerts</p>
              <h2 className="section-title">Upcoming season highlights</h2>
              <p className="section-lead">
                Placeholder dates and venues below. Replace these with your
                official season announcement.
              </p>
            </div>
            <div className="grid">
              {upcomingConcerts.map((concert) => (
                <article className="card" key={concert.title}>
                  <p className="card-date">{concert.date}</p>
                  <h3>{concert.title}</h3>
                  <p className="card-venue">{concert.venue}</p>
                  <p>{concert.details}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="past-concerts" className="section section-muted">
          <div className="container stack-lg">
            <div>
              <p className="eyebrow">Past Concerts</p>
              <h2 className="section-title">Recent performances</h2>
              <p className="section-lead">
                A snapshot of programs from previous seasons. Add links to
                recordings or galleries as they become available.
              </p>
            </div>
            <div className="grid grid-tight">
              {pastConcerts.map((concert) => (
                <article className="card card-compact" key={concert.title}>
                  <p className="card-date">{concert.date}</p>
                  <h3>{concert.title}</h3>
                  <p className="card-venue">{concert.highlight}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <p className="footer-title">Shoal Circle Chamber Orchestra</p>
            <p className="footer-text">
              A chamber orchestra centered on connection, clarity, and
              contemporary programming.
            </p>
          </div>
          <div className="footer-block">
            <p className="footer-label">Get in touch</p>
            <a href="mailto:info@shoalcirclechamberorchestra.org">
              info@shoalcirclechamberorchestra.org
            </a>
          </div>
          <div className="footer-block">
            <p className="footer-label">Follow along</p>
            <a href="#">Instagram (placeholder)</a>
            <a href="#">YouTube (placeholder)</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
