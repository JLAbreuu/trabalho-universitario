import "./globals.css";
import "aos/dist/aos.css";
import "animate.css";

export const metadata = {
  title: "A Crise Invisível do Saneamento no Brasil",
  description: "Uma análise profunda sobre a crise do saneamento básico, focada em gestão fiscal, externalidades negativas e o Novo Marco Legal.",
};

import { AccessibilityProvider } from "@/components/AccessibilityProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <AccessibilityProvider>
          {children}
        </AccessibilityProvider>
      </body>
    </html>
  );
}


