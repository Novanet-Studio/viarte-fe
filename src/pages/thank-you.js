import React from "react"
import { Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import Gracias from "~/assets/images/gracias-icono.svg"
import "./thank-you.scss"

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <div className="gracias">
      <div className="contenedor">
        <h2 className="gracias__titulo">¡Gracias por enviarnos tu mensaje!</h2>
        <img className="gracias__icono" src={Gracias} alt="icono gracias" />
        <p className="gracias__descripcion">
          Te responderemos a la brevedad posible, si quieres saber más de
          nosotros puedes hacer click en las redes sociales ubicadas en el pie
          de la página.
        </p>
        <Link to="/" className="gracias__boton">
          Regresar al inicio
        </Link>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage
