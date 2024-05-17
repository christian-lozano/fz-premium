import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct, SanitySlider } from "@/config/inventory"
import Benefit from "@/components/benefits/Benefit"
import Carousel from "@/components/carousel-home/Carousel"
import HombreMujer from "@/components/hombre-mujer/hombre-mujer"
import MainFiltroGenero from "@/components/hombre-mujer/main-filtro-genero"
import MainTab from "@/components/tabs-home-genero/main-tab"

import "@/styles/globals.css"
import { Metadata } from "next"

import PromoImageSec from "@/components/card-gif/card-gif"
import CardGif from "@/components/card-gif/card-gif"
import ContedorCarouselProduct from "@/components/carousel-product/contedor-carousel-product"
import { DialogSizes } from "@/components/comunicado/comunicado"
import PromoImageGrid from "@/components/promo-image-grid/promo-image-grid"
import PromoImage from "@/components/promo-image/promo-image"
import VideoHome from "@/components/video/video"

export const metadata: Metadata = {
  title: "Fritz Sport Perú Tienda oficial | Zapatillas y ropa deportiva",
  description:
    "Bienvenido(a) al sitio oficial de Fritz Sport Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
  openGraph: {
    title: " Fritz Sport Perú Tienda oficial | Zapatillas y ropa deportiva",
    description:
      "Bienvenido(a) al sitio oficial de Fritz Sport Perú. Encuentra en esta tienda online zapatillas y ropa deportiva, creados con tecnología y diseño. ¡Conoce más!",
    url: `${process.env.URL_DOMINIO}`,
    siteName: "Fritz Sport",
    images: [
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,
        width: 800,
        height: 600,
        alt: `Fritz Sport share Imagen`,
      },
      {
        url: `${process.env.URL_DOMINIO}/ecommerce-share.jpg`,

        width: 1200,
        height: 630,
        alt: `Fritz Sport share Imagen`,
      },
    ],
  },
}

interface Props {
  searchParams: {
    date?: string
    priceecommerce?: string
    color?: string
    category?: string
    size?: string
    genero?: string
    search?: string
    sku?: string
  }
}
const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    ),
    title: "Envío gratis",
    text: "¡Envío gratis en todos los pedidos superiores a S/500!",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
    title: "Pago Seguro",
    text: "Compre con seguridad y protección",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
        />
      </svg>
    ),
    title: "100% Satisfactorio",
    text: "30 días de garantía de devolución de dinero",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
        />
      </svg>
    ),
    title: "Servicio Adaptable",
    text: "Servicio al cliente confiable",
  },
]

const dataCabeceraTab = [
  {
    id: "566",
    titulo: "All",
  },
  {
    id: "566a",
    titulo: "Hombre",
  },
  {
    id: "5s66",
    titulo: "Mujer",
  },
  {
    id: "5266",
    titulo: "Niños",
  },
]

