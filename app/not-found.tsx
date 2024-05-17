import React from "react"
import Link from "next/link"

import "@/styles/globals.css"

export default function NotFound() {
  // 404
  return (
    <div className="flex w-full justify-center">
      <div className="flex  h-screen items-center ">
        <div className="container flex flex-col items-center justify-between px-5  md:flex-row">
          <div className="mx-8 w-full lg:w-1/2">
            <div className="font-dark mb-8 text-7xl font-extrabold "> 404</div>
            <p className="mb-8 text-2xl font-light leading-normal md:text-3xl">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
            </p>
            <Link href="/tienda">
              <span className="duration-400 inline cursor-pointer rounded-lg border border-transparent bg-black px-5 py-3 text-sm font-medium uppercase leading-5 text-white shadow-2xl transition-all hover:bg-green-600 hover:text-white focus:outline-none active:text-white">
                Buscar Producto
              </span>
            </Link>
          </div>
          <div className="mx-5 my-12 w-full lg:flex lg:w-1/2 lg:justify-end">
            <img
              src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg"
              className=""
              alt="Page not found"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
