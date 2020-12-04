import React from "react"
import { graphql } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import "./nosotros.scss"

const Nosotros = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiAbout.seo.title}
      description={data.strapiAbout.seo.description}
      image={data.strapiAbout.seo.image}
    />
    <div className="nosotros">
      <h1>{data.strapiAbout.seo.title}</h1>
      <div className="contenedor">
        <p className="descripcion">{data.strapiAbout.description}</p>
        <ul className="nosotros__lista">
          {data.strapiAbout.Statement.map((document) => (
            <li key={document.id} className="nosotros__ficha nosotros__item">
              <img
                className="nosotros__icono"
                src={document.image.publicURL}
                title={document.seo_image.title}
                alt={document.seo_image.alt}
              />
              <h2 className="nosotros__titulo">{document.title}</h2>
              <p className="ficha__texto nosotros__texto">{document.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Layout>
)

export default Nosotros

export const query = graphql`
  query NosotrosQuery {
    strapiAbout {
      seo {
        title
        description
      }
      description
      Statement {
        id
        title
        description
        image {
          publicURL
        }
        seo_image {
          title
          alt
        }
      }
    }
  }
`
