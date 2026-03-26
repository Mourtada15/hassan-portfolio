export const EVENT_NAMES = Object.freeze({
  PAGE_VIEW: "page_view",
  SECTION_VIEW: "section_view",
  NAV_CLICK: "nav_click",
  MOBILE_MENU_OPEN: "mobile_menu_open",
  MOBILE_MENU_ITEM_CLICK: "mobile_menu_item_click",
  HERO_SECONDARY_CTA_CLICK: "hero_secondary_cta_click",
  SOCIAL_CLICK: "social_click",
  CONTACT_ACTION: "contact_action",
  RESUME_DOWNLOAD: "resume_download",
  PROJECT_CARD_VIEW: "project_card_view",
  PROJECT_CLICK: "project_click",
  PROJECT_DEMO_CLICK: "project_demo_click",
  PROJECT_REPO_CLICK: "project_repo_click",
  SCROLL_DEPTH_CUSTOM: "scroll_depth_custom",
  TIME_ENGAGED: "time_engaged",
  FIRST_INTERACTION_TIME: "first_interaction_time",
});

const HIGH_INTENT_EVENT_NAMES = new Set([
  EVENT_NAMES.RESUME_DOWNLOAD,
  EVENT_NAMES.PROJECT_DEMO_CLICK,
]);

const HIGH_INTENT_ACTION_TYPES = new Set([
  "linkedin_click",
  "email_click",
  "whatsapp_click",
  "contact_form_submit",
]);

export function isHighIntentEvent(eventName, params = {}) {
  if (HIGH_INTENT_EVENT_NAMES.has(eventName)) {
    return true;
  }

  if (
    (eventName === EVENT_NAMES.SOCIAL_CLICK ||
      eventName === EVENT_NAMES.CONTACT_ACTION) &&
    HIGH_INTENT_ACTION_TYPES.has(params.action_type)
  ) {
    return true;
  }

  return false;
}

export function getPrimaryInterestFromEvent(eventName, params = {}) {
  if (
    eventName === EVENT_NAMES.PROJECT_CARD_VIEW ||
    eventName === EVENT_NAMES.PROJECT_CLICK ||
    eventName === EVENT_NAMES.PROJECT_DEMO_CLICK ||
    eventName === EVENT_NAMES.PROJECT_REPO_CLICK
  ) {
    return "projects";
  }

  if (eventName === EVENT_NAMES.RESUME_DOWNLOAD) {
    return "resume";
  }

  if (
    eventName === EVENT_NAMES.CONTACT_ACTION &&
    ["email_click", "phone_click", "whatsapp_click", "contact_form_submit"].includes(
      params.action_type,
    )
  ) {
    return "contact";
  }

  if (
    eventName === EVENT_NAMES.SOCIAL_CLICK &&
    ["linkedin_click", "github_click"].includes(params.action_type)
  ) {
    return "social";
  }

  if (eventName === EVENT_NAMES.HERO_SECONDARY_CTA_CLICK) {
    if (params.cta_name?.includes("contact")) {
      return "contact";
    }
  }

  return null;
}
