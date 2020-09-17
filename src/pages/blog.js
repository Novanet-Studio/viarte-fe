import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const showArticles = (data) =>
  data.allStrapiEntrada.edges.map(({ node }) =>
    node.destacado ? (
      <li key={node.id}>
        <p style={{fontSize: '1rem', color: 'red'}}>DESTACADO</p>
        <h2>
          <Link to={`/blog/${node.Slug}`}>{node.title}</Link>
          <Img
            fluid={node.image.childImageSharp.fluid}
            title={node.seo_image.title}
            alt={node.seo_image.alt}
          />
        </h2>
      </li>
    ) : (
      <li key={node.id}>
        <p>NO DESTACADO: </p>
        <h2>
          <Link to={`/blog/${node.Slug}`}>{node.title}</Link>
          <Img
            fluid={node.image.childImageSharp.fluid}
            title={node.seo_image.title}
            alt={node.seo_image.alt}
            width="200"
            height="200"
          />
        </h2>
      </li>
    )
  )

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
        <ul>
          {showArticles(data)}
          {/* {data.allStrapiEntrada.edges.map((item) => (
            <li key={item.node.id}>
              <h2>
                <Link to={`/blog/${item.node.Slug}`}>{item.node.title}</Link>
              </h2>
              <Img
                fluid={item.node.image.childImageSharp.fluid}
                title={item.node.seo_image.title}
                alt={item.node.seo_image.alt}
              />
              <p>{item.node.description}</p>
            </li>
          ))} */}
        </ul>
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
    allStrapiEntrada {
      edges {
        node {
          id
          title
          description
          Slug
          destacado
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
