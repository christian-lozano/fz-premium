import { useEffect, useState } from "react"
import Link from "next/link"

import NavMenuDesktop from "./nav-menu-desktop"
import NavMenuHoverDesktop from "./nav-menu-hover-desktop"
import NavSearch from "./nav-search"
import NavTop from "./nav-top"

const dataHeader = {
  menuSubmenu: [
    {
      id: "mujer",
      titulo: "Mujer",
      url: "tienda?genero=mujer",

      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "tienda?genero=mujer&category=zapatilla",
            },
            {
              id: "3",
              title: "Terrex",
              url: "tienda?genero=mujer&category=terrex",
            },
            {
              id: "5",
              title: "Urbano",
              url: "tienda?genero=mujer&category=urbano",
            },
            {
              id: "6",
              title: "Sandalias",
              url: "tienda?genero=mujer&category=sandalias",
            },
            {
              id: "7",
              title: "Calzado de Plataforma",
              url: "tienda?genero=mujer&category=plataforma",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "tienda?genero=mujer&category=ropa",
            },
            {
              id: "10",
              title: "Polos",
              url: "tienda?genero=mujer&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "tienda?genero=mujer&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "tienda?genero=mujer&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "tienda?genero=mujer&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "tienda?genero=mujer&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "tienda?tipo=accesorios&genero=mujer",
            },
            {
              id: "14",
              title: "Bolsos",
              url: "tienda?tipo=accesorios&genero=mujer&category=bolso",
            },
            {
              id: "15",
              title: "Mochilas",
              url: "tienda?tipo=accesorios&genero=mujer&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "tienda?tipo=accesorios&genero=mujer&category=gorra",
            },
          ],
        },
      ],
    },
    {
      id: "Hombre",
      titulo: "Hombre",
      url: "tienda?genero=hombre",
      infoNav: [
        {
          categoria: [
            {
              id: "1",
              title: "Ver Todas las Zapatillas",
              url: "tienda?tipo=calzado&genero=hombre&category=zapatilla",
            },
            {
              id: "3",
              title: "Terrex",
              url: "tienda?tipo=calzado&genero=hombre&category=terrex",
            },
            {
              id: "5",
              title: "Urbano",
              url: "tienda?tipo=calzado&genero=hombre&category=urbano",
            },
            {
              id: "6",
              title: "Sandalias",
              url: "tienda?tipo=calzado&genero=hombre&category=sandalia",
            },
          ],
        },
        {
          categoria: [
            {
              id: "9",
              title: " Ropa",
              url: "tienda?tipo=ropa&genero=hombre",
            },
            {
              id: "10",
              title: "Polos",
              url: "tienda?tipo=ropa&genero=hombre&category=polo",
            },
            {
              id: "12",
              title: "Casacas",
              url: "tienda?tipo=ropa&genero=hombre&category=casaca",
            },
            {
              id: "12",
              title: "Poleras",
              url: "tienda?tipo=ropa&genero=hombre&category=polera",
            },
            {
              id: "12",
              title: "Pantalones",
              url: "tienda?tipo=ropa&genero=hombre&category=pantalon",
            },
            {
              id: "12",
              title: "Buzos",
              url: "tienda?tipo=ropa&genero=hombre&category=buzo",
            },
          ],
        },
        {
          categoria: [
            {
              id: "13",
              title: "Accesorios",
              url: "tienda?tipo=accesorios&genero=hombre",
            },

            {
              id: "15",
              title: "Mochilas",
              url: "tienda?tipo=accesorios&genero=hombre&category=mochila",
            },
            {
              id: "16",
              title: "Gorras",
              url: "tienda?tipo=accesorios&genero=hombre&category=gorra",
            },
          ],
        },
      ],
    },

    {
      id: "ninos",
      titulo: "Niños",
      url: "tienda?genero=niños",
      infoNav: [
        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niño",
              url: "tienda?tipo=calzado&genero=niño",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "tienda?tipo=calzado&genero=niño&category=zapatilla",
            },

            {
              id: "369",
              title: "Sandalias",

              url: "tienda?tipo=calzado&genero=niño&category=sandalia",
            },
          ],
        },

        {
          categoria: [
            {
              id: "35",
              title: "Calzado Niña",
              url: "tienda?tipo=calzado&genero=niña",
            },
            {
              id: "36",
              title: "Zapatillas",
              url: "tienda?tipo=calzado&genero=niña&category=zapatilla",
            },
            {
              id: "39",
              title: "Sandalias",
              url: "tienda?tipo=calzado&genero=niña&category=sandalia",
            },
          ],
        },
      ],
    },
    {
      id: "outlet",
      titulo: "SALE",
      url: "outlet",
    },
    {
      id: "tienda",
      titulo: "Tienda",
      url: "tienda",
    },
    {
      id: "Ntiendas",
      titulo: "Ubicanos",
      url: "#",
    },
  ],
}

export function NavNavigation({
  children,
  setActiveSearchDesk,
  activeSearchDesk,
}) {
  const [activeHoverNavDesktop, setActiveHoverNavDesktop] = useState()

  // desktop nav
  const [hoverMenu, setHoverMenu] = useState(dataHeader.menuSubmenu[0].infoNav)
  const [andler, setAndler] = useState(false)
  useEffect(() => {
    if (!andler) {
      setActiveHoverNavDesktop(undefined)
    }
  }, [andler])

  const handleHover = (index) => {
    setActiveHoverNavDesktop(index)

    setAndler(true)
    setHoverMenu(dataHeader.menuSubmenu[index].infoNav)
  }

  return (
    <ul className="flex w-full items-center justify-around">
      <div>{children}</div>
      <div className=" grid grid-flow-col items-center gap-x-10 2xl:gap-x-16">
        <NavMenuDesktop
          handleHover={handleHover}
          setAndler={setAndler}
          dataHeader={dataHeader}
          activeHoverNavDesktop={activeHoverNavDesktop}
        />
      </div>
      <div className="xl:hidden">
        <NavTop>
          <NavSearch />
        </NavTop>
      </div>
      <div className="hidden xl:block">
        <NavTop
          setActiveSearchDesk={setActiveSearchDesk}
          activeSearchDesk={activeSearchDesk}
        >
          <NavSearch />
        </NavTop>
      </div>
      <NavMenuHoverDesktop
        andler={andler}
        setAndler={setAndler}
        hoverMenu={hoverMenu}
      />
    </ul>
  )
}
