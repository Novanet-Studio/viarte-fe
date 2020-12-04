import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="perdido">
      <div className="contenedor">
        <h2>No se ha encontrado la página</h2>
        <p>
          At vero eos et accusamus et iusto odio dign issimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt.
        </p>
        <Link to="/" className="perdido__boton">Regresar al inicio</Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
