"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import departamentos from "@/json/departamentos.json"
import distritos from "@/json/distritos.json"
import provincias from "@/json/provincias.json"
import { urlForImage } from "@/sanity/lib/image"
import { Option, Select, Spinner } from "@material-tailwind/react"
import { useCart } from "react-use-cart"

import { Input } from "../ui/input"

const formData = {
  title: "Detalles de Pago",
  subtitle: "Complete su pedido proporcionando sus datos de pago.",
  inputs: [
    {
      label: "Nombre",
      name: "nombre",
      placeholder: "Nombre",
      type: "text",
    },
    {
      label: "Apellido",
      name: "apellido",
      placeholder: "Apellido",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      label: "Documento de identidad",
      name: "documento",
      placeholder: "Documento de identidad",
      type: "text",
    },
    {
      label: "Teléfono",
      name: "telefono",
      placeholder: "Teléfono",
      type: "tel",
    },
    {
      label: "Dirección",
      name: "direccion",
      placeholder: "Dirección",
      type: "text",
    },
    {
      label: "Información Adicional",
      name: "adicional",
      placeholder: "Información Adicional",
      type: "text",
    },
  ],
}

function Loading({ disableLoadAddProduct = true }) {
  return (
    <Spinner
      // color="black"
      className={` absolute left-7 top-3  h-7 w-7  ${
        !disableLoadAddProduct ? "hidden" : "block"
      }`}
      onResize={undefined}
      onResizeCapture={undefined}
    />
  )
}
export default function FormPagar({ tipoEntrega }) {
  const router = useRouter()

  const [allValues, setAllValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    telefono: "",
    direccion: "",
    comprobante: "Boleta",
    ruc: "",
    departamento: "",
    provincia: "",
    distrito: "",
    adicional: "",
    checkTerminos: false,
    estado: "pendiente",
    razon: "Fritz Sport",
  })

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
  }
  const { items, cartTotal } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [validate, setValidate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [precioDelibery, setPrecioDelibery] = useState(0)

  useEffect(() => {
    if (tipoEntrega === "recojo") {
      setPrecioDelibery(0)
    } else {
      if (
        allValues.provincia === "ancon lima" &&
        allValues.departamento === "Lima"
      ) {
        setPrecioDelibery(10)
      } else {
        setPrecioDelibery(20)
      }
    }
  }, [tipoEntrega, allValues.provincia])

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const [departamento, setDepartamento] = useState([])
  const [provincia, setProvincia] = useState([])

  const handlesubmit = async () => {
    let productosCantidad = items.map((el, i) => {
      let productos = {
        id: el.idsanity,
        category_id: el.talla,
        title: el.name,
        type: el.objectID,
        description: el.id,
        picture_url: urlForImage(el.image).url(),
        quantity: el.quantity,
        unit_price: Number(el.price.toFixed(1)),
      }

      return productos
    })
    productosCantidad[0].unit_price += precioDelibery
    setValidate(false)
    setLoading(true)
    let dataPago = {
      productos: productosCantidad,
      tipoEntrega: tipoEntrega,
      id_mercado_pago: "01",
      razon: allValues.razon,
      estado: allValues.estado,
      nombres: allValues.nombre,
      apellido: allValues.apellido,
      email: allValues.email,
      documento: allValues.documento,
      telefono: allValues.telefono,
      comprobante: allValues.comprobante,
      direccion: allValues.direccion,
      ruc: allValues.ruc,
      departamento:allValues.departamento,
      distrito: allValues.distrito,
      provincia: allValues.provincia,
      adicional: allValues.adicional,
      cartTotal: cartTotal + precioDelibery,
    }

    try {
      const res = await fetch(`/api/checkout`, {
        method: "POST",
        body: JSON.stringify(dataPago),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
          "Access-Control-Allow-Headers": "*",
        },
      })
      const data = await res.json()

      // if (res.status === 200) {
      //   let dataEnvioMongoUser = {
      //     tipoEntrega: tipoEntrega,
      //     razon: allValues.razon,
      //     id_payer: data.id_payer,
      //     id_mercado_pago: "01",
      //     estado: allValues.estado,
      //     nombres: allValues.nombre,
      //     apellidos: allValues.apellido,
      //     email: allValues.email,
      //     documento: allValues.documento,
      //     cart_total: cartTotal + precioDelibery,
      //     telefono: allValues.telefono,
      //     departamento: allValues.departamento,
      //     distrito: allValues.distrito,
      //     provincia: allValues.provincia,
      //     direccion: allValues.direccion,
      //     comprobante: allValues.comprobante,
      //     info_adicional: allValues.adicional,
      //     ruc: allValues.ruc,
      //     productos: productosCantidad,
      //   }

      //   const resp = await fetch(`/api/mongo`, {
      //     method: "POST",
      //     body: JSON.stringify(dataEnvioMongoUser),
      //     headers: {
      //       "Content-Type": "application/json",
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      //       "Access-Control-Allow-Headers": "*",
      //     },
      //   })

        if (res.status === 200) {
          router.push(data.url)
        }
        // const dato = await res.json()
        setLoading(false)

        // setLoadingMercadoPago(false)
        // router.refresh()
        //test
        // alert(data.msg)
      // }
      if (res.status === 401) {
        alert("Ingresa un Email Valido")
        setLoading(true)

        // setLoadingMercadoPago(false)

        // router.refresh()
        // alert(data.msg)
      }
      // console.log(data);
    } catch (error) {
      console.log(error.message)
      setLoading(true)
    }
  }
  useEffect(() => {
    if (
      allValues.nombre.length >= 1 &&
      allValues.apellido.length >= 1 &&
      allValues.email.length >= 5 &&
      allValues.documento.length >= 1 &&
      allValues.telefono.length >= 1 &&
      allValues.comprobante.length >= 2 &&
      allValues.direccion.length >= 3 &&
      allValues.departamento.length >= 2 &&
      allValues.provincia.length >= 2 &&
      allValues.distrito.length >= 1 &&
      // allValues.adicional.length >= 1 &&
      allValues.checkTerminos &&
      items.length > 0
    ) {
      if (allValues.comprobante === "Factura" && allValues.ruc.length === 0) {
        setValidate(false)
      } else {
        setValidate(true)
      }
    } else {
      setValidate(false)
    }

    // if (allValues.provincia === "Lima") {
    //   setPrecioDelibery(10)
    // } else {
    //   setPrecioDelibery(20)
    // }
  }, [allValues])

  const handlerDepartamento = (data, id) => {
    setDepartamento(data)
    setAllValues({
      ...allValues,
      departamento: departamentos.find((el) => el.id_ubigeo === id)
        .nombre_ubigeo,
    })
  }
  const handlerProvincia = (data, id) => {
    setProvincia(data)

    setAllValues({
      ...allValues,
      provincia: data[0].buscador_ubigeo,
    })
  }

  return (
    <div className="mt-10  px-4 pt-8  lg:mt-0">
      <p className="text-xl font-medium">{formData.title}</p>
      <p className="text-gray-400">{formData.subtitle}</p>
      <div>
        <div className=" grid xl:grid-cols-2 xl:gap-4">
          {formData.inputs.map((el) => (
            <div>
              <label
                htmlFor="card-no"
                className="mb-2 mt-4 block text-sm font-medium"
              >
                {el.label === "Información Adicional"
                  ? el.label + "  " + " *no obligatorio"
                  : el.label}
              </label>
              <div className="flex justify-between">
                <div className="relative w-full shrink-0 px-1 xl:px-5">
                  <Input
                    type={el.tipo}
                    name={el.name}
                    placeholder={el.placeholder}
                    onChange={(e) => changeHandler(e)}
                  />
                  <span className="validationFormRed ml-1 text-sm">
                    {allValues[`${el.name}`].length === 0 &&
                      `${
                        el.name === "adicional"
                          ? ""
                          : `la propiedad ${el.name} es necesaria`
                      }`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* boleta factura */}
        <div className="flex justify-center pt-5">
          <div className="flex gap-10">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Boleta"}
                  value="Boleta"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="react"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="react"
              >
                Boleta
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="react"
              >
                <input
                  onChange={(e) => changeHandler(e)}
                  name="comprobante"
                  checked={allValues.comprobante === "Factura"}
                  value="Factura"
                  type="radio"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id="factura"
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="react"
              >
                Factura
              </label>
            </div>
          </div>
        </div>
        {allValues.comprobante === "Factura" && (
          <>
            <label
              htmlFor="billing-address"
              className="mb-2 mt-4 block text-sm font-medium"
            >
              RUC
            </label>
            <div className="mb-3 flex flex-col sm:flex-row ">
              <div className="relative w-full shrink-0 sm:w-full">
                <Input
                  type="text"
                  name="ruc"
                  placeholder="RUC"
                  onChange={(e) => changeHandler(e)}
                />
                <span className="validationFormRed ml-1 text-sm">
                  {allValues.ruc === "null" ||
                    (allValues.ruc.length === 0 &&
                      `la propiedad Ruc es necesaria`)}
                </span>
              </div>
            </div>
          </>
        )}
        {/* Departamentos */}
        <div className="flex flex-col sm:flex-row">
          <label
            htmlFor="card-holder"
            className="mb-2 mt-4 block w-full text-sm  font-medium "
          >
            <Select
              onChange={(e) => handlerDepartamento(provincias[e], e)}
              nonce={undefined}
              name="departamento"
              label="Departamento"
              className={`border  ${allValues.provincia.length === 0 && " "}`}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              {departamentos.map((el) => (
                <Option key={el.id_ubigeo} value={el.id_ubigeo}>
                  {el.nombre_ubigeo}
                </Option>
              ))}
            </Select>

            <span className="validationFormRed ml-1 text-sm">
              {allValues.provincia.length === 0 &&
                `la propiedad Departamento es necesaria`}
            </span>
          </label>
        </div>

        {/* Provincias */}
        <div className="flex flex-col sm:flex-row">
          <label
            htmlFor="card-holder"
            className="mb-2 mt-4 block w-full text-sm  font-medium "
          >
            <Select
              onChange={(e) => handlerProvincia(distritos[e], e)}
              nonce={undefined}
              name="provincia"
              label="Provincia"
              className={`border  ${allValues.provincia.length === 0 && " "}`}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              {departamento.map((el) => (
                <Option key={el.id_ubigeo} value={el.id_ubigeo}>
                  {el.nombre_ubigeo}
                </Option>
              ))}
            </Select>

            <span className="validationFormRed ml-1 text-sm">
              {allValues.provincia.length === 0 &&
                `la propiedad Provincia es necesaria`}
            </span>
          </label>
        </div>
        {/* Distritos */}
        <div className="flex flex-col sm:flex-row">
          <label
            htmlFor="card-holder"
            className="mb-2 mt-4 block w-full text-sm  font-medium "
          >
            <Select
              onChange={(e) => setAllValues({ ...allValues, distrito: e })}
              nonce={undefined}
              name="distrito"
              label="Distrito"
              className={`border  ${allValues.provincia.length === 0 && " "}`}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              {provincia.map((el) => (
                <Option key={el.id_ubigeo} value={el.nombre_ubigeo}>
                  {el.nombre_ubigeo}
                </Option>
              ))}
            </Select>

            <span className="validationFormRed ml-1 text-sm">
              {allValues.distrito.length === 0 &&
                `la propiedad Distrito es necesaria`}
            </span>
          </label>
        </div>

        {/* <!-- Total --> */}
        {domLoaded && (
          <div className="border-b-2 pb-2">
            <div className="mt-6 border-y py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium ">Subtotal</p>
                <p className="font-semibold ">S/{cartTotal.toFixed(0)}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between ">
              <p className="text-sm font-medium ">Precio de Envió</p>
              <p className="text-base font-semibold ">S/{precioDelibery}</p>
            </div>
            <div className="mt-6 flex items-center justify-between ">
              <p className="text-sm font-medium">Total</p>
              <p className="text-2xl font-semibold ">
                S/{(cartTotal + precioDelibery).toFixed(0)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="my-3 hidden text-center text-xs text-gray-400 xl:block">
        Tus datos personales se utilizarán para procesar tu pedido, mejorar tu
        experiencia en esta web y otros propósitos descritos en nuestra
        <Link
          href="/pyp"
          target="_blank"
          className="mr-1 text-gray-400 underline focus:outline-none "
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>
          política de privacidad
        </Link>
        y nuestros
        <Link
          href="/tyc"
          target="_blank"
          className="mr-1 text-gray-400 underline focus:outline-none "
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>términos y condiciones.
        </Link>
      </div>

      <div className=" laptop:mt-0 z-10  mt-3 flex items-center justify-center xl:flex">
        <div className="inline-flex items-center">
          <label
            className="relative flex cursor-pointer items-center rounded-full p-3"
            htmlFor="checkbox-8"
            data-ripple-dark="true"
          >
            <input
              // checked={checkoutPago}
              type="checkbox"
              className={`before:content[''] ${
                !allValues.checkTerminos && "border-red-500"
              }  peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border  transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10`}
              id="checkbox-8"
              onChange={(e) =>
                setAllValues({ ...allValues, checkTerminos: e.target.checked })
              }
            />
            <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-red-200  opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </label>
        </div>
        <span className="text-sm text-gray-400  "> Acepto los</span>{" "}
        <Link
          href="/tyc"
          target="_blank"
          className="mr-1 text-sm text-gray-400 underline  focus:outline-none "
          rel="noreferrer"
        >
          <i className="mdi mdi-beer-outline mr-1 "></i>Términos & Condiciones.
        </Link>
      </div>
      {/* ---- */}

      {domLoaded && (
        <button
          disabled={!validate}
          onClick={handlesubmit}
          className={`mb-8 mt-4 w-full  cursor-pointer rounded-md ${
            !validate ? "bg-gray-500 text-red-500 " : " bg-white text-black"
          } b px-6 py-3  font-medium `}
        >
          {items.length === 0
            ? "No tienes Productos en el Carrito"
            : " Realizar pedido"}
          <Loading disableLoadAddProduct={loading} />
        </button>
      )}
    </div>
  )
}

