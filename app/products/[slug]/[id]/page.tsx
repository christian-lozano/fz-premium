import { Metadata } from "next"
import { notFound } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { metadataPage } from "@/config/generateMetadata"
import { SanityProduct } from "@/config/inventory"
import { precioProduct } from "@/config/precio-product"
import { AccordionDetails } from "@/components/acordion-details/acordion-details"
import { BreadcrumbsDefault } from "@/components/bread-crumbs/bread-crumbs"
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
      ? `&& genero match "${product.genero}"&& marca match "${product.marca}" && categories match "originals"`
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
      <main className=" mb-0 xl:pt-16  ">
        <div className="">
          {/* Product */}

          <div className=" w-full xl:flex 2xl:pb-20">
            {/* precio y nombre */}
            <div className=" sticky top-20 z-10 border-b-[1px]  border-blue-gray-300 bg-white text-black dark:bg-white dark:text-black xl:hidden">
              <div className=" xl:block">
                <BreadcrumbsDefault product={product} />
              </div>
              <div className=" flex w-full items-center justify-between  px-4 py-2 ">
                <h1 className="text-lg font-bold uppercase tracking-tight 2xl:text-3xl">
                  {product.name} - {product.genero}
                </h1>
                <div className="flex">
                  <p className=" mr-2 font-semibold  tracking-tight text-[#767677] line-through 2xl:text-3xl">
                    S/{product.priceecommerce}
                  </p>
                  <p className="tracking-tight 2xl:text-3xl ">
                    S/
                    {precioProduct(
                      product.descuento,
                      product.priceecommerce,
                      product.preciomanual
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* Product gallery */}
            <div>
              <div className="hidden border-b-[1px] border-blue-gray-300 text-black dark:text-white  xl:block  xl:border-none xl:border-transparent">
                <BreadcrumbsDefault product={product} />
              </div>
              <ProductGalleryDesk product={product} />
              <AccordionDetails product={product} />
            </div>

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
