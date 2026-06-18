import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

const CLARITY_PROJECT_ID = "x91n2q2207";

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <div className="growline" aria-hidden>
          <span className="growline__fill" />
        </div>
        {children}
        <RevealObserver />
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
        </Script>
      </body>
    </html>
  );
}
