let options = [
  {
    id: 10,
    title: "Calzado",
    icon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    disabled: false,
    to: "/shop",
    children: [
      {
        id: 9,
        title: "Hombre",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 9,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=hombre&category=zapatilla",
          },
          {
            id: 9,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=hombre&category=zapatilla",
          },
          {
            id: 9,
            title: "Sandalias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=hombre&category=sandalia",
          },
          // ,
          // {
          //   id: 9,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20running"
          // }
          // {
          //   id: 9,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Chimpunes",
          // },
          // {
          //   id: 9,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20chimpunes"
          // }
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo",
          // },
          // {
          //   id: 9,
          //   title: "Futbol",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20basquet"
          // }
          ,
        ],
      },
      {
        id: 8,
        title: "Mujer",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 3,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=mujer&category=zapatilla",
          },
          {
            id: 3,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=mujer&category=zapatilla",
          },
          {
            id: 3,
            title: "Sandalias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=mujer&category=sandalia",
          },
          // ,
          // {
          //   id: 3,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20running"
          // }
          // ,
          // {
          //   id: 3,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20chimpunes"

          // }
          // {
          //   id: 3,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"//mujer/calzado/origins?p=1"
          // }
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Zapatillas",
          // },
          // {
          //   id: 9,
          //   title: "Calzado de Plataforma",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Plataforma",
          // },

          // {
          //   id: 3,
          //   title: "Básquet",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas%20basquet"

          // }
          ,
        ],
      },
      {
        id: 7,
        title: "Niños",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 1,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=niños",
          },
          {
            id: 2,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=niños",
          },
          {
            id: 3,
            title: "Sandalias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=sandalia&genero=niños",
          },
        ],
      },
    ],
  },
  // mujer
  {
    id: 20,
    title: "Mujer",
    icon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    disabled: false,
    to: "/shop",
    children: [
      {
        id: 19,
        title: "Calzado",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 3,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=mujer",
          },
          {
            id: 3,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=mujer",
          },
          {
            id: 3,
            title: "Sandalias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=sandalia&genero=mujer",
          },
          // {
          //   id: 3,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas%20running"

          // }
          // ,
          // {
          //   id: 3,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas%20chimpunes"

          // }
          // {
          //   id: 3,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas%20comodo"

          // }
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Zapatillas",
          // },
          // {
          //   id: 9,
          //   title: "Calzado de Plataforma",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Mujer&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Comodo&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Zapatillas",
          // },
          // ,
          // {
          //   id: 3,
          //   title: "Básquet",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20zapatillas%20basquet"

          // }
          ,
          ,
        ],
      },
      // {
      //   id: 18,
      //   title: "Ropa",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 3,
      //       title: "Ver Toda la Ropa",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20ropa"

      //     },
      //     {
      //       id: 3,
      //       title: "Polos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20polos"

      //     },
      //     ,
      //     {
      //       id: 3,
      //       title: "Poleras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20poleras"

      //     },
      //     {
      //       id: 3,
      //       title: "Licras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20licras"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Casacas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20casacas"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Pantalones",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20pantalones"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Camisetas de Futbol",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20camisetas%20futbol"

      //     }
      //     ,
      //     {
      //       id: 9,
      //       title: "Shorts",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20shorts"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Buzos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20buzos"

      //     }
      //   ]
      // },
      // {
      //   id: 17,
      //   title: "Accesorios",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20bolsos"

      //     },
      //     {
      //       id: 1,
      //       title: "Mochilas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20mochilas"

      //     },
      //     {
      //       id: 1,
      //       title: "Guantes",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20guantes"

      //     },
      //     {
      //       id: 1,
      //       title: "Gorras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20gorras"

      //     },
      //     {
      //       id: 1,
      //       title: "Medias",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20medias"

      //     },
      //     {
      //       id: 1,
      //       title: "Tomatodos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20tomatodos"

      //     },
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=mujer%20bolsos"

      //     },
      //   ]
      // },
    ],
  },
  // hombre
  {
    id: 30,
    title: "Hombre",
    icon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    disabled: false,
    to: "/shop",
    children: [
      {
        id: 29,
        title: "Calzado",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 9,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=hombre",
          },
          {
            id: 9,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=calzado&genero=hombre",
          },
          {
            id: 3,
            title: "Sandalias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=sandalia&genero=hombre",
          },
          // ,
          // {
          //   id: 9,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20running"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "?tipo=calzado&genero=hombre",

          // },
          // ,
          // {
          //   id: 9,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20running"
          // }
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5BrefinementList%5D%5BGenero%5D%5B0%5D=Hombre&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B0%5D=Zapatillas&pwa_ecom_ui_template_products%5BrefinementList%5D%5BCategoria%5D%5B1%5D=Comodo",
          // },
          // {
          //   id: 9,
          //   title: "Básquet",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20zapatillas%20basquet"

          // }
        ],
      },
      {
        id: 28,
        title: "Ropa",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 3,
            title: "Ver Toda la Ropa",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?tipo=ropa&genero=hombre",
          },
          {
            id: 3,
            title: "Polos",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=polo",
          },
          ,
          {
            id: 3,
            title: "Poleras",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=polera",
          },
          // {
          //   id: 3,
          //   title: "Licras",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20licras",
          // },
          {
            id: 3,
            title: "Casacas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=casaca",
          },
          {
            id: 3,
            title: "Pantalones",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=pantalon",
          },
          {
            id: 3,
            title: "Camisetas de Futbol",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=camiseta",
          },
          {
            id: 9,
            title: "Shorts",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=shorts",
          },
          {
            id: 3,
            title: "Buzos",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=buzo",
          },
        ],
      },
      {
        id: 27,
        title: "Accesorios",
        icon: <i className="fa fa-opera"></i>,
        children: [
          // {
          //   id: 1,
          //   title: "Bolsos",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20bolsos",
          // },
          {
            id: 1,
            title: "Mochilas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=mochila",
          },
          // {
          //   id: 1,
          //   title: "Guantes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to: "/?pwa_ecom_ui_template_products%5Bquery%5D=hombre%20guantes",
          // },
          {
            id: 1,
            title: "Gorras",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=gorra",
          },
          {
            id: 1,
            title: "Medias",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=medias",
          },
          {
            id: 1,
            title: "Tomatodos",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=tomatodo",
          },
          {
            id: 1,
            title: "Bolsos",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=ropa&genero=hombre&category=bolso",
          },
        ],
      },
    ],
  },
  {
    id: 22,
    title: "Niño",
    icon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    disabled: false,
    to: "/shop",
    children: [
      {
        id: 21,
        title: "Calzado",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 3,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=calzado&genero=niños",
          },
          {
            id: 3,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=calzado&genero=niños",
          },
          // {
          //   id: 3,
          //   title: "Sandalias",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20sandalias"

          // }
          // ,
          // {
          //   id: 3,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20running"

          // }
          // ,
          // {
          //   id: 3,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20chimpunes"

          // }
          // {
          //   id: 3,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20"

          // }
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20comodo"

          // }
          // ,

          // {
          //   id: 3,
          //   title: "Básquet",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20comodo"

          // }
          ,
          ,
        ],
      },
      // {
      //   id: 18,
      //   title: "Ropa",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 3,
      //       title: "Ver Toda la Ropa",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20ropa"

      //     },
      //     {
      //       id: 3,
      //       title: "Polos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20polos"

      //     },
      //     ,
      //     {
      //       id: 3,
      //       title: "Poleras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20poleras"

      //     },
      //     {
      //       id: 3,
      //       title: "Licras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20licras"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Casacas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20casacas"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Pantalones",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20pantalones"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Camisetas de Futbol",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20zapatillas%20camisetas%20futbol"

      //     }
      //     ,
      //     {
      //       id: 9,
      //       title: "Shorts",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20shorts"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Buzos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20buzos"

      //     }
      //   ]
      // },
      // {
      //   id: 17,
      //   title: "Accesorios",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20accesorios"

      //     },
      //     {
      //       id: 1,
      //       title: "Mochilas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20mochilas"

      //     },
      //     {
      //       id: 1,
      //       title: "Guantes",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20guantes"

      //     },
      //     {
      //       id: 1,
      //       title: "Gorras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20gorras"

      //     },
      //     {
      //       id: 1,
      //       title: "Medias",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20medias"

      //     },
      //     {
      //       id: 1,
      //       title: "Tomatodos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20tomatodos"

      //     },
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niño%20bolsas"

      //     },
      //   ]
      // },
    ],
  },
  {
    id: 32,
    title: "Niña",
    icon: <i className="fa fa-paragraph"></i>,
    hideBorder: true,
    disabled: false,
    to: "/shop",
    children: [
      {
        id: 38,
        title: "Calzado",
        icon: <i className="fa fa-opera"></i>,
        children: [
          {
            id: 9,
            title: "Ver Todas las Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=calzado&genero=niños",
          },
          {
            id: 9,
            title: "Zapatillas",
            icon: <i className="fa fa-opera"></i>,
            to: "/tienda?search=&tipo=calzado&genero=niños",
          },
          // {
          //   id: 9,
          //   title: "Sandalias",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20sandalias"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Running",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20running"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Chimpunes",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20chimpunes"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Originals",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20"
          // }
          // ,
          // {
          //   id: 9,
          //   title: "Calzado Comodo",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20comodo"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Calzado de Plataforma",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20plataforma"

          // }
          // ,
          // {
          //   id: 9,
          //   title: "Básquet",
          //   icon: <i className="fa fa-opera"></i>,
          //   to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20basquet"

          // }
        ],
      },
      // {
      //   id: 37,
      //   title: "Ropa",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 3,
      //       title: "Ver Toda la Ropa",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20ropa"

      //     },
      //     {
      //       id: 3,
      //       title: "Polos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20polos"

      //     },
      //     ,
      //     {
      //       id: 3,
      //       title: "Poleras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20poleras"

      //     },
      //     {
      //       id: 3,
      //       title: "Licras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20zapatillas%20licras"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Casacas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20casacas"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Pantalones",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20pantalones"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Camisetas de Futbol",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20camisetas%20futbol"

      //     }
      //     ,
      //     {
      //       id: 9,
      //       title: "Shorts",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20pantalones"

      //     }
      //     ,
      //     {
      //       id: 3,
      //       title: "Buzos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20pantalones"

      //     }
      //   ]
      // },
      // {
      //   id: 36,
      //   title: "Accesorios",
      //   icon: <i className="fa fa-opera"></i>,
      //   children: [
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20accesorios"

      //     },
      //     {
      //       id: 1,
      //       title: "Mochilas",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20mochilas"
      //     },
      //     {
      //       id: 1,
      //       title: "Guantes",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20guantes"

      //     },
      //     {
      //       id: 1,
      //       title: "Gorras",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20gorras"

      //     },
      //     {
      //       id: 1,
      //       title: "Medias",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20medias"

      //     },
      //     {
      //       id: 1,
      //       title: "Tomatodos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20tomatodos"

      //     },
      //     {
      //       id: 1,
      //       title: "Bolsos",
      //       icon: <i className="fa fa-opera"></i>,
      //       to:"/?pwa_ecom_ui_template_products%5Bquery%5D=niña%20bolsos"

      //     },
      //   ]
      // },
    ],
  },
  // {
  //   id: 50,
  //   title: "OUTLET",
  //   icon: <i className="fa fa-paragraph"></i>,
  //   hideBorder: true,
  //   disabled: false,
  //   to: "/shop",
  //   children: [
  //     {
  //       id:49,
  //       title: "Calzado",
  //       icon: <i className="fa fa-opera"></i>,
  //       children: [
  //         {
  //           id: 1,
  //           title: "Nike",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=nike"

  //         },
  //         {
  //           id: 2,
  //           title: "Adidas",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=adidas"

  //         },
  //         {
  //           id: 3,
  //           title: "Sandalias",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=sandalias"

  //         }
  //       ]
  //     },
  //     {
  //       id: 48,
  //       title: "Ropa",
  //       icon: <i className="fa fa-opera"></i>,
  //       children: [
  //         {
  //           id: 1,
  //           title: "Nike",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=nike%20ropa"

  //         },
  //         {
  //           id: 2,
  //           title: "Adidas",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=adidas%20ropa"

  //         },
  //         {
  //           id: 3,
  //           title: "Sandalias",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=sandalias"

  //         }
  //       ]
  //     },
  //     {
  //       id: 47,
  //       title: "Accesorios",
  //       icon: <i className="fa fa-opera"></i>,
  //       children: [
  //         {
  //           id: 1,
  //           title: "Nike",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=nike%20accesorios"

  //         },
  //         {
  //           id: 2,
  //           title: "Adidas",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=adidas%20accesorios"

  //         },
  //         {
  //           id: 3,
  //           title: "Sandalias",
  //           icon: <i className="fa fa-opera"></i>,
  //           to:"/?pwa_ecom_ui_template_products%5Bquery%5D=sandalias"

  //         }
  //       ]
  //     },

  //   ]
  // },
  {
    id: 19,
    title: "Tienda",
    icon: <i className="fa fa-graduation-cap"></i>,
    hideBorder: false,
    disabled: false,
    to: "/tienda",
  },
  {
    id: 20,
    title: "Emprende",
    icon: <i className="fa fa-graduation-cap"></i>,
    hideBorder: false,
    disabled: false,
    to: "/emprende",
  },
  {
    id: 25,
    title: "Ubicanos",
    icon: <i className="fa fa-graduation-cap"></i>,
    hideBorder: false,
    disabled: false,
    to: "#",
  }

]

export default options
