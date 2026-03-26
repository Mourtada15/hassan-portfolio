let gaConfig = {
  initialized: false,
  measurementId: "",
  debug: false,
};

function buildGAParams(params = {}) {
  const nextParams = {
    ...params,
    send_to: gaConfig.measurementId,
  };

  if (!gaConfig.debug) {
    return nextParams;
  }

  return {
    ...nextParams,
    debug_mode: true,
  };
}

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function ensureGtagStub() {
  if (typeof window.gtag === "function") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args) {
    window.dataLayer.push(args);
  };
}

function injectGtagScript(measurementId) {
  if (
    document.querySelector(`[data-analytics-ga="${measurementId}"]`)
  ) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.dataset.analyticsGa = measurementId;

  if (import.meta.env.DEV) {
    script.addEventListener("load", () => {
      console.info("[analytics] GA script loaded", { measurementId });
    });

    script.addEventListener("error", () => {
      console.warn("[analytics] Failed to load GA script", {
        measurementId,
        scriptSrc: script.src,
      });
    });
  }

  document.head.appendChild(script);
}

export function initGA({ measurementId, debug = false }) {
  if (!isBrowser() || !measurementId || gaConfig.initialized) {
    return false;
  }

  gaConfig = {
    initialized: true,
    measurementId,
    debug,
  };

  ensureGtagStub();
  injectGtagScript(measurementId);
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
    debug_mode: debug,
  });

  return true;
}

export function trackGAEvent(eventName, params = {}) {
  if (!isBrowser() || !gaConfig.initialized || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, buildGAParams(params));
}

export function trackGAPageView(params = {}) {
  trackGAEvent("page_view", params);
}
