import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GoogleMapReact from "google-map-react"

const Marker = () => <div className="marker"></div>

const Mapas = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiMapa.seo.title}
      description={data.strapiMapa.description}
      image={data.strapiMapa.image}
    />
    <div
      className="vallas"
      title={data.strapiMapa.image_seo.title}
      alt={data.strapiMapa.image_seo.alt}
    >
      <div className="contenedor">
        <h1>{data.strapiMapa.seo.title}</h1>
        <p className="descripcion">{data.strapiMapa.description}</p>
        <div className="mapa__principal">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAPS_KEY }}
            defaultCenter={[10.18329, -67.98756]}
            defaultZoom={15}
          >
            {data.allStrapiMapValencia.edges.map((item) => (
              <Marker
                key={item.node.id}
                lat={item.node.lat}
                lng={item.node.lng}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
    </div>
  </Layout>
)

export default Mapas

export const query = graphql`
  query MapasQuery {
    strapiMapa {
      description
      seo {
        id
        image
        title
      }
      image_seo {
        title
        alt
      }
      ubicacion {
        id
        nombre
        lat
        lng
      }
    }
    allStrapiMapCaracas: allStrapiMap(filter: { ciudad: { eq: "Caracas" } }) {
      edges {
        node {
          id
          location
          direction
          lat
          lng
        }
      }
    }
    allStrapiMapGuarenas: allStrapiMap(
      filter: { ciudad: { eq: "Autopista_Petare_Guarenas" } }
    ) {
      edges {
        node {
          id
          location
          direction
          lat
          lng
        }
      }
    }
    allStrapiMapValencia: allStrapiMap(filter: { ciudad: { eq: "Valencia" } }) {
      edges {
        node {
          id
          location
          direction
          lat
          lng
        }
      }
    }
  }
`
