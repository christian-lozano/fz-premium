"use client"

import { Key, useEffect, useState } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"
import { Image } from "sanity"

import { SanityProduct } from "@/config/inventory"
import { precioProduct } from "@/config/precio-product"

import ProductAddToCart from "./product-add-to-cart"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const [data, setData] = useState([])
  // const [hoverImage, setHoverImage] = useState(
  //   urlForImage(product.images[0].asset._ref).url()
  // )
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const productFilter = `_type == "product" && name match "${product.name}*" && sku != "${product.sku}" && genero match "${product.genero}"`

    const filter = `*[${productFilter}]`
    client
      .fetch(
        groq`${filter} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      priceecommerce,
      description,
      genero,
      categories,
      marca,
      tallas,
      stock,
      descuento,
      preciomanual,
      "slug":slug.current
    }`
      )
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  return (
    <div className="sticky top-44 mt-10  h-full w-full px-11 lg:mt-0 xl:w-8/12">
      <h1 className="text-3xl font-bold uppercase tracking-tight">
        {product.name} - {product.genero}
      </h1>
      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <div className="mb-5 flex">
          <p className=" mr-2 text-3xl font-semibold tracking-tight text-[#767677] line-through">
            S/{product.priceecommerce}
          </p>
          <p className="text-3xl tracking-tight ">
            S/
            {precioProduct(
              product.descuento,
              product.priceecommerce,
              product.preciomanual
            )}
          </p>
        </div>
      </div>
      <h6 className="text-md tracking-tight">Marca: {product.marca}</h6>
      <h5 className="text-md tracking-tight">Sku: {product.sku}</h5>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>
      <div className="mt-2 flex gap-1">
        {data?.map(
          (el: {
            id: Key | null | undefined
            slug: any
            sku: any
            images: { asset: { _ref: Image } }[]
          }) => (
            <Link key={el.id} href={`/products/${el.slug}/${el.sku}`}>
              <img
                // onMouseEnter={() =>
                //   setHoverImage(urlForImage(el.images[0].asset._ref).url())
                // }
                // onMouseLeave={() =>
                //   setHoverImage(urlForImage(product.images[0].asset._ref).url())
                // }
                width={50}
                height={50}
                className="relative"
                src={urlForImage(el.images[0].asset._ref).url()}
                alt=""
              />
            </Link>
          )
        )}
      </div>
      <ProductAddToCart product={product} />
    </div>
  )
}
