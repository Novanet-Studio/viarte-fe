import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GoogleMap from "./googleMap"
/* import { useMapInfo } from "../../../hooks/mapa-detalle" */

/* const MapaTemplate = () => {
  const {
    id,
    lat,
    lng,
    code,
    location,
    direction,
    medidas,
    ciudad,
    municipio,
    imagen,
  } = useMapInfo()
  return (
    <Layout>
      <div className="vallas">
        <div className="contenedor">
          <div className="vallas__ficha">
            <div key ={id} className="vallas__ficha-inf">
              <Link className="boton-regreso" to="../../mapas/">
                « Volver
              </Link>
              <h1>{location}</h1>
              <p className="ficha__texto">
                <span>Dirección </span>
                {direction} -&nbsp;
                <span>Código </span>
                {code} -&nbsp;
                <span>Ciudad </span>
                {ciudad} -&nbsp;
                <span>Municipio </span>
                {municipio} -&nbsp;
                <span>Medidas </span>
                {medidas}
              </p>
            </div>
            <Img fluid={imagen.childImageSharp.fluid} />
            <GoogleMap
              className="vallas__ficha-mapa"
              lat={Number(lat)}
              lng={Number(lng)}
              center={[Number(lat), Number(lng)]}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
} */

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
            <p className="ficha__texto">
              <span>Dirección </span>{data.strapiMap.direction} -&nbsp;
              <span>Código </span>{data.strapiMap.code} -&nbsp; 
              <span>Ciudad </span>{data.strapiMap.ciudad} -&nbsp;
              <span>Municipio </span>{data.strapiMap.municipio} -&nbsp;
              <span>Medidas </span>{data.strapiMap.medidas}
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
  }`

