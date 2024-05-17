import React, { useState } from "react"

import "./Column.css"
import Link from "next/link"

import { Logo } from "@/components/logo/logo"

const Column = (props) => {
  const icons = [
    "https://i.imgur.com/4JoWdxf.png",
    "https://i.imgur.com/oWHKLnj.jpg",
    // "https://i.imgur.com/SCFSSVs.png",
    "https://i.imgur.com/kuSZEpB.png",
  ]
  const { column, logo } = props
  const [activecol, setActivecol] = useState(false)

  return (
    <div className="column">
      {logo ? (
        <>
          <Logo />
          <div>
            <h4>Aceptamos Pagos</h4>
            <div>
              {icons?.map((icon) => {
                return <img src={icon} alt="" />
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <h3
            className={activecol && "activecoltitle"}
            onClick={() => setActivecol(!activecol)}
          >
            <span>{column.title}</span>
            <i className={"fal fa-chevron-right"}></i>
          </h3>
          <div className={activecol ? "activecol col" : "col"}>
            {column.links.map((link) => {
              return <Link href={`${link.link}`}>{link.text}</Link>
            })}
          </div>
        </>
      )}
    </div>
  )
}
export default Column
