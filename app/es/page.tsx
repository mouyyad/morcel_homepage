import type { Metadata } from "next"
import MorcelLandingESClient from "./MorcelLandingESClient"

export const metadata: Metadata = {
  title: "Morcel - Convierte Tu Menú En Un Feed de Redes Sociales",
  description:
    "¿Por qué mostrar PDFs aburridos cuando los clientes quieren navegación estilo Instagram y pedidos fáciles? Transforma tu menú en una experiencia social.",
  keywords: "menú digital, menú QR, menú móvil, restaurante, redes sociales, Instagram, menú viral, España, español",
  openGraph: {
    title: "Morcel - Convierte Tu Menú En Un Feed de Redes Sociales",
    description:
      "¿Por qué mostrar PDFs aburridos cuando los clientes quieren navegación estilo Instagram y pedidos fáciles? Transforma tu menú en una experiencia social.",
    url: "https://morcel.ai/es",
    siteName: "Morcel",
    images: [
      {
        url: "/images/morcel-og-image.png",
        width: 1200,
        height: 630,
        alt: "Morcel - Convierte tu menú en un feed de redes sociales",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morcel - Convierte Tu Menú En Un Feed de Redes Sociales",
    description:
      "¿Por qué mostrar PDFs aburridos cuando los clientes quieren navegación estilo Instagram y pedidos fáciles?",
    images: ["/images/morcel-og-image.png"],
  },
  alternates: {
    canonical: "https://morcel.ai/es",
    languages: {
      en: "https://morcel.ai",
      es: "https://morcel.ai/es",
    },
  },
}

export default function MorcelLandingES() {
  return <MorcelLandingESClient />
}
