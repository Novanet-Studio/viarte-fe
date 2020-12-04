import React from "react"
import Img from "gatsby-image"
import { Link, graphql } from "gatsby"

import Layout from "~/components/layout"
import GoogleMap from "./googleMap"

import "./mapa.scss"

const MapaTemplate = ({ data }) => (
  <Layout>
    <div className="vallas">
      <div className="contenedor">
        <div className="ficha">
          <div className="ficha__info">
            <Link className="boton-regreso" to="../../mapas/">
              « Volver
            </Link>
            <h1 className="ficha__titulo">{data.strapiMap.location}</h1>
            <ul className="ficha__lista">
              <li className="ficha__item">
                {" "}
                <span className="ficha__nombre">Dirección </span>
                {data.strapiMap.direction}
              </li>
              <li className="ficha__item">
                <span className="ficha__nombre">Código </span>
                {data.strapiMap.code}
              </li>
              <li className="ficha__item">
                <span className="ficha__nombre">Ciudad </span>
                {data.strapiMap.ciudad}
              </li>
              <li className="ficha__item">
                <span className="ficha__nombre">Municipio </span>
                {data.strapiMap.municipio}
              </li>
              <li className="ficha__item">
                <span className="ficha__nombre">Medidas </span>
                {data.strapiMap.medidas}
              </li>
            </ul>
            <Img
              className="ficha__img"
              fluid={data.strapiMap.imagen.childImageSharp.fluid}
            />
          </div>
          <GoogleMap
            className="ficha__mapa"
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
