import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FirstLoadContext = createContext(null);

export function FirstLoadProvider({ children }) {
  const { pathname } = useLocation();
  const [hasNavigatedAway, setHasNavigatedAway] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setHasNavigatedAway(true);
    }
  }, [pathname]);

  const isFirstLoad = !hasNavigatedAway;
  const markVisitComplete = () => setHasNavigatedAway(true);

  return (
    <FirstLoadContext.Provider value={{ isFirstLoad, markVisitComplete }}>
      {children}
    </FirstLoadContext.Provider>
  );
}

export function useFirstLoad() {
  const ctx = useContext(FirstLoadContext);
  return ctx ?? { isFirstLoad: false, markVisitComplete: () => {} };
}
