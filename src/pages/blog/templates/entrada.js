import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import ReactMarkdown from "react-markdown"

const EntradaTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiEntrada.title}
      description={data.strapiEntrada.description}
      image={data.strapiEntrada.image.publicURL}
    />
    <div
      className="post"
      title={data.strapiBlog.seo_image.title}
      alt={data.strapiBlog.seo_image.alt}
    >
      <div className="contenedor">
        <div className="post__contenedor">
          <Img
            fluid={data.strapiEntrada.image.childImageSharp.fluid}
            title={data.strapiEntrada.seo_image.title}
            alt={data.strapiEntrada.seo_image.alt}
          />
          <div className="post__cabecera">
            <a className="boton-regreso">« Volver</a>
            <h1>{data.strapiEntrada.title}</h1>
          </div>
          <div className="post__contenido">
            <ReactMarkdown
              className="ficha__texto"
              source={data.strapiEntrada.description}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default EntradaTemplate

export const query = graphql`
  query EntradaTemplate($id: String) {
    strapiBlog {
      seo_image {
        title
        alt
      }
    }
    strapiEntrada(id: { eq: $id }) {
      id
      title
      description
      date
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seo_image {
        title
        alt
      }
    }
  }
`
