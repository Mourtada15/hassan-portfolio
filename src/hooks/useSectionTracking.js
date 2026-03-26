import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  trackProjectCardView,
  trackSectionView,
} from "../lib/analytics";

function buildProjectPayload(element) {
  return {
    project_name: element.dataset.projectName,
    project_category: element.dataset.projectCategory,
    tech_stack: element.dataset.techStack,
    featured: element.dataset.featured === "true",
    cta_location: element.dataset.ctaLocation || "project_section",
  };
}

function observeElements({ elements, threshold, onVisible }) {
  if (elements.length === 0) {
    return () => {};
  }

  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    elements.forEach((element) => onVisible(element));
    return () => {};
  }

  const seenElements = new WeakSet();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || seenElements.has(entry.target)) {
          return;
        }

        seenElements.add(entry.target);
        onVisible(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      threshold,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}

export function useSectionTracking() {
  const location = useLocation();

  useEffect(() => {
    const sectionElements = Array.from(
      document.querySelectorAll("[data-analytics-section]"),
    );
    const projectElements = Array.from(
      document.querySelectorAll("[data-analytics-project]"),
    );

    const cleanupSections = observeElements({
      elements: sectionElements,
      threshold: 0.4,
      onVisible: (element) => {
        trackSectionView({
          section_name: element.dataset.analyticsSection,
        });
      },
    });

    const cleanupProjects = observeElements({
      elements: projectElements,
      threshold: 0.35,
      onVisible: (element) => {
        trackProjectCardView(buildProjectPayload(element));
      },
    });

    return () => {
      cleanupSections();
      cleanupProjects();
    };
  }, [location.pathname, location.search]);
}
