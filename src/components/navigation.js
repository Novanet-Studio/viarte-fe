import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <Link to="/" aria-label="Ir al vínculo de nosotros">
      Inicio
    </Link>
    <Link to="/nosotros" aria-label="Ir al vínculo de nosotros">
      Nosotros
    </Link>
    <Link to="/productos" aria-label="Ir al vínculo de nosotros">
      Productos
    </Link>
    <Link to="/contacto" aria-label="Ir al vínculo de nosotros">
      Contacto
    </Link>
  </nav>
)

export default Navigation
