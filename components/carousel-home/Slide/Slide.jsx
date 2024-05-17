"use client"

import { shimmer, toBase64 } from "@/lib/image"

import Appbtn from "../Appbtn/Appbtn"
import "./Slide.css"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

const Slide = (props) => {
  const { className } = props

  return (
    <div className={className}>
      {props.slide.img2 && (
        <div className="img2">
          <img src={urlForImage(props.slide.img2.asset._ref).url()} alt="" />
        </div>
      )}
      {props.slide.activebuttontitle && (
        <div className="slidecont ">
          <div className="slidetitles">
            <h3 className=" text-white">{props.slide.subtitulo}</h3>
            <h1 className="text-2xl font-bold uppercase text-white">
              {props.slide.titulo}
            </h1>
          </div>
          <Link href={props.slide.link}>
            <Appbtn
              text={props.slide.btntext}
              className="capitalize"
              icon="fal fa-chevron-right"
            />
          </Link>
        </div>
      )}
      <Link href={props.slide.urlslider} className="img-main">
        <img src={urlForImage(props.slide.imgdeskt.asset._ref).url()} alt="" />
        <img
          src={urlForImage(props.slide.imgtab.asset._ref).url()}
          className="xl:hidden"
          alt=""
        />
        <img
          src={urlForImage(props.slide.imgmob.asset._ref).url()}
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
