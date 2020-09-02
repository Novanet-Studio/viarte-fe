import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Nosotros = ({ data }) => (
  <div className="productos">
    <SEO
      title={data.strapiProduct.seo.title}
      description={data.strapiProduct.seo.description}
      image={data.strapiProduct.seo.image}
    />
    <Layout>
      <h1>{data.strapiProduct.seo.title}</h1>
      <p className="hidden">{data.strapiProduct.description}</p>
      <ul>
        {data.allStrapiProducto.nodes.map((document) => (
          <li key={document.id}>
            <Img
              fluid={document.image.childImageSharp.fluid}
              title={document.seo_image.title}
              alt={document.seo_image.alt}
            />
            <div className="pro--ficha__txt">
              <h2>{document.name}</h2>
              <p>{document.short_description}</p>
              <p className="hidden">{document.long_description}</p>
              <a href="/">Ver más</a>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  </div>
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
