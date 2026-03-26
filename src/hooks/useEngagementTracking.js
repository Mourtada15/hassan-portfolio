import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 90];
const TIME_THRESHOLDS = [30, 60, 120];

function getScrollProgress() {
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (documentHeight <= 0) {
    return 100;
  }

  return Math.round((window.scrollY / documentHeight) * 100);
}

export function useEngagementTracking() {
  const location = useLocation();

  useEffect(() => {
    const firedScrollThresholds = new Set();
    const firedTimeThresholds = new Set();
    let engagedSeconds = 0;
    let isActive = document.visibilityState === "visible" && document.hasFocus();

    const handleScroll = () => {
      const scrollProgress = getScrollProgress();

      SCROLL_THRESHOLDS.forEach((threshold) => {
        if (
          scrollProgress >= threshold &&
          !firedScrollThresholds.has(threshold)
        ) {
          firedScrollThresholds.add(threshold);
          trackEvent("scroll_depth_custom", {
            scroll_percentage: threshold,
          });
        }
      });
    };

    const updateActivityState = () => {
      isActive = document.visibilityState === "visible" && document.hasFocus();
    };

    const intervalId = window.setInterval(() => {
      if (!isActive) {
        return;
      }

      engagedSeconds += 1;

      TIME_THRESHOLDS.forEach((threshold) => {
        if (
          engagedSeconds >= threshold &&
          !firedTimeThresholds.has(threshold)
        ) {
          firedTimeThresholds.add(threshold);
          trackEvent("time_engaged", {
            engagement_time_seconds: threshold,
          });
        }
      });
    }, 1000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("focus", updateActivityState);
    window.addEventListener("blur", updateActivityState);
    document.addEventListener("visibilitychange", updateActivityState);
    handleScroll();

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("focus", updateActivityState);
      window.removeEventListener("blur", updateActivityState);
      document.removeEventListener("visibilitychange", updateActivityState);
    };
  }, [location.pathname, location.search]);
}
