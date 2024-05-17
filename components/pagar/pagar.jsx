"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { Radio, Typography } from "@material-tailwind/react"
import { useCart } from "react-use-cart"

import { CartItemsEmpty } from "../cart-items-empty"
import FormPagar from "./form-pagar"

export default function PaginaPagar() {
  const { items, removeItem } = useCart()
  // console.log(items)

  const [domLoaded, setDomLoaded] = useState(false)
  const [tipoEntrega, setTipoEntrega] = useState("envio")
  useEffect(() => {
    setDomLoaded(true)
    items.find((item) => {
      client
        .getDocument(item.idsanity)
        .then((resultado) => {
          let tallaStockMenor = resultado.tallas.filter(
            (talla) => talla._key === item.id && talla.stock < item.quantity
          )
          if (tallaStockMenor.length > 0) {
            tallaStockMenor.map((sStockiD) => {
              removeItem(sStockiD._key)
            })
          }
        })
        .catch((error) => {
          console.log(error)
        })
      if (item.price < 20) {
        removeItem(item.id)
        alert("Precio Incorrecto Por favor elegir otro Producto")
      }
    })
  }, [])

  return (
    <div className=" pt-20">
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Resumen del pedido</p>
          <p className="text-gray-400">
            Revisa tus artículos. Y seleccione un método de envío adecuado.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border  px-2 py-4  sm:px-6">
            {domLoaded && items.length === 0 && <CartItemsEmpty />}
            {domLoaded &&
              items.map((el) => (
                <Link href={`/products/${el.slug}/${el.objectID}`}>
                  <li
                    key={el.id}
                    className="flex flex-col items-center  py-6 sm:flex-row sm:justify-between"
                  >
                    <div className="flex w-full items-center space-x-2 sm:space-x-4">
                      <img
                        className="shrink-0 rounded object-cover outline-none dark:border-transparent dark:bg-gray-500 sm:h-32 sm:w-32"
                        src={urlForImage(el.image).url()}
                        width={150}
                        alt="Polaroid camera"
                      />
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="flex w-full flex-col justify-between">
                          <div className="flex w-full justify-between space-x-2 pb-2">
                            <div className="space-y-1">
                              <h2 className="laptop:text-base text-xs font-bold sm:pr-8   xl:text-lg">
                                {el.title}
                              </h2>
                              <p className="text-sm dark:text-gray-400">
                                <p className="text-sm font-bold">
                                  Cantidad : ({el.quantity})
                                </p>
                                <p className="text-sm font-bold">
                                  Talla : {el.talla}
                                </p>
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-base font-semibold xl:text-lg">
                                S/{el.itemTotal.toFixed(0)}
                              </p>
                            </div>
                          </div>
                          <div className="flex divide-x text-sm"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                </Link>
              ))}
          </div>

          <p className="mt-8 text-lg font-medium">Métodos de envío</p>
          <form className="mt-5 ">
            <div className="relative ">
              <div className="flex flex-col ">
                <Radio
                  value="envio"
                  checked={tipoEntrega === "envio"}
                  onChange={(e) => setTipoEntrega(e.target.value)}
                  name="description"
                  color="blue"
                  label={
                    <div>
                      <Typography color="white" className="font-medium">
                        ENVÍO A DESTINO
                      </Typography>
                      <Typography
                        variant="small"
                        color="white"
                        className="text-sm font-normal"
                      >
                        plazo máximo en 3 dias
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: "-mt-5",
                  }}
                />

                <Radio
                  checked={tipoEntrega === "recojo"}
                  value="recojo"
                  onChange={(e) => setTipoEntrega(e.target.value)}
                  color="blue"
                  name="description"
                  defaultChecked
                  label={
                    <div>
                      <Typography color="white" className=" font-medium">
                        RECOJO EN TIENDA
                      </Typography>
                      <Typography
                        variant="small"
                        color="white"
                        className="text-sm font-normal"
                      >
                        Recojo en tienda Fritz Sport, Av. Miguel Grau 231, Lima
                        15001
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: "-mt-5",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
        {/* form */}
        <FormPagar tipoEntrega={tipoEntrega} />
      </div>
    </div>
  )
}
