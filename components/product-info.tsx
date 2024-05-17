"use client"

import { SanityProduct } from "@/config/inventory"
import { precioProduct } from "@/config/precio-product"

import ProductAddToCart from "./product-add-to-cart"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
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

      <ProductAddToCart product={product} />
    </div>
  )
}
