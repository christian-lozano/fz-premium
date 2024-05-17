import React from "react"

import { Button } from "../ui/button"

interface Props {
  urlDesk: string
  urlMob: string
  titulo: string
  subtitulo: string
  url: string
  bottom: Boolean
}
export default function PromoImageSec({
  urlDesk,
  urlMob,
  titulo,
  subtitulo,
  url,
  bottom,
}: Props) {
  return (
    <div className="relative my-10 flex  w-full flex-col items-center justify-center xl:block">
      <img src={urlDesk} alt="" className="hidden xl:block" />
      <img src={urlMob} alt="" className="block h-full xl:hidden" />
      {bottom ? (
        <div className="mt-2">
          <h3 className="font-extrabold uppercase xl:text-2xl">{titulo}</h3>
          <p className="mt-1">{subtitulo}</p>
          <Button className="mt-5 rounded-none uppercase">Comprar Ahora</Button>
        </div>
      ) : (
        <div className="absolute bottom-5 ml-5 xl:bottom-16  xl:ml-20">
          <h3 className="font-extrabold uppercase xl:text-3xl">{titulo}</h3>
          <p className="mt-3">{subtitulo}</p>
          <Button className="mt-5 rounded-none uppercase">Comprar Ahora</Button>
        </div>
      )}
    </div>
  )
}