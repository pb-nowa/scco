/**
 * Bridge for scroll position when Lenis smooth scroll is active.
 * Lenis uses virtual scroll (transforms), so window.scrollY does not update.
 * This module provides getScrollY() that returns the correct value in both modes.
 */

let lenisScrollY = 0;
let useLenisSource = false;

export function getScrollY() {
  if (typeof window === "undefined") {
    return 0;
  }
  if (useLenisSource) {
    return lenisScrollY;
  }
  return window.scrollY ?? window.pageYOffset ?? 0;
}

export function setScrollYFromLenis(scrollY) {
  lenisScrollY = scrollY;
  useLenisSource = true;
}

export function clearLenisSource() {
  useLenisSource = false;
}
