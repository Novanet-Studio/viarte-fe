import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from '../components/googleMap'

const Mapas = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiMapa.seo.title}
      description={data.strapiMapa.description}
      image={data.strapiMapa.image}
    />
    <ul>
      {data.allStrapiMap.edges.map((el, i) => (
        <li key={i}>
          <p>{el.node.location}</p>
          <p>{el.node.direction}</p>
          <p>{el.node.url}</p>
          <GoogleMap lat={el.node.lat} lng={el.node.lng} text={"Here"}/>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Mapas

export const query = graphql`
  query MapasQuery {
    strapiMapa {
      seo {
        id
        image
        title
      }
    }
    allStrapiMap {
      edges {
        node {
          location
          direction
          url
          lat
          lng
        }
      }
    }
  }
`