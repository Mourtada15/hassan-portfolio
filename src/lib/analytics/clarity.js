let clarityConfig = {
  initialized: false,
  projectId: "",
};

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function ensureClarityStub() {
  if (typeof window.clarity === "function") {
    return;
  }

  window.clarity = function clarity(...args) {
    (window.clarity.q = window.clarity.q || []).push(args);
  };
}

function injectClarityScript(projectId) {
  if (document.querySelector(`[data-analytics-clarity="${projectId}"]`)) {
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  script.dataset.analyticsClarity = projectId;
  document.head.appendChild(script);
}

function normalizeTagValue(value) {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  const normalizedValue = Array.isArray(value) ? value.join(", ") : String(value);
  return normalizedValue.slice(0, 120);
}

export function initClarity({ projectId }) {
  if (!isBrowser() || !projectId || clarityConfig.initialized) {
    return false;
  }

  clarityConfig = {
    initialized: true,
    projectId,
  };

  ensureClarityStub();
  injectClarityScript(projectId);
  return true;
}

export function trackClarityEvent(eventName) {
  if (
    !isBrowser() ||
    !clarityConfig.initialized ||
    typeof window.clarity !== "function"
  ) {
    return;
  }

  window.clarity("event", eventName);
}

export function setClarityTags(tags = {}) {
  if (
    !isBrowser() ||
    !clarityConfig.initialized ||
    typeof window.clarity !== "function"
  ) {
    return;
  }

  Object.entries(tags).forEach(([key, value]) => {
    const normalizedValue = normalizeTagValue(value);

    if (normalizedValue !== null) {
      window.clarity("set", key, normalizedValue);
    }
  });
}
