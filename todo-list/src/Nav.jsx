import React from "react"
import { NavLink } from "react-router-dom"
import "./scss/nav.scss"

export default function Nav() {
  return (
    <nav>
      <div className="b-nav">
        <NavLink
          to="/datos"
          className={({ isActive }) =>
            isActive ? "b-nav_item-link m-active_link" : "b-nav_item-link"
          }
        >
          Mis datos
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "b-nav_item-link m-active_link" : "b-nav_item-link"
          }
        >
          Mis tareas
        </NavLink>
        <NavLink
          to="/devoluciones"
          className={({ isActive }) =>
            isActive ? "b-nav_item-link m-active_link" : "b-nav_item-link"
          }
        >
          Mis devoluciones
        </NavLink>
      </div>
    </nav>
  )
}
