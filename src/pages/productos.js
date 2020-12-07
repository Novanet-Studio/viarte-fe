import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Modal from "../components/modal"

import Layout from "~/components/layout"
import SEO from "~/components/seo"
import "./productos.scss"

export default function Productos() {
  // When the user clicks on the button, open the modal
  let [state, setState] = React.useState({})
  let openModal = (e) => {
    let a = document.querySelector(`#${e}`)
    a.style.display = "block"
    setState({ ...state, currentEvent: e })
  }
  // When the user clicks on <span> (x), close the modal
  let closeModal = () => {
    let { currentEvent } = state
    let b = document.querySelector(`#${currentEvent}`)
    b.style.display = "none"
  }
  // When the user clicks anywhere outside of the modal, close it
  let windowClose = (e) => {
    let { currentEvent } = state
    let c = document.querySelector(`#${currentEvent}`)
    if (e === currentEvent) {
      c.style.display = "none"
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query ProductQuery {
          strapiProduct {
            seo {
              description
              image
              title
            }
            description
          }
          allStrapiProducto {
            nodes {
              id
              name
              short_description
              long_description
              image {
                childImageSharp {
                  fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              seo_image {
                title
                alt
              }
            }
          }
        }
      `}
      render={(data) => (
        <Layout>
          <SEO
            title={data.strapiProduct.seo.title}
            description={data.strapiProduct.seo.description}
            image={data.strapiProduct.seo.image}
          />
          <div
            className="productos"
            /* title={data.strapiProduct.seo_image.title}
            alt={data.strapiProduct.seo_image.alt} */
          >
            <div className="contenedor">
              <h1>{data.strapiProduct.seo.title}</h1>
              <p className="descripcion">{data.strapiProduct.description}</p>
              <ul className="productos__lista">
                {data.allStrapiProducto.nodes.map((document) => (
                  <li className="productos__item" key={document.id}>
                    <Img
                      className="productos__imagen"
                      fluid={document.image.childImageSharp.fluid}
                      title={document.seo_image.title}
                      alt={document.seo_image.alt}
                    />
                    <div className="productos__card">
                      <h2 className="productos__titulo">{document.name}</h2>
                      <button
                        className="productos__button"
                        tabIndex="0"
                        value={document.id}
                        onClick={(e) => openModal(e.target.value)}
                      >
                        Ver más
                      </button>
                      <Modal 
                        document={document}
                        closeModal={closeModal}
                        windowClose={windowClose}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      )}
    />
  )
}
