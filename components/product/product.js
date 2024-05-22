"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"

import { precioProduct } from "@/config/precio-product"
import CarouselProductSimilares from "@/components/carousel-product/carousel-product-similares"

export default function Product({
  products,
  generoSku = false,
  outlet,
  relacionados = true,
}) {
  const [stock, setStock] = useState()

  const [hoverImage, setHoverImage] = useState(
    urlForImage(products.images[0].asset._ref).url()
  )

  useEffect(() => {
    if (!products.tallas) {
      setStock(false)
    } else {
      setStock(products.tallas.every((el) => el.stock === 0))
    }
  }, [])

  useEffect(() => {
    setHoverImage(urlForImage(products.images[0].asset._ref).url())
  }, [products.sku])

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const productFilter = `_type == "product" && name match "${products.name}*" && sku != "${products.sku}"`

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
    <>
      <div className=" flex h-full flex-col justify-around  p-1 ">
        <div className="aspect-h-1 aspect-w-1  overflow-hidden  rounded-lg    group-hover:opacity-75 ">
          <Link
            key={products.id}
            href={`/products/${products.slug}/${products.sku}`}
            className="group z-10 text-sm"
          >
            {products.images && (
              <img
                onMouseEnter={() =>
                  setHoverImage(
                    urlForImage(products.images[1].asset._ref).url()
                  )
                }
                onMouseLeave={() =>
                  setHoverImage(
                    urlForImage(products.images[0].asset._ref).url()
                  )
                }
                width={2000}
                height={2000}
                className="relative "
                src={hoverImage}
                alt=""
              />
            )}
          </Link>

          {products.descuento && (
            <div className="absolute right-0 top-4  ">
              <div className=" mt-1 text-xs text-white ">
                <div className="flex flex-col ">
                  {outlet && (
                    <>
                      <span className="flex justify-center bg-black px-3 py-1">
                        {" "}
                        {!stock ? `-${products.descuento}%` : "Agotado"}
                      </span>
                      <span className="mt-1 bg-red-500 px-3 py-1 uppercase">
                        oferta
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {relacionados && (
          <>
            <div className="mt-2 flex gap-1">
              {data?.map((el) => (
                <Link key={el.id} href={`/products/${el.slug}/${el.sku}`}>
                  <img
                    onMouseEnter={() =>
                      setHoverImage(urlForImage(el.images[0].asset._ref).url())
                    }
                    onMouseLeave={() =>
                      setHoverImage(
                        urlForImage(products.images[0].asset._ref).url()
                      )
                    }
                    width={50}
                    height={50}
                    className="relative"
                    src={urlForImage(el.images[0].asset._ref).url()}
                    alt=""
                  />
                </Link>
              ))}
            </div>
          </>
        )}

        <Link
          key={products.id}
          href={`/products/${products.slug}/${products.sku}`}
          className="group z-10 text-sm"
        >
          {!generoSku && (
            <div className="flex items-center justify-between ">
              <h2 className="mt-4 font-medium capitalize">
                {products.marca} - {products.genero}
              </h2>
              <h5 className="mt-4 text-xs font-medium">Sku: {products.sku}</h5>
            </div>
          )}
          <h3 className="mt-2 text-sm font-medium uppercase xl:text-lg 2xl:text-xl ">
            {products.name}
          </h3>

          <div className="flex">
            <span className="mr-2 mt-2 font-semibold text-[#767677] line-through">
              S/{products.priceecommerce}
            </span>
            <p className="mt-2 font-semibold">
              S/
              {precioProduct(
                products.descuento,
                products.priceecommerce,
                products.preciomanual
              )}
            </p>
          </div>
        </Link>
      </div>

      {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}

      {/* <button
        onClick={() => alert("producto")}
        className="button-0 absolute z-50 flex items-center justify-center rounded-full  text-center"
      >
        <svg
          className=" icon icon--plus"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.125 10.875V18H10.375V10.875H18V9.625H10.375V2H9.125V9.625H2V10.875H9.125Z"
          ></path>
        </svg>
      </button> */}
    </>
  )
}
