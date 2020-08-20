import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "antd"
import logo from "../assets/images/logo.svg"
import ReactMarkdown from "react-markdown"

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
}

const Inicio = () => (
  <StaticQuery
    query={graphql`
      query Carousel {
        allStrapiCarousel {
          nodes {
            id
            content
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <section id="Inicio">
        <Carousel {...settings}>
          {data.allStrapiCarousel.nodes.map((document) => (
            <div key={document.id}>
              <ReactMarkdown source={document.content} escapeHtml={false} />
              <Img fluid={document.thumbnail.childImageSharp.fluid} />
            </div>
          ))}
        </Carousel>
        <div className="container">
          <div className="valla">
            <img
              src={logo}
              alt="logo de Viarte incrustado en una valla de publicidad exterior con fondo blanco"
            />
            <h1>Su arte en la vía</h1>
          </div>
        </div>
        <div className="ciudad-svg" />
      </section>
    )}
  />
)


export default Inicio
