import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <Link to="/index" aria-label="Ir al vínculo de nosotros">
      Inicio
    </Link>
    <Link to="/nosotros" aria-label="Ir al vínculo de nosotros">
      Nosotros
    </Link>
  </nav>
)

export default Navigation
