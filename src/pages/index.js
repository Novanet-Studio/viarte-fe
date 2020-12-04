import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Carousel } from "antd"
import ReactMarkdown from "react-markdown"
import Logo from "../assets/images/viarte-logo.svg"
import "./index.less"

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 7000,
}

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title={data.strapiHome.seo.title}
      description={data.strapiHome.seo.description}
    />
    <div
      className="inicio"
      title={data.strapiHome.seo_image.title}
      alt={data.strapiHome.seo_image.alt}
    >
      <h1>{data.strapiHome.seo.title}</h1>
      <div className="inicio__logo">
        <img src={Logo} alt="logo viarte" />
      </div>
      <Carousel {...settings}>
        {data.strapiHome.message.map((document) => (
          <div className="inicio__carouseltxt" key={document.id}>
            <ReactMarkdown source={document.content} escapeHtml={false} />
          </div>
        ))}
      </Carousel>
    </div>
  </Layout>
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
      seo_image {
        title
        alt
      }
      message {
        id
        content
        title
      }
    }
  }
`
