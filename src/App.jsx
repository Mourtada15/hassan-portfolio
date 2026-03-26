import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { useEffect } from "react";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import { initAnalytics } from "./lib/analytics";
import { usePageTracking } from "./hooks/usePageTracking";
import { useSectionTracking } from "./hooks/useSectionTracking";
import { useEngagementTracking } from "./hooks/useEngagementTracking";

const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const targetId = decodeURIComponent(hash.slice(1));
    let timeoutId;
    let attempts = 0;
    const maxAttempts = 10;

    const scrollToElement = () => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
        return;
      }

      if (attempts >= maxAttempts) return;

      attempts += 1;
      timeoutId = window.setTimeout(scrollToElement, 150);
    };

    scrollToElement();

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [hash]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  usePageTracking();
  useSectionTracking();
  useEngagementTracking();

  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <>
      <main>
        <ScrollToHashElement />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default App;
