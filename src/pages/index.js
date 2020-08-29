import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from "antd"
import ReactMarkdown from "react-markdown"
import Logo from "../assets/images/viarte--logo.svg";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
}

const IndexPage = ({ data }) => (
  <div className="Inicio">
    <SEO
      title={data.strapiHome.seo.title}
      description={data.strapiHome.seo.description}
      image={data.strapiHome.seo.image}
    />
    <Layout>
      <h1>{data.strapiHome.seo.title}</h1>
      <img className="Logo" src={Logo} alt="logo viarte" />
      <Carousel {...settings}>
        {data.strapiHome.message.map((document) => (
          <div className="mensaje" key={document.id}>
            <ReactMarkdown source={document.content} escapeHtml={false} />
          </div>
        ))}
      </Carousel>
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
  query HomeQuery {
    strapiHome {
      seo {
        title
        description
        image
      }
      message {
        id
        content
        title
      }
      seo_image {
        title
        alt
      }
    }
  }
`
