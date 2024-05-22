import { Metadata } from "next"
// connectMongoDB()

// app/layout.tsx

import { Raleway, Roboto } from "next/font/google"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanitySlider } from "@/config/inventory"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/Footer/Footer"
import { SiteHeader } from "@/components/Header/site-header"
import IconWhatapp from "@/components/icon-whatsapp/icon-whatapp"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"

import GoogleAnalytics from "./GoogleAnalytics"
import "@/styles/globals.css"
export const metadata: Metadata = {
  title: "Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
  description:
    "Bienvenido(a) al sitio oficial de Fz Premium Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
  openGraph: {
    title: " Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
    description:
      "Bienvenido(a) al sitio oficial de Fz Premium Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
    url: `${process.env.URL_DOMINIO}`,
    siteName: "Fz Premium",
    images: [
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,
        width: 800,
        height: 600,
        alt: `Fz Premium share Imagen`,
      },
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,

        width: 1200,
        height: 630,
        alt: `Fz Premium share Imagen`,
      },
    ],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

const raleway = Raleway({
  weight: ["800"],
  subsets: ["latin"],
  style: "italic",
  display: "swap",
  // display: "swap",
})

export default async function RootLayout({ children }: RootLayoutProps) {
  const urlWhatsApp = await client.fetch<
    SanitySlider[]
  >(groq`*[_type == "home"] {
  whatsapp
  }`)
  return (
    <>
      <html lang="es" suppressHydrationWarning>
        <head />
        <body
          className={cn("min-h-screen bg-background  antialiased", raleway)}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Providers>
                <SiteHeader />
                <GoogleAnalytics />
                {children}
                <Footer />
              </Providers>
              <SiteBlob />
            </div>
          </Providers>
          <IconWhatapp urlWhatsApp={urlWhatsApp[0]}></IconWhatapp>
        </body>
      </html>
    </>
  )
}
