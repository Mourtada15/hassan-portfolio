const STORAGE_KEYS = {
  attribution: "hm_portfolio_analytics_attribution",
  utm: "hm_portfolio_analytics_utm",
};

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
];

const LINKEDIN_MATCHERS = ["linkedin", "lnkd"];
const GITHUB_MATCHERS = ["github"];
const GOOGLE_MATCHERS = ["google"];
const JOB_PLATFORM_MATCHERS = [
  "indeed",
  "glassdoor",
  "greenhouse",
  "greenhouse-job",
  "lever",
  "workable",
  "ashby",
  "wellfound",
  "ycombinator",
  "job",
  "jobs",
];
const SOCIAL_MATCHERS = [
  "x.com",
  "twitter",
  "facebook",
  "instagram",
  "threads",
  "reddit",
  "youtube",
  "tiktok",
  "social",
];

function isBrowser() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function readSessionStorage(key, fallback) {
  if (!isBrowser()) {
    return fallback;
  }

  try {
    const value = window.sessionStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeSessionStorage(key, value) {
  if (!isBrowser()) {
    return;
  }

  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage failures so analytics never affects the site.
  }
}

function cleanValue(value) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function parseUtmParams(search = "") {
  const params = new URLSearchParams(search);

  return UTM_KEYS.reduce((accumulator, key) => {
    const value = cleanValue(params.get(key));

    if (value) {
      accumulator[key] = value;
    }

    return accumulator;
  }, {});
}

function hasUtmValues(utmParams = {}) {
  return UTM_KEYS.some((key) => Boolean(utmParams[key]));
}

function getReferrerHost() {
  if (!isBrowser() || !document.referrer) {
    return "";
  }

  try {
    return new URL(document.referrer).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function matchesCategory(value, matchers) {
  return matchers.some((matcher) => value.includes(matcher));
}

function classifyKnownSource(value) {
  const normalizedValue = cleanValue(value).toLowerCase();

  if (!normalizedValue) {
    return null;
  }

  if (matchesCategory(normalizedValue, LINKEDIN_MATCHERS)) {
    return "linkedin";
  }

  if (matchesCategory(normalizedValue, GITHUB_MATCHERS)) {
    return "github";
  }

  if (matchesCategory(normalizedValue, GOOGLE_MATCHERS)) {
    return "google";
  }

  if (matchesCategory(normalizedValue, JOB_PLATFORM_MATCHERS)) {
    return "job_platform";
  }

  if (matchesCategory(normalizedValue, SOCIAL_MATCHERS)) {
    return "social";
  }

  return null;
}

function classifySource({ utmSource, utmMedium, referrerHost }) {
  const classifiedUtmSource = classifyKnownSource(utmSource);

  if (classifiedUtmSource) {
    return classifiedUtmSource;
  }

  if (cleanValue(utmMedium).toLowerCase() === "social") {
    return "social";
  }

  const classifiedReferrer = classifyKnownSource(referrerHost);

  if (classifiedReferrer) {
    return classifiedReferrer;
  }

  if (!referrerHost && !utmSource && !utmMedium) {
    return "direct";
  }

  if (referrerHost) {
    return "referral";
  }

  return "unknown";
}

function getLandingPageType(locationLike = window.location) {
  if (locationLike.hash) {
    return "section_deep_link";
  }

  if (locationLike.pathname === "/") {
    return "homepage";
  }

  return "route";
}

function buildCurrentAttribution(locationLike = window.location) {
  const utmParams = parseUtmParams(locationLike.search);
  const referrerHost = getReferrerHost();

  return {
    source_category: classifySource({
      utmSource: utmParams.utm_source,
      utmMedium: utmParams.utm_medium,
      referrerHost,
    }),
    landing_page: `${locationLike.pathname}${locationLike.search}${locationLike.hash}`,
    landing_page_type: getLandingPageType(locationLike),
    referrer_host: referrerHost,
    ...utmParams,
  };
}

export function getCurrentPagePath(locationLike = window.location) {
  if (!isBrowser()) {
    return "/";
  }

  return `${locationLike.pathname}${locationLike.search}`;
}

export function getAttributionContext(locationLike = window.location) {
  if (!isBrowser()) {
    return {
      source_category: "unknown",
      landing_page: "/",
      landing_page_type: "route",
    };
  }

  const storedAttribution = readSessionStorage(STORAGE_KEYS.attribution, null);
  const storedUtmParams = readSessionStorage(STORAGE_KEYS.utm, {});
  const currentAttribution = buildCurrentAttribution(locationLike);
  const currentUtmParams = parseUtmParams(locationLike.search);

  if (!storedAttribution) {
    if (hasUtmValues(currentUtmParams)) {
      writeSessionStorage(STORAGE_KEYS.utm, currentUtmParams);
    }

    writeSessionStorage(STORAGE_KEYS.attribution, currentAttribution);
    return currentAttribution;
  }

  if (hasUtmValues(currentUtmParams)) {
    const nextUtmParams = {
      ...storedUtmParams,
      ...currentUtmParams,
    };

    const mergedAttribution = {
      ...storedAttribution,
      ...nextUtmParams,
      source_category: classifySource({
        utmSource: nextUtmParams.utm_source,
        utmMedium: nextUtmParams.utm_medium,
        referrerHost: storedAttribution.referrer_host,
      }),
    };

    writeSessionStorage(STORAGE_KEYS.utm, nextUtmParams);
    writeSessionStorage(STORAGE_KEYS.attribution, mergedAttribution);
    return mergedAttribution;
  }

  return storedAttribution;
}

export function getDestinationType(url = "") {
  const normalizedUrl = cleanValue(url).toLowerCase();

  if (!normalizedUrl) {
    return "unknown";
  }

  if (normalizedUrl.startsWith("mailto:")) {
    return "email";
  }

  if (normalizedUrl.startsWith("tel:")) {
    return "phone";
  }

  if (normalizedUrl.includes("wa.me") || normalizedUrl.startsWith("whatsapp:")) {
    return "whatsapp";
  }

  if (normalizedUrl.endsWith(".pdf")) {
    return "document";
  }

  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.origin === window.location.origin ? "internal" : "external";
  } catch {
    return "external";
  }
}

export function sanitizeLinkUrl(url = "") {
  const normalizedUrl = cleanValue(url);

  if (!normalizedUrl) {
    return "";
  }

  if (normalizedUrl.startsWith("mailto:")) {
    return "mailto";
  }

  if (normalizedUrl.startsWith("tel:")) {
    return "tel";
  }

  if (normalizedUrl.includes("wa.me") || normalizedUrl.startsWith("whatsapp:")) {
    return "whatsapp";
  }

  try {
    const parsedUrl = new URL(normalizedUrl, window.location.origin);
    const safePath = `${parsedUrl.pathname}` || "/";

    if (parsedUrl.origin === window.location.origin) {
      return safePath;
    }

    return `${parsedUrl.origin}${safePath}`;
  } catch {
    return normalizedUrl.split("?")[0].split("#")[0];
  }
}
