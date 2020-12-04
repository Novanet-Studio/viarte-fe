import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./thank-you.scss"

const ThankYouPage = () => (
  <Layout>
    <SEO title="Thank You" />
    <div className="gracias">
      <div className="contenedor">
        <h2>Gracias, por enviar información</h2>
        <p>
          Sed beatae vut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim
        </p>
        <Link to="/" className="gracias__boton">
          Regresar al inicio
        </Link>
      </div>
    </div>
  </Layout>
)

export default ThankYouPage
