import React, { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useCart } from "react-use-cart"

import { precioProduct } from "@/config/precio-product"
import { useToast } from "@/components/ui/use-toast"
import GiaDeTallasMain from "@/components/guia-tallas/GiaDeTallasMain"

import { Button } from "./ui/button"

export default function ProductAddToCart({ product }) {
  const { toast } = useToast()
  const [selectSize, setSelectSize] = useState({
    talla: "",
    stock: 0,
    _key: "",
  })
  const [activeAddProduct, setActiveAddProduct] = useState(true)
  const [stock, setStock] = useState(
    product.tallas.every((el) => el.stock === 0)
  )
  const { addItem, items } = useCart()

  //add to cart
  const addToCart = () => {
    const item = {
      ...product,
      product_data: {
        size: selectSize,
      },
    }

    addItem({
      id: String(`${selectSize._key}`),
      name: product.name,
      idsanity: product.id,
      img: product.image,
      title: product.name,
      image: product.images[0].asset?._ref,
      objectID: product.sku,
      price: precioProduct(product.descuento, product.priceecommerce,  product.preciomanual),
      talla: String(`${selectSize.talla}`),
      slug: product.slug,
    })
    toast({
      title: `${item.name} (${selectSize.talla})`,
      description: "Producto Agregado al Carrito",
      action: (
        <Link href={"/carrito"}>
          <Button variant={"link"} className="gap-x-5 whitespace-nowrap">
            <span>Abrir Carrito</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      ),
    })
    setActiveAddProduct(true)
  }

  const selectTalla = (talla, _key, stock) => {
    setActiveAddProduct(false)
    setSelectSize({ talla, _key, stock })
  }

  const [cliente, setCliente] = useState(false)
  useEffect(() => {
    setCliente(true)
  }, [])

  return (
    <div>
      <div className="mt-4">
        <p>
          Talla: <strong>{selectSize.talla || ""}</strong>
        </p>
        {cliente &&
          product.tallas.map(({ talla, stock, _key }) => (
            <Button
              onClick={() => selectTalla(talla, _key, stock)}
              key={_key}
              disabled={
                stock <= 0 ||
                items.find(
                  (itemsCarrito) =>
                    itemsCarrito.id === _key && itemsCarrito.quantity >= stock
                )
              }
              variant={
                selectSize.talla === talla && !activeAddProduct
                  ? "default"
                  : "outline"
              }
              className={`${
                stock <= 0 ||
                (items.find(
                  (itemsCarrito) =>
                    itemsCarrito.id === _key && itemsCarrito.quantity >= stock
                ) &&
                  "line-through")
              } mr-2 mt-4 `}
            >
              {talla}
            </Button>
          ))}
      </div>
      <GiaDeTallasMain
        gender={product.genero}
        product_type={product.tipo}
      ></GiaDeTallasMain>
      <form className="mt-6">
        <div className="mt-4 flex">
          {stock ? (
            <div className="flex w-full flex-col items-center">
              <Link href={"/tienda"} className="w-full">
                <Button
                  disabled={false}
                  type="button"
                  className=" mt-20 w-full bg-black py-6 text-base font-medium focus:outline-none focus:ring-2 dark:bg-white "
                >
                  Producto Agotado
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              disabled={activeAddProduct}
              onClick={addToCart}
              type="button"
              className=" w-full bg-black py-6 text-base font-medium focus:outline-none focus:ring-2 dark:bg-white "
            >
              {activeAddProduct ? "Seleccione una talla" : "Agregar Al Carrito"}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
