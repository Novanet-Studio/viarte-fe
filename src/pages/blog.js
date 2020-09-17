import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <div className="contennedor">
        <h1>{data.strapiBlog.title}</h1>
        <p>{data.strapiBlog.description}</p>
        <ul>
          {data.allStrapiEntrada.edges.map((item) => (
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
          ))}
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
