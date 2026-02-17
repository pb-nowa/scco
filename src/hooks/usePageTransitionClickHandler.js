import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageTransition } from "../context/PageTransitionContext";

function getInternalPath(href) {
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return null;
  }
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    return url.pathname + url.hash;
  } catch {
    return null;
  }
}

export function usePageTransitionClickHandler() {
  const location = useLocation();
  const { navigateWithTransition } = usePageTransition();

  const handleClick = useCallback(
    (e) => {
      const anchor = e.target.closest("a[href]");
      if (!anchor) return;

      const path = getInternalPath(anchor.getAttribute("href"));
      if (!path) return;

      const [targetPathname] = path.split("#");
      const targetPathnameNorm = (targetPathname || "/").replace(/\/$/, "") || "/";
      const currentPathnameNorm = (location.pathname || "/").replace(/\/$/, "") || "/";

      if (targetPathnameNorm === currentPathnameNorm) return;

      e.preventDefault();
      navigateWithTransition(path);
    },
    [location.pathname, location.hash, navigateWithTransition]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClick]);
}
