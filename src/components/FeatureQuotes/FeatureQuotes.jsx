import { useEffect, useMemo, useState } from "react";
import "./FeatureQuotes.css";

const FeatureQuotes = () => {
  const slides = useMemo(
    () => [
      [
        {
          text: "“Wow this sounds like music”",
          author: "- Preston's mom",
        },
        {
          text: "“The food is really good”",
          author: "- anonymous concert attendee",
        },
      ],
      [
        {
          text: "“Every seat feels close to the music”",
          author: "- first-time patron",
        },
        {
          text: "“Beautiful sound and warm hospitality”",
          author: "- community supporter",
        },
      ],
    ],
    []
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    if (prefersReducedMotion.matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="feature__quotes">
      <div
        className="feature__quotes-track"
        style={{ transform: `translateX(-${activeSlide * 50}%)` }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            className={`feature__quotes-slide${
              slideIndex === activeSlide ? " feature__quotes-slide--active" : ""
            }`}
            key={slideIndex}
            aria-hidden={slideIndex !== activeSlide}
          >
            {slide.map((quote) => (
              <div className="feature__quote" key={`${slideIndex}-${quote.text}`}>
                <p>{quote.text}</p>
                <p className="feature__quote-author">{quote.author}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div
        className="feature__quotes-dots"
        role="tablist"
        aria-label="Quote carousel"
      >
        {slides.map((_, index) => (
          <button
            className={`feature__quotes-dot${
              index === activeSlide ? " feature__quotes-dot--active" : ""
            }`}
            type="button"
            key={index}
            onClick={() => setActiveSlide(index)}
            aria-pressed={index === activeSlide}
            aria-label={`Show quote set ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureQuotes;
