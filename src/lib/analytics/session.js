const STORAGE_KEYS = {
  session: "hm_portfolio_analytics_session",
  visits: "hm_portfolio_analytics_visits",
};

function isBrowser() {
  return typeof window !== "undefined";
}

function readStorage(storage, key, fallback) {
  if (!isBrowser()) {
    return fallback;
  }

  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(storage, key, value) {
  if (!isBrowser()) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors so analytics never blocks rendering.
  }
}

function createSessionId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return `session_${Date.now()}`;
}

export function initSession(sourceCategory = "unknown") {
  if (!isBrowser()) {
    return {
      visit_count: 1,
      source_visit_count: 1,
      is_returning_visitor: false,
      is_returning_source_visitor: false,
      high_intent_session: false,
      primary_interest: "unknown",
    };
  }

  const existingSession = readStorage(
    window.sessionStorage,
    STORAGE_KEYS.session,
    null,
  );

  if (existingSession) {
    return existingSession;
  }

  const visits = readStorage(window.localStorage, STORAGE_KEYS.visits, {
    total: 0,
    by_source: {},
  });

  const nextTotalVisits = visits.total + 1;
  const nextSourceVisits = (visits.by_source[sourceCategory] || 0) + 1;
  const nextVisitsState = {
    total: nextTotalVisits,
    by_source: {
      ...visits.by_source,
      [sourceCategory]: nextSourceVisits,
    },
  };

  writeStorage(window.localStorage, STORAGE_KEYS.visits, nextVisitsState);

  const sessionState = {
    session_id: createSessionId(),
    visit_count: nextTotalVisits,
    source_visit_count: nextSourceVisits,
    is_returning_visitor: nextTotalVisits > 1,
    is_returning_source_visitor: nextSourceVisits > 1,
    high_intent_session: false,
    primary_interest: "unknown",
  };

  writeStorage(window.sessionStorage, STORAGE_KEYS.session, sessionState);
  return sessionState;
}

export function getSessionContext() {
  if (!isBrowser()) {
    return {
      visit_count: 1,
      source_visit_count: 1,
      is_returning_visitor: false,
      is_returning_source_visitor: false,
      high_intent_session: false,
      primary_interest: "unknown",
    };
  }

  const session = readStorage(window.sessionStorage, STORAGE_KEYS.session, null);

  if (!session) {
    return initSession();
  }

  const {
    visit_count,
    source_visit_count,
    is_returning_visitor,
    is_returning_source_visitor,
    high_intent_session,
    primary_interest,
  } = session;

  return {
    visit_count,
    source_visit_count,
    is_returning_visitor,
    is_returning_source_visitor,
    high_intent_session,
    primary_interest,
  };
}

function updateSessionState(updater) {
  if (!isBrowser()) {
    return getSessionContext();
  }

  const currentSession = readStorage(window.sessionStorage, STORAGE_KEYS.session, null);
  const baseSession = currentSession || initSession();
  const nextSession =
    typeof updater === "function" ? updater(baseSession) : updater;

  if (nextSession) {
    writeStorage(window.sessionStorage, STORAGE_KEYS.session, nextSession);
  }

  return nextSession;
}

export function markHighIntentSession() {
  const currentSession = getSessionContext();

  if (currentSession.high_intent_session) {
    return currentSession;
  }

  return updateSessionState((sessionState) => ({
    ...sessionState,
    high_intent_session: true,
  }));
}

export function setPrimaryInterest(primaryInterest) {
  if (!primaryInterest) {
    return getSessionContext();
  }

  return updateSessionState((sessionState) => ({
    ...sessionState,
    primary_interest: primaryInterest,
  }));
}
