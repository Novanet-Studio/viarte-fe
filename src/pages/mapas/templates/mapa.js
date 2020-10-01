import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import GoogleMap from "./googleMap"
import { useMapInfo } from "../../../hooks/mapa-detalle"

const MapaTemplate = () => {
  const {
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
            <div className="vallas__ficha-inf">
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
}

export default MapaTemplate
