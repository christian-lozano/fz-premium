"use client"

import { client } from "@/sanity/lib/client"

import "@/styles/exito.css"
import { useEffect, useState } from "react"
import { notFound } from "next/navigation"
import { PatchSelection } from "@sanity/client"
import { useCart } from "react-use-cart"



// tr
export default function Page() {
  const { emptyCart } = useCart()

  const [isLoading, setLoading] = useState(true)
  const [dataProductosComprados, setDataProductosComprados] = useState<
    React.SetStateAction<any>
  >({
    nombres: "",
    cart_total: "",
    productos: [],
    tipoEntrega: "",
    provincia: "",
  })
  useEffect(() => {
    emptyCart()
    const urlParams = new URLSearchParams(window.location.search)
    const collection_id = urlParams.get("collection_id")
    const preference_id = urlParams.get("preference_id")
    if (collection_id && preference_id) {
      fetch(`https://api.mercadopago.com/v1/payments/${collection_id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer APP_USR-1458144755191319-042511-bc0b96dc49d504d083e85727d5f8e50a-1360412804`,
        },
      })
        .then((res) => res.json())
        .then(async (resultado) => {
          // setResultado(resultado)
      
          let   resulta = await client
            .patch(String(preference_id))
            .set({ estado: "pagado", id_mercado_pago: collection_id })
            .commit()

          // stock reduce
          if (resultado.additional_info.items && isLoading) {
            setDataProductosComprados(resulta)

            let result = await resultado.additional_info.items.map(
              async (el: {
                id: PatchSelection
                description: string
                quantity: number
              }) => {
                await client
                  .patch(el.id)
                  .dec({
                    [`tallas[_key == \"${el.description}\"].stock`]: Number(
                      el.quantity
                    ),
                  })
                  .commit()

                setLoading(false)
              }
            )
            console.log(result)
          }
          //
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      return notFound()
    }
  }, [])
  if (isLoading)
    return (
      <div className="flex h-[100vh] w-full items-center justify-center text-center">
        {" "}
        <p>{isLoading && "...Procesando tu Pago"}</p>
      </div>
    )

  return (
    <div className="flex  items-center justify-center bg-black">
      <div className="bg-black p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="mx-auto my-6 h-16 w-16 text-green-600"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="text-center text-base font-semibold text-white md:text-2xl">
            ¡Pago Realizado con éxito!
          </h3>
          <p className="my-2 text-white">
            <span className="mr-1 font-bold uppercase">
              {" "}
              {dataProductosComprados.nombres}
            </span>
            Gracias por completar su pago seguro en línea.{" "}
          </p>
          <p className="text-white">Detalles de tu pedido:</p>

          {/* <p className="text-white">
            Nos Estaremos comunicando contigo Para coordinar la entrega de tu
            pedido!
          </p> */}
          <p>
            <div className="mt-5 text-xl">
              Total :S/{dataProductosComprados.cart_total}{" "}
            </div>

            <div className=" grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-1 lg:col-span-3 lg:gap-x-8">
              {dataProductosComprados.productos.map(
                (el: {
                  picture_url: string
                  name: string
                  sku: string
                  cantidad: string | number
                  talla: string | number
                }) => (
                  <div className="flex h-[700px] w-[500px] flex-col  justify-center p-1">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg    group-hover:opacity-75 ">
                      {el.picture_url && (
                        <img
                          width={500}
                          height={500}
                          className="relative "
                          src={el.picture_url}
                          alt=""
                        />
                      )}
                    </div>
                    <div className="mt-2 text-lg font-medium uppercase xl:text-xl">
                      {el.name}
                    </div>
                    <div className="ml-2 flex flex-col items-start justify-between ">
                      {/* <div className="mt-4 text-xs font-medium">
                        Sku: {el.sku}
                      </div> */}
                      <div className="mt-4 text-sm font-medium">
                        Cantidad: {el.cantidad}
                      </div>
                      <div className="mt-4 text-sm font-medium">
                        Talla: {el.talla}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </p>
          <p className="my-5 text-xl uppercase tracking-widest">
            {dataProductosComprados.tipoEntrega === "envio" ? (
              <span>
                NOS ESTAREMOS COMUNICANDO CONTIGO PARA ENVIAR TU PEDIDO , EL
                PLAZO MÁXIMO ES DE{" "}
                {dataProductosComprados.provincia === "ancon lima"
                  ? "3 "
                  : "5 "}
                DIAS hábiles
              </span>
            ) : (
              <span>
                ACÉRCATE A NUESTRA SEDE: <br />
                Fritz Sport, Av. Miguel Grau 231, Lima 15001. <br /> DESPUÉS DE
                48 HORAS DE LUNES A VIERNES DE 10AM A 7PM Y SABADOS DE 9AM A
                12PM PARA EL RECOJO DE TU PEDIDO
              </span>
            )}
          </p>
          <p className="text-white">¡Qué tengas un lindo día!</p>
          <div className="py-10 text-center">
            <a
              href={`${process.env.URL_DOMINIO}/tienda`}
              className="bg-indigo-600 px-12 py-3 font-semibold text-white hover:bg-indigo-500"
            >
              Seguir Comprando
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
