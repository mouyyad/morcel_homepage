import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Morcel - Turn Your Menu Into a Social Media Feed",
  description:
    "Transform your restaurant menu into Instagram-style browsing with QR codes. Mobile-first, social-style menus with 3 templates and multi-language support.",
  keywords:
    "restaurant menu, QR menu, digital menu, social media menu, Instagram menu, mobile menu, restaurant technology",
  authors: [{ name: "Morcel" }],
  creator: "Morcel",
  publisher: "Morcel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://morcel.ai",
    siteName: "Morcel",
    title: "Morcel - Turn Your Menu Into a Social Media Feed",
    description:
      "Transform your restaurant menu into Instagram-style browsing with QR codes. Mobile-first, social-style menus with 3 templates and multi-language support.",
    images: [
      {
        url: "/images/morcel-og-image.png",
        width: 1200,
        height: 630,
        alt: "Morcel - Social Media Style Restaurant Menus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morcel - Turn Your Menu Into a Social Media Feed",
    description:
      "Transform your restaurant menu into Instagram-style browsing with QR codes. Mobile-first, social-style menus with 3 templates and multi-language support.",
    images: ["/images/morcel-og-image.png"],
    creator: "@morcel",
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MWLGF6VH');
            `,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VZ2G8YGGE7" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VZ2G8YGGE7');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, 
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1476841973312247');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1476841973312247&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWLGF6VH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
