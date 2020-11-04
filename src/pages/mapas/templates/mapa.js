import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GoogleMap from "./googleMap"

const MapaTemplate = ({ data }) => (
  <Layout>
    <div className="vallas">
      <div className="contenedor">
        <div className="vallas__ficha">
          <div className="vallas__ficha-inf">
            <Link className="boton-regreso" to="../../mapas/">
              « Volver
            </Link>
            <h1>{data.strapiMap.location}</h1>
            <ul className="vallas__ficha-lista">
              <li className="vallas__ficha-item">
                {" "}
                <span>Dirección </span>
                {data.strapiMap.direction}
              </li>
              <li className="vallas__ficha-item">
                <span>Código </span>
                {data.strapiMap.code}
              </li>
              <li className="vallas__ficha-item">
                <span>Ciudad </span>
                {data.strapiMap.ciudad}
              </li>
              <li className="vallas__ficha-item">
                <span>Municipio </span>
                {data.strapiMap.municipio}
              </li>
              <li className="vallas__ficha-item">
                <span>Medidas </span>
                {data.strapiMap.medidas}
              </li>
            </ul>
            <Img className="vallas__ficha-img" fluid={data.strapiMap.imagen.childImageSharp.fluid} />
          </div>
          <GoogleMap
            className="vallas__ficha-mapa"
            lat={Number(data.strapiMap.lat)}
            lng={Number(data.strapiMap.lng)}
            center={[Number(data.strapiMap.lat), Number(data.strapiMap.lng)]}
            defaultZoom={15}
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
