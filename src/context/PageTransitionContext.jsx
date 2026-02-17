import { createContext, useCallback, useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransitionOverlay from "../components/PageTransitionOverlay/PageTransitionOverlay";

const PageTransitionContext = createContext(null);

export function PageTransitionProvider({ children }) {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingRef = useRef(null);

  const navigateWithTransition = useCallback(
    (to) => {
      if (isTransitioning) return;
      pendingRef.current = to;
      setIsTransitioning(true);
    },
    [isTransitioning]
  );

  const handleNavigate = useCallback(() => {
    if (pendingRef.current) {
      navigate(pendingRef.current);
      pendingRef.current = null;
    }
  }, [navigate]);

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
  }, []);

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition }}>
      {children}
      <PageTransitionOverlay
        isActive={isTransitioning}
        onNavigate={handleNavigate}
        onComplete={handleTransitionComplete}
      />
    </PageTransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within PageTransitionProvider");
  }
  return ctx;
}
