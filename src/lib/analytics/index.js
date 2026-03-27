import {
  EVENT_NAMES,
  getPrimaryInterestFromEvent,
  isHighIntentEvent,
} from "./events";
import { initGA, trackGAEvent, trackGAPageView } from "./ga";
import {
  initClarity,
  setClarityTags as applyClarityTags,
  trackClarityEvent,
} from "./clarity";
import {
  getAttributionContext,
  getCurrentPagePath,
  getDestinationType,
  sanitizeLinkUrl,
} from "./source";
import {
  getSessionContext,
  initSession,
  markHighIntentSession,
  setPrimaryInterest as setSessionPrimaryInterest,
} from "./session";

let analyticsInitialized = false;
let pageLoadStartedAt =
  typeof performance !== "undefined" && typeof performance.now === "function"
    ? performance.now()
    : Date.now();
let firstInteractionTracked = false;

const FIRST_INTERACTION_EVENTS = new Set([
  EVENT_NAMES.NAV_CLICK,
  EVENT_NAMES.MOBILE_MENU_ITEM_CLICK,
  EVENT_NAMES.SOCIAL_CLICK,
  EVENT_NAMES.CONTACT_ACTION,
  EVENT_NAMES.RESUME_DOWNLOAD,
  EVENT_NAMES.PROJECT_CLICK,
  EVENT_NAMES.PROJECT_DEMO_CLICK,
  EVENT_NAMES.PROJECT_REPO_CLICK,
]);

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function getCurrentTimestamp() {
  return typeof performance !== "undefined" && typeof performance.now === "function"
    ? performance.now()
    : Date.now();
}

function parseBoolean(value) {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value !== "string") {
    return false;
  }

  return ["1", "true", "yes", "on"].includes(value.toLowerCase());
}

const analyticsDebugEnabled = parseBoolean(
  import.meta.env.VITE_ANALYTICS_DEBUG || "false",
);

const analyticsConfig = {
  enabled: parseBoolean(import.meta.env.VITE_ENABLE_ANALYTICS),
  gaMeasurementId: import.meta.env.VITE_GA_MEASUREMENT_ID || "",
  clarityProjectId: import.meta.env.VITE_CLARITY_PROJECT_ID || "",
  debug: import.meta.env.DEV && analyticsDebugEnabled,
  consoleDebug: import.meta.env.DEV && analyticsDebugEnabled,
  portfolioVersion: import.meta.env.VITE_PORTFOLIO_VERSION || "current",
};

function debugLog(label, payload) {
  if (!analyticsConfig.consoleDebug) {
    return;
  }

  console.info(`[analytics] ${label}`, payload);
}

function warnLog(message, payload) {
  if (!import.meta.env.DEV) {
    return;
  }

  console.warn(`[analytics] ${message}`, payload);
}

