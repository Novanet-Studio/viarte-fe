import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ReactMarkdown from 'react-markdown'

const EntradaTemplate = ({ data }) => (
  <Layout>
    <div
      style={{
        padding: "20px",
        marginTop: 20,
        zIndex: 1000
      }}
    >
      <h1>{data.strapiEntrada.title}</h1>
      <Img
        fluid={data.strapiEntrada.image.childImageSharp.fluid}
        title={data.strapiEntrada.seo_image.title}
        alt={data.strapiEntrada.seo_image.alt}
      />
      <ReactMarkdown 
        source={data.strapiEntrada.description}
        escapeHtml={false}
      />
    </div>
  </Layout>
)

export default EntradaTemplate

export const query = graphql`
  query EntradaTemplate($id: String!) {
    strapiEntrada(id: { eq: $id }) {
      id
      title
      description
      date
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
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