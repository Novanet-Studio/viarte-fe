import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GoogleMap from "./googleMap"

const MapaTemplate = ({ data }) => (
  <Layout>
    <div className="vallas">
      <div className="contenedor">
        <div className="vallas__ficha">
          <div className="vallas__ficha-inf">
            <a className="boton-regreso">« Volver</a>
            <h1>{data.strapiMap.location}</h1>
            <p className="ficha__texto">
              <span>Dirección </span>
              {data.strapiMap.direction}
            </p>
            <i>-</i>
            <p className="ficha__texto">
              <span>Código </span>
              {data.strapiMap.code}
            </p>
            <i>-</i>
            <p className="ficha__texto">
              <span>Ciudad </span>
              {data.strapiMap.ciudad}
            </p>
            <i>-</i>
            <p className="ficha__texto">
              <span>Municipio </span>
              {data.strapiMap.municipio}
            </p>
            <i>-</i>
            <p className="ficha__texto">
              <span>Medidas </span>
              {data.strapiMap.medidas}
            </p>
          </div>

          <Img fluid={data.strapiMap.imagen.childImageSharp.fluid} />

          <GoogleMap
            className="vallas__ficha-mapa"
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
