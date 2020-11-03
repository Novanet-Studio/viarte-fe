import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import ReactMarkdown from "react-markdown"
import "./blog.less"
import { window } from "browser-monads"
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share"

const shareUrl = window.location.href

const EntradaTemplate = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiEntrada.title}
      description={data.strapiEntrada.description}
      image={data.strapiEntrada.image.publicURL}
    />
    <div
      className="post"
      /* title={data.strapiBlog.seo_image.title}
      alt={data.strapiBlog.seo_image.alt} */
    >
      <div className="contenedor">
        <div className="post__contenedor">
          <Img
            fluid={data.strapiEntrada.image.childImageSharp.fluid}
            /* title={data.strapiEntrada.seo_image.title}
            alt={data.strapiEntrada.seo_image.alt} */
          />
          <div className="post__cabecera">
            <Link className="boton-regreso" to="../../blog">
              « Volver
            </Link>
            <h1>{data.strapiEntrada.title}</h1>
            <p className="post__cabecera-fecha">{data.strapiEntrada.date}</p>
          </div>
          <div className="post__contenido">
            <ReactMarkdown
              className="ficha__texto"
              source={data.strapiEntrada.description}
              escapeHtml={false}
            />
            <div className="post__cabecera-compartir">
              <h3>Comparte este artículo</h3>
              <FacebookShareButton url={shareUrl} children="a">
                <FacebookIcon size={28} />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} children="a">
                <TwitterIcon size={28} />
              </TwitterShareButton>
              <PinterestShareButton
                url={shareUrl}
                children="a"
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
    }
  }
`