function normalizeParamValue(value) {
  if (value === null || value === undefined || value === "") {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  if (typeof value === "number") {
    return Number.isFinite(value) ? value : undefined;
  }

  return String(value);
}

function normalizeParams(params = {}) {
  return Object.entries(params).reduce((accumulator, [key, value]) => {
    const normalizedValue = normalizeParamValue(value);

    if (normalizedValue !== undefined) {
      accumulator[key] = normalizedValue;
    }

    return accumulator;
  }, {});
}

function ensureAnalyticsReady() {
  if (!analyticsConfig.enabled || !isBrowser()) {
    return false;
  }

  if (!analyticsInitialized) {
    initAnalytics();
  }

  return analyticsInitialized;
}

function buildPayload(params = {}) {
  const attributionContext = getAttributionContext();
  const sessionContext = getSessionContext();

  return normalizeParams({
    page_path: params.page_path || getCurrentPagePath(),
    page_title: params.page_title || document.title,
    ...attributionContext,
    ...sessionContext,
    ...params,
  });
}

function updateClarityTagsForEvent(eventName, payload) {
  const nextTags = {};
  const primaryInterest = getPrimaryInterestFromEvent(eventName, payload);

  if (primaryInterest) {
    setSessionPrimaryInterest(primaryInterest);
    nextTags.primary_interest = primaryInterest;
  }

  if (payload.project_name) {
    nextTags.project_clicked = payload.project_name;
  }

  if (payload.cta_name) {
    nextTags.cta_clicked = payload.cta_name;
  }

  if (isHighIntentEvent(eventName, payload)) {
    markHighIntentSession();
    nextTags.high_intent_session = true;
  }

  if (Object.keys(nextTags).length > 0) {
    applyClarityTags(nextTags);
  }
}

function buildLinkParams({
  actionType,
  ctaLocation,
  linkLabel,
  linkUrl,
  destinationType,
  ...rest
}) {
  return {
    action_type: actionType,
    cta_location: ctaLocation,
    link_label: linkLabel,
    link_url: sanitizeLinkUrl(linkUrl),
    destination_type: destinationType || getDestinationType(linkUrl),
    ...rest,
  };
}

function trackFirstInteractionTime(originatingEventName, payload) {
  if (
    firstInteractionTracked ||
    !FIRST_INTERACTION_EVENTS.has(originatingEventName)
  ) {
    return;
  }

  firstInteractionTracked = true;

  const firstInteractionPayload = normalizeParams({
    seconds_to_first_interaction: Number(
      (Math.max(getCurrentTimestamp() - pageLoadStartedAt, 0) / 1000).toFixed(2),
    ),
    interaction_event_name: originatingEventName,
    page_path: payload.page_path,
    source_category: payload.source_category,
    utm_source: payload.utm_source,
    utm_medium: payload.utm_medium,
    utm_campaign: payload.utm_campaign,
  });

  trackGAEvent(EVENT_NAMES.FIRST_INTERACTION_TIME, firstInteractionPayload);
  trackClarityEvent(EVENT_NAMES.FIRST_INTERACTION_TIME);
  debugLog(EVENT_NAMES.FIRST_INTERACTION_TIME, firstInteractionPayload);
}

export function isAnalyticsEnabled() {
  return analyticsConfig.enabled;
}

export function initAnalytics() {
  if (!analyticsConfig.enabled || !isBrowser() || analyticsInitialized) {
    return analyticsInitialized;
  }

  const attributionContext = getAttributionContext();
  const sessionContext = initSession(attributionContext.source_category);

  const gaInitialized = initGA({
    measurementId: analyticsConfig.gaMeasurementId,
    debug: analyticsConfig.debug,
  });
  const clarityInitialized = initClarity({
    projectId: analyticsConfig.clarityProjectId,
  });

  analyticsInitialized = gaInitialized || clarityInitialized;

  if (!analyticsInitialized) {
    warnLog("Analytics is enabled, but no providers initialized.", {
      gaMeasurementIdPresent: Boolean(analyticsConfig.gaMeasurementId),
      clarityProjectIdPresent: Boolean(analyticsConfig.clarityProjectId),
    });

    return analyticsInitialized;
  }

  if (!gaInitialized) {
    warnLog("GA did not initialize.", {
      gaMeasurementIdPresent: Boolean(analyticsConfig.gaMeasurementId),
      gaMeasurementId: analyticsConfig.gaMeasurementId || null,
    });
  }

  if (!clarityInitialized) {
    warnLog("Clarity did not initialize.", {
      clarityProjectIdPresent: Boolean(analyticsConfig.clarityProjectId),
      clarityProjectId: analyticsConfig.clarityProjectId || null,
    });
  }

  applyClarityTags({
    visitor_source: attributionContext.source_category,
    landing_page: attributionContext.landing_page,
    landing_page_type: attributionContext.landing_page_type,
    portfolio_version: analyticsConfig.portfolioVersion,
    primary_interest: sessionContext.primary_interest,
    high_intent_session: sessionContext.high_intent_session,
  });

  debugLog("init", {
    analytics_enabled: analyticsConfig.enabled,
    ga_enabled: gaInitialized,
    clarity_enabled: clarityInitialized,
    ...attributionContext,
  });

  return analyticsInitialized;
}

export function trackPageView(params = {}) {
  if (!ensureAnalyticsReady()) {
    return;
  }

  const payload = buildPayload({
    page_title: document.title,
    ...params,
  });

  trackGAPageView(payload);
  applyClarityTags({
    visitor_source: payload.source_category,
    landing_page: payload.landing_page,
    landing_page_type: payload.landing_page_type,
  });
  trackClarityEvent(EVENT_NAMES.PAGE_VIEW);
  debugLog(EVENT_NAMES.PAGE_VIEW, payload);
}

export function trackEvent(eventName, params = {}) {
  if (!eventName || !ensureAnalyticsReady()) {
    return;
  }

  const payload = buildPayload(params);

  trackGAEvent(eventName, payload);
  trackFirstInteractionTime(eventName, payload);
  trackClarityEvent(eventName);
  updateClarityTagsForEvent(eventName, payload);
  debugLog(eventName, payload);
}

export function setClarityTags(tags = {}) {
  if (!ensureAnalyticsReady()) {
    return;
  }

  applyClarityTags(tags);
}

export { getAttributionContext, getDestinationType, sanitizeLinkUrl };

export function trackCTA({ eventName, ...params }) {
  if (!eventName) {
    return;
  }

  trackEvent(eventName, params);
}

export function trackNavClick(params = {}) {
  trackEvent(EVENT_NAMES.NAV_CLICK, params);
}

export function trackMobileMenuOpen(params = {}) {
  trackEvent(EVENT_NAMES.MOBILE_MENU_OPEN, params);
}

export function trackMobileMenuItemClick(params = {}) {
  trackEvent(EVENT_NAMES.MOBILE_MENU_ITEM_CLICK, params);
}

export function trackSocialClick(params = {}) {
  const payload = buildLinkParams(params);

  trackEvent(EVENT_NAMES.SOCIAL_CLICK, payload);
}

export function trackContactAction(params = {}) {
  const payload = buildLinkParams(params);

  trackEvent(EVENT_NAMES.CONTACT_ACTION, payload);
}

export function trackResumeDownload(params = {}) {
  trackEvent(EVENT_NAMES.RESUME_DOWNLOAD, params);
}

export function trackSectionView(params = {}) {
  trackEvent(EVENT_NAMES.SECTION_VIEW, params);
}

export function trackProjectCardView(params = {}) {
  trackEvent(EVENT_NAMES.PROJECT_CARD_VIEW, params);
}

export function trackProjectClick(params = {}) {
  trackEvent(EVENT_NAMES.PROJECT_CLICK, params);
}

export function trackProjectDemoClick(params = {}) {
  trackEvent(EVENT_NAMES.PROJECT_DEMO_CLICK, params);
}

export function trackProjectRepoClick(params = {}) {
  trackEvent(EVENT_NAMES.PROJECT_REPO_CLICK, params);
}
