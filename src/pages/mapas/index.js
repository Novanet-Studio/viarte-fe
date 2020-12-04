import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import GoogleMap from "./templates/googleMap"
import "./mapas.scss"

const Mapas = ({ data }) => {
  const locations = {
    caracas: data.strapiMapa.ubicacion[0],
    guarenas: data.strapiMapa.ubicacion[1],
    valencia: data.strapiMapa.ubicacion[2],
  }

  const markers = {
    caracas: data.allStrapiMapCaracas,
    guarenas: data.allStrapiMapGuarenas,
    valencia: data.allStrapiMapValencia,
  }
  const [currentLocation, setCurrentLocation] = useState(locations.caracas)
  const [currentMarkers, setCurrentMarkers] = useState(markers.caracas)
  const [defaultCenter, setDefaultCenter] = useState([
    locations.caracas.lat,
    locations.caracas.lng,
  ])
  const [infoWindowActive, setInfoWindowActive] = useState(null)

  useEffect(
    () =>
      setDefaultCenter([
        Number(currentLocation.lat),
        Number(currentLocation.lng),
      ]),
    [currentLocation]
  )

  const onChangeLocation = (e) => {
    const selected = e.currentTarget.selectedOptions[0].value
    setCurrentLocation(locations[selected])
    setCurrentMarkers(markers[selected])
  }

  return (
    <Layout>
      <SEO
        title={data.strapiMapa.seo.title}
        description={data.strapiMapa.description}
        image={data.strapiMapa.image}
      />
      <div
        className="vallas"
        /* title={data.strapiMapa.image_seo.title}
        alt={data.strapiMapa.image_seo.alt} */
      >
        <div className="contenedor">
          <h1>{data.strapiMapa.seo.title}</h1>
          <div className="contenedor__lateral">
            <div className="card">
              <p className="card__descripcion descripcion">{data.strapiMapa.description}</p>
              <p className="card__descripcion-corta">
                Seleccione una ciudad para mostrar las vallas existentes:
              </p>
              {/* eslint-disable */}
              <select className="dropdown" onChange={onChangeLocation}>
                <option className="dropdown__option" disabled>
                  Selecciona una ubicación
                </option>
                <option className="dropdown__option" value="caracas">
                  Caracas
                </option>
                <option className="dropdown__option" value="guarenas">
                  Guarenas
                </option>
                <option className="dropdown__option" value="valencia">
                  Valencia
                </option>
              </select>
              {currentMarkers.edges.map((item) => (
                <Link
                  key={item.node.id}
                  className="card__link"
                  to={`/mapas/${item.node.slug}`}
                  onMouseOver={() => setInfoWindowActive(item.node.id)}
                  onMouseLeave={() => setInfoWindowActive(null)}
                >
                  {item.node.location}
                </Link>
              ))}
            </div>
          </div>
          <GoogleMap
            className="mapa"
            center={defaultCenter}
            defaultZoom={14}
            markers={currentMarkers.edges}
            showInfoWindow={infoWindowActive}
          />
        </div>
      </div>
    </Layout>
  )
}

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
          slug
          direction
          lat
          lng
          imagen {
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiMapGuarenas: allStrapiMap(filter: { ciudad: { eq: "Guarenas" } }) {
      edges {
        node {
          id
          location
          slug
          direction
          lat
          lng
          imagen {
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiMapValencia: allStrapiMap(filter: { ciudad: { eq: "Valencia" } }) {
      edges {
        node {
          id
          location
          slug
          direction
          lat
          lng
          imagen {
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
