import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from "antd"
import ReactMarkdown from "react-markdown"
import Logo from "../assets/images/viarte-logo.png"


const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 7000,
}

const IndexPage = ({ data }) => (
  <div className="inicio">
    <SEO
      title={data.strapiHome.seo.title}
      description={data.strapiHome.seo.description}
      image={data.strapiHome.seo.image}
    />
    <Layout>
      <h1>{data.strapiHome.seo.title}</h1>
      <img className="logo" src={Logo} alt="logo viarte" />
      <Carousel {...settings}>
        {data.strapiHome.message.map((document) => (
          <div className="carousel--txt" key={document.id}>
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
