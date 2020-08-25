import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Nosotros = () => (
  <StaticQuery
    query={graphql`
      query NosotrosQuery {
        strapiAbout {
          description
          Statement {
            id
            title
            description
            image {
              publicURL
            }
            Image_seo {
              title
              alt
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <SEO title="Viarte" />
        <div>
          <h1 className="hidden">Nosotros</h1>
          <p>{data.strapiAbout.description}</p>
          <ul>
            {data.strapiAbout.Statement.map((document) => (
              <li key={document.id}>
                <h2>{document.title}</h2>
                <p>{document.description}</p>
                <img
                  src={document.image.publicURL}
                  title={document.Image_seo.title}
                  alt={document.Image_seo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )}
  />
)

export default Nosotros
