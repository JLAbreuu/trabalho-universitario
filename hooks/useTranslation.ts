import { useAccessibility } from "@/components/accessibility/AccessibilityProvider";
import { pt } from "@/dictionaries/pt";
import { en } from "@/dictionaries/en";

export function useTranslation() {
  const { language } = useAccessibility();
  
  const t = language === "en" ? en : pt;
  
  return { t, language };
}
