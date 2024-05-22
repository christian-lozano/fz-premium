import { Metadata } from "next"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { metadataPage } from "@/config/generateMetadata"
import { SanityProduct } from "@/config/inventory"
import CarouselProductRelacionados from "@/components/carousel-product/carousel-product-relacionados"
import { ProductGallery } from "@/components/product-gallery"
import { ProductGalleryDesk } from "@/components/product-gallery-desk"
import { ProductInfo } from "@/components/product-info"

interface Props {
  params: {
    slug: string
    id: string
  }
}
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  let meta = await metadataPage({ params })
  return meta
}

export default async function Page({ params }: Props) {
  const product =
    await client.fetch<SanityProduct>(groq`*[_type == "product" &&  categories match "originals" && slug.current == "${params.slug}" && sku == "${params.id}"][0] {
    _id,
    _createAt,
    "id":_id,
    name,
    sku,
    marca,
    images,
    priceecommerce,
    currency,
    description,
    sizes,
    categories,
    colors,
    genero,
    tipo,
    descuento,
    tallas,
    preciomanual,
    "slug":slug.current
  }`)

  if (!product) {
    return notFound()
  }
  const productosGenero = async () => {
    const order = `| order(_id) [0...10]`

    const productFilter = `_type == "product"`

    const generoFilterHombre = `${product.genero}`
      ? `&& genero match "${product.genero}"&& marca match "${product.marca}"`
      : ""
    const filter = `*[${productFilter}${generoFilterHombre}]`

    // await seedSanityData()
    const products = await client.fetch(`${filter} ${order} {
          _id,
          _createdAt,
          name,
          sku,
          images,
          marca,
          priceecommerce,
          description,
          descuento,
          tipo,
          genero,
          descuento,
          preciomanual,
          "slug":slug.current
        }`)

    return products
  }

  const products = await productosGenero()
  return (
    <>
      <main className=" sm:pt-16 ">
        <div className="">
          {/* Product */}
          <div className="pb-20 xl:flex">
            {/* Product gallery */}

            <ProductGalleryDesk product={product} />

            {/* Product info */}
            <ProductInfo product={product} />
          </div>
        </div>
      </main>
      <div>
        <h5 className="text-center text-2xl font-extrabold">
          Productos Relacionados
        </h5>
        <CarouselProductRelacionados products={products} />
      </div>
    </>
  )
}
