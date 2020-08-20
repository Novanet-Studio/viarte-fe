import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Custom components
import Inicio from "../components/inicio"
import Nosotros from "../components/nosotros"
import Productos from "../components/productos"
import Contacto from "../components/contacto"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Viarte" />
    <Inicio />
    <Nosotros content={data.allStrapiStatement.nodes} />
    <Productos content={data.allStrapiProduct.nodes} />
    <Contacto />
  </Layout>
)

export const query = graphql`
  query AllQueryData {    
    allStrapiStatement {
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
