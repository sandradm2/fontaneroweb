import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Amiri } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Reformas en Sevilla 24h | Fontanería y Electricidad - Servicios Andalusí",
    template: "%s | Servicios Andalusí",
  },
  description: siteConfig.description,
  keywords: [
    "reformas sevilla",
    "fontanero sevilla",
    "electricista sevilla",
    "reformas integrales sevilla",
    "fontanero 24 horas sevilla",
    "electricista urgente sevilla",
    "reforma baño sevilla",
    "reforma cocina sevilla",
    "mantenimiento comunidades sevilla",
    "urgencias fontanería sevilla",
    "urgencias electricidad sevilla",
    // Nuevas keywords de alta competencia
    "reformas locales comerciales sevilla",
    "rehabilitación viviendas antiguas sevilla",
    "reformas baños sin obras sevilla",
    "detección de fugas agua sin obra",
    "desatascos cámara inspección sevilla",
    "cambio bajantes sin andamios",
    "boletín eléctrico sevilla precio",
    "certificado instalación eléctrica sevilla",
    "electricista autorizado sevilla",
    "aumento potencia luz sevilla",
    "instalación termos eléctricos sevilla",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Reformas en Sevilla 24h | Servicios Andalusí",
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios Andalusí - Reformas en Sevilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas en Sevilla 24h | Servicios Andalusí",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "RELLENAR_CON_CODIGO_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${amiri.variable}`} suppressHydrationWarning>
      <body className="bg-brand-light text-brand-secondary font-sans antialiased" suppressHydrationWarning>
        <a href="#main" className="skip-link">
          Ir al contenido principal
        </a>
        <OrganizationSchema />
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
