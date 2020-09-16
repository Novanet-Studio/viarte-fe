import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Nosotros = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiAbout.seo.title}
      description={data.strapiAbout.seo.description}
      image={data.strapiAbout.seo.image}
    />
    <div
      className="nosotros"
      title={data.strapiAbout.image_seo.title}
      alt={data.strapiAbout.image_seo.alt}
    >
      <h1>{data.strapiAbout.seo.title}</h1>
      <div className="contenedor">
        <p className="descripcion">{data.strapiAbout.description}</p>
        <ul>
          {data.strapiAbout.Statement.map((document) => (
            <li key={document.id} className="nosotros__ficha">
              <img
                src={document.image.publicURL}
                title={document.image_seo.title}
                alt={document.image_seo.alt}
              />
              <h2>{document.title}</h2>
              <p>{document.description}</p>
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
        image_seo {
          title
          alt
        }
      }
      image_seo {
        title
        alt
      }
    }
  }
`
