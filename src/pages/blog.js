import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactMarkdown from "react-markdown"

const Blog = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiBlog.title}
      description={data.strapiBlog.seo.description}
      image={data.strapiBlog.seo.image}
    />
    <div
      className="blog"
      title={data.strapiBlog.seo_image.title}
      alt={data.strapiBlog.seo_image.alt}
    >
      <div className="contenedor">
        <h1>{data.strapiBlog.title}</h1>
        <p>{data.strapiBlog.description}</p>

        {/* ====== Entrada destacada ====== */}
        {data.allStrapiEntradaTrue.edges.map((item) => (
          <div className="destacado" key={item.node.id}>
            <Link to={`/blog/${item.node.Slug}`}>
              <h2>{item.node.title}</h2>
              <Img
                fluid={item.node.image.childImageSharp.fluid}
                title={item.node.seo_image.title}
                alt={item.node.seo_image.alt}
              />
              <ReactMarkdown
                className="descripcion"
                source={item.node.description.substring(0, 540).concat("...")}
                escapeHtml={false}
              />
            </Link>
          </div>
        ))}

        {/* ====== Entradas no destacadas ====== */}
        {data.allStrapiEntradaFalse.edges.map((item) => (
          <ul>
            <li key={item.node.id}>
              <Link to={`/blog/${item.node.Slug}`}>
                <h2>{item.node.title}</h2>
                <Img
                  fluid={item.node.image.childImageSharp.fluid}
                  title={item.node.seo_image.title}
                  alt={item.node.seo_image.alt}
                />
                <ReactMarkdown
                  className="description"
                  source={item.node.description.substring(0, 144).concat("...")}
                  escapeHtml={false}
                />
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  </Layout>
)

export default Blog

export const query = graphql`
  query IndexBlog {
    strapiBlog {
      title
      description
      seo {
        title
        description
        image
      }
      seo_image {
        title
        alt
      }
    }
    allStrapiEntradaTrue: allStrapiEntrada(
      filter: { destacado: { eq: true } }
    ) {
      edges {
        node {
          id
          title
          Slug
          description
          image {
            childImageSharp {
              fluid(maxWidth: 450) {
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
    }
    allStrapiEntradaFalse: allStrapiEntrada(
      filter: { destacado: { eq: false } }
    ) {
      edges {
        node {
          id
          title
          Slug
          description
          image {
            childImageSharp {
              fluid(maxWidth: 450) {
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
    }
  }
`
