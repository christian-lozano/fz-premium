import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"

import "@/styles/globals.css"
import { Metadata } from "next"

interface Props {
  searchParams: {
    date?: string
    priceecommerce?: string
    price?: string

    color?: string
    category?: string
    tipo?: string
    marca?: string
    size?: string
    genero?: string
    search?: string
    sku?: string
  }
}
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
export default async function Page({ searchParams }: Props) {
  async function fetchNextPage() {
    const {
      date = "desc",
      price,
      priceecommerce,
      color,
      category,
      size,
      search,
      genero,
      marca,
      tipo,
    } = searchParams

    const priceOrder = price ? `| order(priceecommerce ${price})` : ""

    const dateOrder = date ? `| order(_createAt ${date})` : ""

    const order = `${priceOrder}${dateOrder}`

    const productFilter = `_type == "product" && categories match "originals"`
    const colorFilter = color ? `&& color match "${color}"` : ""
    const tipoFilter = tipo ? `&& tipo match "${tipo}"` : ""
    const marcaFilter = marca ? `&& marca match "${marca}"` : ""

    const categoryFilter = category ? `&& "${category}" match categories` : ""
    const sizeFilter = size ? `&& tallas match "tallas"` : ""
    const generoFilter = genero ? `&& genero match "${genero}"` : ""

    const searchFilter = search
      ? `&& name match "${search}" || sku match "${search}" || genero match "${search}"|| marca match "${search}"|| tipo match "${search}"|| category match "${search}"|| color match "${search}"  `
      : ""

    const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}${generoFilter}${tipoFilter}${marcaFilter}]`

    // await seedSanityData()

    const products = await client.fetch<SanityProduct[]>(
      groq`${filter} ${order} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      priceecommerce,
      description,
      genero,
      tipo,
      marca,
      descuento,
      color,
      razonsocial,
      tallas,
      preciomanual,
      "slug":slug.current
    } `
    )
    // console.log(priceecommerce)
    return products
  }
  const products = await fetchNextPage()
  // console.log(products[0].tallas)
  const productos = products.filter((el) => el.razonsocial !== "fritzduran")

  return (
    <div>
      <div className="sticky top-[80px] z-20 h-full w-full  xl:top-[101px]">
        <div className=" flex  w-full items-center justify-between bg-white  px-6 py-4   dark:bg-background">
          <h1 className="text-xl font-bold tracking-tight sm:text-xl">
            {/* {products.length}
            <span className="ml-2 ">
              Producto{products.length > 1 && "s"}
            </span> */}
            <span>Filtrar por:</span>
          </h1>
          {/* Product Sort */}
          <ProductSort />
        </div>
      </div>
      <div>
        <main className=" w-full px-6">
          <section
            aria-labelledby="products-heading"
            className="flex pb-24 pt-6"
          >
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div
              className={cn(
                "grid grid-cols-1 gap-x-8 gap-y-10",
                products.length > 0
                  ? "lg:grid-cols-[1fr_3fr]"
                  : "lg:grid-cols-[1fr_3fr]"
              )}
            >
              <div className="hidden lg:block">
                {/* Product filters */}

                <ProductFilters />
              </div>
            </div>
            <ProductGrid outlet={false} products={productos} generoSku={true} />
            {/* Product grid */}
          </section>
        </main>
      </div>
    </div>
  )
}
