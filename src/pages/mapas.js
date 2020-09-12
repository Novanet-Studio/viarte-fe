import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GoogleMap from "../components/googleMap"

const Mapas = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiMapa.seo.title}
      description={data.strapiMapa.description}
      image={data.strapiMapa.image}
    />
    <div className="vallas">
      <div className="container">
        <h1>{data.strapiMapa.seo.title}</h1>
        <p className="description">{data.strapiMapa.description}</p>
        <ul>
          {data.allStrapiMap.edges.map((item) => (
            <li className="vall--ficha" key={item.node.id}>
              <GoogleMap
                lat={item.node.lat}
                lng={item.node.lng}
                id={item.node.id}
              />
              <h2>{item.node.location}</h2>
              <p>{item.node.direction}</p>
              <p className="hidden">{item.node.url}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
