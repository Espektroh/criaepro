import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import GrowLine from "@/components/GrowLine";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const SITE_URL = "https://criae.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Criae — Marketing digital que cresce com você",
  description:
    "Setup de presença, conteúdo, tráfego pago e sites para negócios locais reais. Você monta o que faz sentido pro seu momento e cresce no seu ritmo. Sorocaba e região, atende todo o Brasil.",
  keywords: [
    "marketing digital",
    "tráfego pago",
    "gestão de redes sociais",
    "Google Meu Negócio",
    "landing page",
    "Sorocaba",
    "Criae",
  ],
  authors: [{ name: "Criae" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Criae",
    title: "Criae — Marketing digital que cresce com você",
    description:
      "Setup de presença, conteúdo, tráfego pago e sites para negócios locais reais. Você monta o que faz sentido e cresce no seu ritmo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criae — Marketing digital que cresce com você",
    description:
      "Marketing digital para negócios reais: presença, conteúdo, tráfego pago e sites.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <GrowLine />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