export default async function Page({ searchParams }: Props) {
  const productosGenero = async (genero: String, cantidad: String) => {
    const { date = "desc", priceecommerce, search } = searchParams

    const order = `| order(_id) [0...${cantidad}]`

    const productFilter = `_type == "product"  && razonsocial match "fritzsport"`

    const generoFilterHombre = genero ? `&& genero match "${genero}"` : ""

    const filter = `*[${productFilter}${generoFilterHombre}]`

    // await seedSanityData()
    const products = await client.fetch<
      SanityProduct[]
    >(groq`${filter} ${order} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      priceecommerce,
      description,
      genero,
      marca,
      tallas,
      descuento,
      preciomanual,
      "slug":slug.current
    }`)

    return products
  }

  const slider = await client.fetch<SanitySlider[]>(
    groq`*[_type == "home"] {
      slider
    }`
  )
  const bannerGenero = await client.fetch<SanitySlider[]>(
    groq`*[_type == "home"] {
      bannergenero
    }`
  )
  const categoriaSlider = await client.fetch<SanitySlider[]>(
    groq`*[_type == "home"] {
      semifiltro
    }`
  )
  const homeVideo = await client.fetch<SanitySlider[]>(groq`*[_type == "home"] {
    videohome
  }`)
  const promoHome = await client.fetch<
    SanitySlider[]
  >(groq`*[_type == "home"] [0] {
    promo
  }`)

  //filtro y cantidad
  const productosHombre = await productosGenero("hombre", "8")
  const productosMujer = await productosGenero("mujer", "8")
  const productosNinos = await productosGenero("niños", "8")
  const productosAll = await productosGenero("", "8")

  const dataProductTab = {
    productosHombre,
    productosMujer,
    productosNinos,
    productosAll,
  }

  const dataSemifiltroHome = [
    {
      filtro: "hombre",
      cantidadSlider: "10",
      sliderTitle: "Productos Hombre",
      generoImage:
        "https://thebox.com.pe/cdn/shop/files/HOMBRE-BOTON.jpg?v=1702081086",
      categorias: [
        {
          img: "https://thebox.com.pe/cdn/shop/files/ROPADEBANO_8f57c399-8a65-4ee5-88ba-03243890ab56.jpg?v=1702081767",
          title: "Shorts",
          btnText: "Comprar",
        },
        {
          img: "https://thebox.com.pe/cdn/shop/files/HOMBRE_BOTON_WEB_SANDALIAS.png?v=1703691674",
          title: "Sandalias",
          btnText: "Comprar",
        },
        {
          img: "https://thebox.com.pe/cdn/shop/files/HOMBRE_BOTON_WEB_4.png?v=1700524998",
          title: "Zapatillas",
          btnText: "Comprar",
        },
      ],
    },
    {
      filtro: "niños",
      cantidadSlider: "10",
      sliderTitle: "Productos Mujer",

      generoImage:
        "https://thebox.com.pe/cdn/shop/files/MUJER_BOTON_WEB_1_5e6a39fa-dc14-4fe4-9f2d-609fe3ba5638.png?v=1703806390",
      categorias: [
        {
          img: "https://thebox.com.pe/cdn/shop/files/MUJER_BOTON_WEB_2.png?v=1700524998",
          title: " swimwear",
          btnText: "Comprar ",
        },
        {
          img: "https://thebox.com.pe/cdn/shop/files/MUJER_Boton_WEB_SANDALIAS.png?v=1703691720",
          title: "sandalias",
          btnText: "Comprar ",
        },
        {
          img: "https://thebox.com.pe/cdn/shop/files/MUJER_Boton_WEB_SANDALIAS.png?v=1703691720",
          title: "zapatillas",
          btnText: "Comprar ",
        },
      ],
    },
  ]

  return (
    <div>
      {/* <DialogSizes promoHome={promoHome}></DialogSizes> */}
      <div className="conta">
        <VideoHome url={homeVideo[0]} />

        {/* <Carousel dataSlider={slider[0]} /> */}

        <PromoImage
          urlDesk={
            "https://shop.adidas.jp/creative/202405/MH_AWAYTH_SAMBA_d197b341.jpg"
          }
          urlMob={
            "https://img.adidas.com.hk/resources/2024/4/ADICOLOR/1/614x777.jpg"
          }
          titulo={"samba especial Gazela"}
          subtitulo={"Un original, miles de historias que partieron de él."}
          url={"/tienda"}
          bottom={false}
        />

        {/* <HombreMujer bannerGenero={bannerGenero[0]} /> */}
        {/* <MainFiltroGenero dataSemifiltroHome={categoriaSlider[0]} /> */}
        <main className=" xl:px-6">
          <MainTab
            dataCabeceraTab={dataCabeceraTab}
            dataProductTab={dataProductTab}
          />
          <PromoImage
            urlDesk={
              "https://img.adidas.com.hk/resources/2024/5/korn/1920x720.gif"
            }
            urlMob={
              "https://img.adidas.com.hk/resources/2024/5/korn/kv750x960.gif"
            }
            titulo={"samba especial Gazela"}
            subtitulo={"Un original, miles de historias que partieron de él."}
            url={"/tienda"}
            bottom={false}
          />
          <div className="grid w-full grid-cols-1 xl:grid-cols-2 xl:gap-x-10">
            <PromoImage
              urlDesk={
                "https://img.adidas.com.hk/resources/2024/5/BAD/BAD%20BUNNY-feature-pc924x613.jpg"
              }
              urlMob={
                "https://img.adidas.com.hk/resources/2024/5/BAD/BAD%20BUNNY-feature-mob654x960.jpg"
              }
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
              bottom={true}
            />
            <PromoImage
              bottom={true}
              urlDesk={
                "https://img.adidas.com.hk/resources/2024/4/SL72/SL-72-feature-pc924x613.gif"
              }
              urlMob={
                "https://img.adidas.com.hk/resources/2024/4/SL72/SL-72-feature-mob654x960.gif"
              }
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
            />
          </div>

          <div className="mt-20 grid grid-cols-2 gap-2 xl:grid-cols-4">
            <PromoImageGrid
              urlImg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/Samba_B_Log_Copy_b0d6dac1a9.png"
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
            />
            <PromoImageGrid
              urlImg="https://brand.assets.adidas.com/image/upload/f_gif,fl_lossy,q_auto/4351906_CAM_Onsite_Terrace_SS_24_SK_PLP_Teaser_Carousel_1_Copy_b87dfbe3a0.gif"
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
            />
            <PromoImageGrid
              urlImg="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/fw23_bad_bunny_campus_launch_confirmed_glp_k_tc_d_f57ee8e7e0.jpg"
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
            />

            <PromoImageGrid
              urlImg="https://shop.adidas.jp/creative/202404/T_car_SS24_T-toe_gazelle_62b90abb.jpg"
              titulo={"samba especial Gazela"}
              subtitulo={"Un original, miles de historias que partieron de él."}
              url={"/tienda"}
            />
          </div>

          <div className="grid h-full grid-cols-2  items-center justify-center xl:flex xl:justify-around ">
            {benefits.map((el, i) => (
              <Benefit key={i} benefits={el}></Benefit>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}