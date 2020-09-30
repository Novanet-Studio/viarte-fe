import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GoogleMap from "../../../components/googleMap"

const MapaTemplate = ({ data }) => (
  <Layout>
    <div className="vallas">
      <div className="contenedor">
        <div className="vallas__ficha">
          <Img fluid={data.strapiMap.imagen.childImageSharp.fluid} />
          <h1>{data.strapiMap.location}</h1>
          <p>
            Código<span>{data.strapiMap.code}</span>
          </p>
          <p>
            Ciudad<span>{data.strapiMap.ciudad}</span>
          </p>
          <p>
            Municipio<span>{data.strapiMap.municipio}</span>
          </p>
          <p>
            Medidas<span>{data.strapiMap.medidas}</span>
          </p>
          <GoogleMap
            className="vallas__ficha--mapa"
            lat={Number(data.strapiMap.lat)}
            lng={Number(data.strapiMap.lng)}
            center={[Number(data.strapiMap.lat), Number(data.strapiMap.lng)]}
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default MapaTemplate

export const query = graphql`
  query MapaTemplate($id: String) {
    strapiMap(id: { eq: $id }) {
      id
      lat
      lng
      code
      location
      direction
      medidas
      ciudad
      municipio
      imagen {
        childImageSharp {
          fluid(maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
