import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// Custom components
import Inicio from "../components/inicio"
import Nosotros from "../components/nosotros"
import Productos from "../components/productos"
import Contacto from "../components/contacto"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Viarte" />
    <Inicio 
      content={data.allStrapiCarousel.nodes}
    />
    <Nosotros 
      content={data.allStrapiAbout.nodes}
    />
    <Productos 
      content={data.allStrapiProduct.nodes}
    />
    <Contacto />
  </Layout>
)

export const query = graphql`
  query AllQueryData {
    allStrapiCarousel {
      nodes {
        content
        thumbnail {
          publicURL
        }
      }
    }
    allStrapiAbout {
      nodes {
        title
        description
        icon {
          publicURL
        }
      }
    }
    allStrapiProduct {
      nodes {
        title
        short_description
        description
        thumbnail {
          publicURL
        }
      }
    }
  }
`

export default IndexPage
