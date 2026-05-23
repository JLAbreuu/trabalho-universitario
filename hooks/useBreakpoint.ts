"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

/**
 * Apple-like breakpoints:
 * - mobile:  ≤ 480px  (iPhone SE/Mini)
 * - tablet:  481–1024px (iPad portrait/landscape)
 * - desktop: > 1024px
 */
export function useBreakpoint() {
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  const isTouchDevice = useMediaQuery({ query: "(hover: none)" });

  useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return { isMobile: false, isTablet: false, isDesktop: false, isTouchDevice: false };

  return { isMobile, isTablet, isDesktop, isTouchDevice };
}
