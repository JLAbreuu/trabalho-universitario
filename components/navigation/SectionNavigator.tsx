"use client";

import { useEffect, useState, useCallback } from "react";
import { useAccessibility } from "@/components/accessibility/AccessibilityProvider";

export function SectionNavigator() {
  const { presentationMode: isActive, setPresentationMode: setIsActive } = useAccessibility();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionCount, setSectionCount] = useState(0);

  // Read sections from DOM
  const getSections = useCallback((): HTMLElement[] => {
    return Array.from(document.querySelectorAll("[data-section]")) as HTMLElement[];
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const sections = getSections();
    if (index < 0 || index >= sections.length) return;
    const target = sections[index];
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
    setCurrentIndex(index);
  }, [getSections]);

  // Intercept Tab and Arrow keys when presentation mode is active
  useEffect(() => {
    const sections = getSections();
    setSectionCount(sections.length);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isActive) return;

      const isNext = e.key === "ArrowDown" || e.key === "ArrowRight" || (!e.shiftKey && e.key === "Tab");
      const isPrev = e.key === "ArrowUp" || e.key === "ArrowLeft" || (e.shiftKey && e.key === "Tab");

      if (!isNext && !isPrev) return;

      e.preventDefault();
      const sections = getSections();
      const next = isPrev
        ? Math.max(0, currentIndex - 1)
        : Math.min(sections.length - 1, currentIndex + 1);
      scrollToSection(next);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, currentIndex, getSections, scrollToSection]);

  return null;
}
