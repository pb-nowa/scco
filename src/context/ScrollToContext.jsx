import { createContext, useContext } from "react";

const ScrollToContext = createContext(null);

export function useScrollTo() {
  return useContext(ScrollToContext);
}

export function ScrollToProvider({ scrollTo, children }) {
  return (
    <ScrollToContext.Provider value={scrollTo}>
      {children}
    </ScrollToContext.Provider>
  );
}
