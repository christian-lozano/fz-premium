import React, { useEffect, useState } from "react"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

import { precioProduct } from "@/config/precio-product"

export default function Product({ products, generoSku = false, outlet }) {
  const [stock, setStock] = useState()

  useEffect(() => {
    if (!products.tallas) {
      setStock(false)
    } else {
      setStock(products.tallas.every((el) => el.stock === 0))
    }
  }, [])
  // console.log(products.priceecommerce)
  return (
    <>
      <Link
        key={products.id}
        href={`/products/${products.slug}/${products.sku}`}
        className="group z-10 text-sm"
      >
        <div className="p-1">
          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg     group-hover:opacity-75 ">
            {products.images && (
              <img
                width={2000}
                height={2000}
                className="relative "
                src={urlForImage(products.images[0].asset._ref).url()}
                alt=""
              />
            )}

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

          {generoSku && (
            <div className="flex items-center justify-between ">
              <h2 className="mt-4 font-medium capitalize">
                {products.marca} - {products.genero}
              </h2>
              <h5 className="mt-4 text-xs font-medium">Sku: {products.sku}</h5>
            </div>
          )}
          <h3 className="mt-2 text-sm font-medium uppercase xl:text-xl ">
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
        </div>

        {/* <p className="mt-2 font-medium">S/{products.descuento}</p> */}
      </Link>
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
