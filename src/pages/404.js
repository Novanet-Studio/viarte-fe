import React from "react"
import { Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import Perdido from "~/assets/images/404-icono.svg"
import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="perdido">
      <div className="perdido__contenedor">
        <img className="perdido__icono" src={Perdido} alt="icono perdido" />
        <h2 className="perdido__titulo">No se ha encontrado la página</h2>
        <p className="perdido__texto">
          La página que estás tratando de ver no existe, usa el menú de
          navegación para ir a otra página o haz click en el botón para volver
          al inicio.
        </p>
        <Link to="/" className="perdido__boton">
          Regresar al inicio
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
