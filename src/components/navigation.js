import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <Link to="/" aria-label="Ir al vínculo de inicio">
      Inicio
    </Link>
    <Link to="/nosotros" aria-label="Ir al vínculo de nosotros">
      Nosotros
    </Link>
    <Link to="/productos" aria-label="Ir al vínculo de productos">
      Producto
    </Link>
    <Link to="/productos" aria-label="Ir al vínculo de vallas">
      Vallas
    </Link>
    <Link to="/productos" aria-label="Ir al vínculo de blog">
      Blog
    </Link>
    <Link to="/contacto" aria-label="Ir al vínculo de contacto">
      Contacto
    </Link>
  </nav>
)

export default Navigation
