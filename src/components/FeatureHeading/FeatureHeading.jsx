import { useCallback, useEffect, useRef, useState } from "react";
import useScrollManager from "../../hooks/useScrollManager";

const PARALLAX_OFFSET = 100;

const LINE_DISTANCE_MULTIPLIER_UP = 0.25;
const LINE_DISTANCE_MULTIPLIER_DOWN = -0.5;

const DEFAULT_LINES = ["LET'S MAKE", "SOME", "MUSIC"];

const FeatureHeading = ({ lines = DEFAULT_LINES }) => {
  const headingRef = useRef(null);
  const lineCount = lines.length;
  const middleIndex = Math.floor(lineCount / 2);
  const [lineOffsets, setLineOffsets] = useState([]);

  const updatePosition = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }

    const heading = headingRef.current;
    if (!heading) {
      return;
    }

    const rect = heading.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    const start = viewportHeight;
    const end = viewportHeight * 0.45;
    const progress =
      start === end
        ? 1
        : Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

    const baseOffset = PARALLAX_OFFSET * (1 - progress);
    setLineOffsets(
      Array.from({ length: lineCount }, (_, index) => {
        const direction = index <= middleIndex ? -1 : 1;
        const distance = Math.abs(index - middleIndex);
        const multiplier =
          direction < 0
            ? LINE_DISTANCE_MULTIPLIER_UP
            : LINE_DISTANCE_MULTIPLIER_DOWN;
        const magnitude = baseOffset * (1 + distance * multiplier);
        return direction * magnitude;
      })
    );
  }, []);

  const prefersReducedMotion = useScrollManager(updatePosition);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLineOffsets(Array.from({ length: lineCount }, () => 0));
      return;
    }

    setLineOffsets(
      Array.from({ length: lineCount }, (_, index) => {
        const direction = index <= middleIndex ? -1 : 1;
        const distance = Math.abs(index - middleIndex);
        const multiplier =
          direction < 0
            ? LINE_DISTANCE_MULTIPLIER_UP
            : LINE_DISTANCE_MULTIPLIER_DOWN;
        const magnitude = PARALLAX_OFFSET * (1 + distance * multiplier);
        return direction * magnitude;
      })
    );
  }, [lineCount, middleIndex, prefersReducedMotion]);

  return (
    <div className="feature__heading-wrap" ref={headingRef}>
      <h2 className="feature__heading section-title section-title--feature">
        {lines.map((line, index) => (
          <span
            key={`${line}-${index}`}
            className={`feature__heading-row${
              index === 0 ? " feature__heading-row--wide" : ""
            }`}
            style={{ transform: `translate3d(0, ${lineOffsets[index]}px, 0)` }}
          >
            {line}
          </span>
        ))}
      </h2>
    </div>
  );
};

export default FeatureHeading;
