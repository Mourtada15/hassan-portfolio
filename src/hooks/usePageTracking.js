import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/analytics";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    trackPageView({
      page_path: `${location.pathname}${location.search}`,
    });
  }, [location.pathname, location.search]);
}
