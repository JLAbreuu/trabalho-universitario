"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";

type Theme = "light" | "dark" | "system";

interface AccessibilityContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontScale: number;
  setFontScale: (scale: number) => void;
  reducedMotion: boolean;
  setReducedMotion: (active: boolean) => void;
  highContrast: boolean;
  setHighContrast: (active: boolean) => void;
  boldText: boolean;
  setBoldText: (active: boolean) => void;
  presentationMode: boolean;
  setPresentationMode: (active: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [fontScale, setFontScaleState] = useState(1);
  const [reducedMotion, setReducedMotionState] = useState(false);
  const [highContrast, setHighContrastState] = useState(false);
  const [boldText, setBoldTextState] = useState(false);
  const [presentationMode, setPresentationModeState] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedScale = localStorage.getItem("fontScale");
    const savedMotion = localStorage.getItem("reducedMotion");
    const savedContrast = localStorage.getItem("highContrast");
    const savedBold = localStorage.getItem("boldText");
    const savedPresentation = localStorage.getItem("presentationMode");

    if (savedTheme) setThemeState(savedTheme);
    if (savedScale) setFontScaleState(parseFloat(savedScale));
    if (savedMotion) setReducedMotionState(savedMotion === "true");
    if (savedContrast) setHighContrastState(savedContrast === "true");
    if (savedBold) setBoldTextState(savedBold === "true");
    if (savedPresentation) setPresentationModeState(savedPresentation === "true");
  }, []);

  // Apply CSS / DOM attribute changes
  useEffect(() => {
    const root = document.documentElement;

    // Theme
    if (theme === "system") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme);

    // Font Scale — applied at :root level so rem cascades everywhere
    root.style.setProperty("--font-scale", fontScale.toString());
    localStorage.setItem("fontScale", fontScale.toString());

    // High Contrast
    root.setAttribute("data-high-contrast", highContrast.toString());
    localStorage.setItem("highContrast", highContrast.toString());

    // Bold Text
    root.setAttribute("data-bold-text", boldText.toString());
    localStorage.setItem("boldText", boldText.toString());
  }, [theme, fontScale, highContrast, boldText]);

  // Reduced Motion — separate effect to handle GSAP/AOS side-effects
  useEffect(() => {
    const root = document.documentElement;

    // CSS attribute — triggers global animation freeze in globals.css
    root.setAttribute("data-reduced-motion", reducedMotion.toString());
    localStorage.setItem("reducedMotion", reducedMotion.toString());

    // GSAP — pause or resume the global timeline
    import("gsap").then(({ gsap }) => {
      if (reducedMotion) {
        gsap.globalTimeline.pause();
      } else {
        gsap.globalTimeline.resume();
      }
    });

    // AOS — restart with near-zero duration when reducing motion
    import("aos").then((mod) => {
      const AOS = mod.default;
      AOS.init({
        duration: reducedMotion ? 0 : 1000,
        once: true,
        easing: reducedMotion ? "linear" : "ease-out-cubic",
      });
    });
  }, [reducedMotion]);

  // Persist presentation mode
  useEffect(() => {
    localStorage.setItem("presentationMode", presentationMode.toString());
  }, [presentationMode]);

  const setTheme = (t: Theme) => setThemeState(t);
  const setFontScale = (s: number) => setFontScaleState(Math.min(Math.max(s, 0.8), 1.5));
  const setReducedMotion = (m: boolean) => setReducedMotionState(m);
  const setHighContrast = (c: boolean) => setHighContrastState(c);
  const setBoldText = (b: boolean) => setBoldTextState(b);
  const setPresentationMode = (p: boolean) => setPresentationModeState(p);

  return (
    <AccessibilityContext.Provider value={{
      theme, setTheme,
      fontScale, setFontScale,
      reducedMotion, setReducedMotion,
      highContrast, setHighContrast,
      boldText, setBoldText,
      presentationMode, setPresentationMode,
    }}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
        {children}
      </MotionConfig>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error("useAccessibility must be used within AccessibilityProvider");
  return context;
}
