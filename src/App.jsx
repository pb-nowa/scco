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
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true">
              SC
            </span>
            <div>
              <p className="logo-title">Shoal Circle</p>
              <p className="logo-subtitle">Chamber Orchestra</p>
            </div>
          </div>
          <nav className="site-nav" aria-label="Primary">
            <a href="#concerts">Concerts</a>
            <a href="#past-concerts">Past Concerts</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section">
          <div className="container hero-grid">
            <div className="stack">
              <p className="eyebrow">Shoal Circle Chamber Orchestra</p>
              <h1>
                Intimate performances, expansive sound, and a modern approach
                to chamber music.
              </h1>
              <p className="lead">
                We bring artists and audiences together in spaces that feel
                close, thoughtful, and alive. Discover curated programs,
                emerging voices, and timeless masterpieces.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#concerts">
                  View upcoming concerts
                </a>
                <a className="btn btn-secondary" href="#past-concerts">
                  Explore past programs
                </a>
              </div>
            </div>
            <div className="hero-card stack">
              <p className="eyebrow">Season 2026</p>
              <h2 className="hero-card-title">An earth-toned season</h2>
              <p>
                Expect calm, immersive performances with a focus on color,
                texture, and collaborative artistry.
              </p>
              <ul className="key-list">
                <li>Three signature concerts</li>
                <li>Guest composers and soloists</li>
                <li>Community-led conversations</li>
              </ul>
            </div>
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

      <footer className="site-footer">
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
