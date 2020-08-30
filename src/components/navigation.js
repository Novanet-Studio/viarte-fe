import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <Link to="/" aria-label="Ir al vínculo de Inicio">
      Inicio
    </Link>
    <Link to="/nosotros" aria-label="Ir al vínculo de Nosotros">
      Nosotros
    </Link>
    <Link to="/productos" aria-label="Ir al vínculo de Productos">
      Productos
    </Link>
    <Link to="/" aria-label="Ir al vínculo de Vallas">
      Vallas
    </Link>
    <Link to="/" aria-label="Ir al vínculo de Blog">
      Blog
    </Link>
    <Link to="/contacto" aria-label="Ir al vínculo de Contacto">
      Contacto
    </Link>
  </nav>
)

export default Navigation
