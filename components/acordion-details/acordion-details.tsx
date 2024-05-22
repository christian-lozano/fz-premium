"use client"

import React from "react"
import { urlForImage } from "@/sanity/lib/image"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react"

import { SanityProduct } from "@/config/inventory"

interface props {
  id: Number
  open: Number
}
interface Props {
  product: SanityProduct
}
function Icon({ id, open }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export function AccordionDetails({ product }: Props) {
  const [open, setOpen] = React.useState(0)

  const handleOpen = (value: React.SetStateAction<number>) =>
    setOpen(open === value ? 0 : value)

  return (
    <>
      <div className="mb-16 flex justify-center">
        <div className="flex max-w-5xl flex-col ">
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="p-10 text-lg text-black dark:text-white"
            >
              Descripción
            </AccordionHeader>
            <AccordionBody className="p-10 text-black dark:text-white">
              <div className="flex flex-col items-center justify-around gap-5 xl:flex-row">
                <div>
                  <div className="mb-5 font-bold 2xl:text-3xl ">
                    {product.name}
                  </div>
                  <div className="xl:pr-10 ">{product.description}</div>
                </div>
                <div>
                  <img src={urlForImage(product.images[1]).url()} alt="" />
                </div>
              </div>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            nonce={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              className="p-10 text-lg text-black dark:text-white"
            >
              Detalles
            </AccordionHeader>
            <AccordionBody className="p-10 text-black dark:text-white">
              <div className="grid grid-flow-row gap-y-2 xl:grid-cols-2 xl:gap-4 xl:text-base">
                <li>Ajuste clásico</li>
                <li>Sistema de amarre de pasadores</li>
                <li>Parte superior de gamiza y currentColor</li>
                <li>Forro interior sintético</li>
                <li>Suela tipo cupsole de caucho</li>
                <li>Color del artículo: Preloved Green / Core Black / Gum</li>
                <li>Número de artículo: {product.sku}</li>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      {/* <Accordion
        open={open === 3}
        icon={<Icon id={3} open={open} />}
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion> */}
    </>
  )
}
