import React from "react"
import Link from "next/link"

export default function VideoHome({ url }) {
  return (
    <>
      <Link href={"/products/zapatillas-sl-72/IE3427"}>
        <video
          muted={true}
          webkit-playsinline={true}
          playsInline={true}
          preload="auto"
          autoPlay={true}
          loop={true}
          className="laptop:h-full hidden  w-[100vw]  xl:block"
        >
          <source
            src={`https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/originals_ss24_sl72_mh_2_d_26f1c3929a.mp4`}
            type="video/mp4"
          />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
          <track
            src="captions_es.vtt"
            kind="captions"
            srcLang="es"
            label="spanish_captions"
          />
        </video>
      </Link>
      <Link href={"/products/zapatillas-sl-72/IE3427"}>
        <video
          muted={true}
          webkit-playsinline={true}
          playsInline={true}
          preload="auto"
          autoPlay={true}
          loop={true}
          className="laptop:h-full block   w-[100vw]  xl:hidden"
        >
          <source
            src={`https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_600,w_600/originals_ss24_sl72_mh_m_bd2c93ba87.mp4`}
            type="video/mp4"
          />
          <track
            src="captions_en.vtt"
            kind="captions"
            srcLang="en"
            label="english_captions"
          />
          <track
            src="captions_es.vtt"
            kind="captions"
            srcLang="es"
            label="spanish_captions"
          />
        </video>
      </Link>
    </>
  )
}
