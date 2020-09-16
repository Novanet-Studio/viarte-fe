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
    <div className="vallas" title={data.strapiMapa.image_seo.title} alt={data.strapiMapa.image_seo.alt}>
      <div className="contenedor">
        <h1>{data.strapiMapa.seo.title}</h1>
        <p className="descripcion">{data.strapiMapa.description}</p>
        <ul>
          {data.allStrapiMap.edges.map((item) => (
            <li className="vallas__ficha" key={item.node.id}>
              <GoogleMap
                lat={item.node.lat}
                lng={item.node.lng}
            
              />
              <h2>{item.node.location}</h2>
              <p>{item.node.direction}</p>
              <a href={item.node.url} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
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
      image_seo {
        title
        alt
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
