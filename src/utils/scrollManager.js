const subscribers = new Set();
let ticking = false;

const notifySubscribers = () => {
  ticking = false;
  subscribers.forEach((callback) => {
    callback();
  });
};

const requestTick = () => {
  if (ticking || typeof window === "undefined") {
    return;
  }

  ticking = true;
  window.requestAnimationFrame(notifySubscribers);
};

const addListeners = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
};

const removeListeners = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.removeEventListener("scroll", requestTick);
  window.removeEventListener("resize", requestTick);
};

export const scrollManager = {
  subscribe(callback) {
    if (!subscribers.has(callback)) {
      subscribers.add(callback);
    }

    if (subscribers.size === 1) {
      addListeners();
    }
  },
  unsubscribe(callback) {
    if (subscribers.has(callback)) {
      subscribers.delete(callback);
    }

    if (subscribers.size === 0) {
      removeListeners();
    }
  },
  requestTick,
};
