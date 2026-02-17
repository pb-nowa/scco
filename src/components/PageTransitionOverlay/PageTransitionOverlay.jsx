import { useEffect } from "react";
import "./PageTransitionOverlay.css";

const REVEAL_START_MS = 400;
const TOTAL_DURATION_MS = 800;

const PageTransitionOverlay = ({ isActive, onNavigate, onComplete }) => {
  useEffect(() => {
    if (!isActive) return;

    const navTimer = setTimeout(onNavigate, REVEAL_START_MS);
    const completeTimer = setTimeout(onComplete, TOTAL_DURATION_MS);
    return () => {
      clearTimeout(navTimer);
      clearTimeout(completeTimer);
    };
  }, [isActive, onNavigate, onComplete]);

  if (!isActive) return null;

  return (
    <div
      className="page-transition"
      role="presentation"
      aria-hidden="true"
    >
      <div className="page-transition__layer page-transition__layer--pink" />
      <div className="page-transition__layer page-transition__layer--blue" />
    </div>
  );
};

export default PageTransitionOverlay;
