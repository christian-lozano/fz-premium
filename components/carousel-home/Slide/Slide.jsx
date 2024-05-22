"use client"

import { shimmer, toBase64 } from "@/lib/image"

import Appbtn from "../Appbtn/Appbtn"
import "./Slide.css"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

import { Button } from "@/components/ui/button"
import PromoImageSec from "@/components/promo-image/promo-image"

const Slide = (props) => {
  const { className } = props

  return (
    <div className={className}>
      {props.slide.img2 && (
        <div className="img2">
          <img src={urlForImage(props.slide.img2.asset._ref).url()} alt="" />
        </div>
      )}
      {!props.slide.activebuttontitle && (
        <div className="slidecont ">
          <div className="slidetitles">
            <div className="">
              Un ícono del running de los 70 que cautiva el <br /> street style
              en todo el mundo.
            </div>
            <div className="title text-2xl font-bold uppercase  xl:text-5xl">
              SL 72
            </div>
          </div>
          <Link href={props.slide.link}>
            <Button className="mt-2 rounded-none uppercase">
              Comprar Ahora
            </Button>
          </Link>
        </div>
      )}
      <Link href={props.slide.urlslider} className="img-main">
        <img
          src={
            "https://cdn.sanity.io/images/ibvmpbc1/production/62d090cdd2fba7597cb3b548f9c747ff83aa1b4a-1920x853.jpg"
          }
          alt=""
        />

        <img
          src={
            "https://cdn.sanity.io/images/ibvmpbc1/production/6d4c1d466cfd6359ca968e8e6923b3d20c6b9dd2-960x960.jpg"
          }
          className="xl:hidden"
          alt=""
        />
        <img
          src={
            "https://cdn.sanity.io/images/ibvmpbc1/production/e57e3a1175d6fc05fdb93dbb22271caf6e3092fb-600x771.jpg"
          }
          className="md:hidden lg:hidden xl:hidden"
          width={600}
          height={771}
          alt=""
        />
      </Link>

      {/* <img src={props.slide.img2.asset._ref} alt="" />      */}
    </div>
  )
}
export default Slide
