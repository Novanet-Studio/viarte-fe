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
      {data.allStrapiMap.edges.map((item) => (
        <li key={item.node.id}>
          <p>{item.node.location}</p>
          <p>{item.node.direction}</p>
          <p>{item.node.url}</p>
          <GoogleMap lat={item.node.lat} lng={item.node.lng} id={item.node.id}/>
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
          id
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