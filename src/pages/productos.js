import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

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
            seo_image {
              title
              alt
            }
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
            title={data.strapiProduct.seo_image.title}
            alt={data.strapiProduct.seo_image.alt}
          >
            <div className="contenedor">
              <h1>{data.strapiProduct.seo.title}</h1>
              <p className="descripcion">{data.strapiProduct.description}</p>
              <ul>
                {data.allStrapiProducto.nodes.map((document) => (
                  <li key={document.id}>
                    <Img
                      fluid={document.image.childImageSharp.fluid}
                      title={document.seo_image.title}
                      alt={document.seo_image.alt}
                    />
                    <div className="productos__ficha">
                      <h2>{document.name}</h2>
                      <p className="ficha__texto">{document.short_description}</p>
                      <button
                        tabIndex="0"
                        value={document.id}
                        onClick={(e) => openModal(e.target.value)}
                      >
                        Ver más
                      </button>
                      <div
                        id={document.id}
                        role="button"
                        tabIndex="0"
                        className="modal"
                        onClick={(e) => windowClose(e.target.id)}
                        onKeyDown={(e) => windowClose(e.target.id)}
                      >
                        <div className="modal-content">
                          <span
                            className="close"
                            role="button"
                            tabIndex="0"
                            onClick={() => closeModal()}
                            onKeyDown={() => closeModal()}
                          >
                            &times;
                          </span>
                          <Img
                            fluid={document.image.childImageSharp.fluid}
                            title={document.seo_image.title}
                            alt={document.seo_image.alt}
                          />
                          <div className="modal-text">
                            <h2>{document.name}</h2>
                            <p className="ficha__texto">{document.long_description}</p>
                          </div>
                        </div>
                      </div>
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
