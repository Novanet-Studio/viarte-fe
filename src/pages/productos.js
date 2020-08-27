import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Nosotros = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiProduct.seo.title}
      description={data.strapiProduct.seo.description}
      image={data.strapiProduct.seo.image}
    />
    <div>
      <h1 className="hidden">Nosotros</h1>
      <p>{data.strapiProduct.description}</p>
      <ul>
        {data.allStrapiProducto.nodes.map((document) => (
          <li key={document.id}>
            <h2>{document.name}</h2>
            <p>{document.short_description}</p>
            <p>{document.long_description}</p>
            <Img fluid={document.image.childImageSharp.fluid} />
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default Nosotros

export const query = graphql`
  query ProductQuery {
    strapiProduct {
      seo {
        description
        image
        title
      }
      description
    }
    allStrapiProducto {
      nodes {
        id
        name
        short_description
        long_description
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
`
