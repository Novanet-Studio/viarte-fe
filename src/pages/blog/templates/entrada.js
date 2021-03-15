import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import { graphql, Link } from "gatsby"
import { window } from "browser-monads"
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import "./entrada.scss"

const shareUrl = window.location.href

const EntradaTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiEntrada.title}
      description={data.strapiEntrada.seo_description}
      image={data.strapiEntrada.image.publicURL}
    />
    <div className="post">
      <div className="contenedor">
        <div className="post__contenedor">
          <Img
            className="post__imagen"
            fluid={data.strapiEntrada.image.childImageSharp.fluid}
            title={data.strapiEntrada.seo_image.title}
            alt={data.strapiEntrada.seo_image.alt}
          />
          <div className="cabecera">
            <Link className="boton-regreso" to="../../blog">
              « Volver
            </Link>
            <h1 className="cabecera__titulo">{data.strapiEntrada.title}</h1>
            <p className="cabecera__fecha">{data.strapiEntrada.date}</p>
          </div>
          <div className="contenido">
            <ReactMarkdown
              className="ficha__texto"
              source={data.strapiEntrada.description}
              escapeHtml={false}
              linkTarget="_blank"
            />
            <div className="social">
              <h3 className="social__titulo">Comparte este artículo</h3>
              <FacebookShareButton
                className="social__boton"
                url={shareUrl}
                children="a"
              >
                <FacebookIcon size={28} />
              </FacebookShareButton>
              <TwitterShareButton
                className="social__boton"
                url={shareUrl}
                children="a"
              >
                <TwitterIcon size={28} />
              </TwitterShareButton>
              <PinterestShareButton
                url={shareUrl}
                children="a"
                className="social__boton"
                media={`${window.location.protocol}//${window.location.hostname}${data.strapiEntrada.image.childImageSharp.fluid.src}`}
                description={data.strapiEntrada.title}
              >
                <PinterestIcon size={28} />
              </PinterestShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default EntradaTemplate

export const query = graphql`
  query EntradaTemplate($id: String) {
    strapiEntrada(id: { eq: $id }) {
      id
      title
      description
      date(formatString: "DD MMMM YYYY", locale: "es-es")
      image {
        publicURL
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      seo_description
      seo_image {
        title
        alt
      }
    }
  }
`
