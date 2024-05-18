import "@/styles/globals.css"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import PaginaEmprende from "@/components/emprende/emprende"

export const metadata = {
  title:
    "Emprende con Fz Premium Perú Tienda oficial | Zapatillas y ropa deportiva",
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
export default async function page() {
  const emprende = await client.fetch(groq`*[_type == "emprende"]`)
  return (
    <>
      <PaginaEmprende emprende={emprende[0]} />
    </>
  )
}
