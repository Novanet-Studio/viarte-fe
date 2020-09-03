import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* eslint-disable */

let faicon = null
let faprefix = null

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        strapiContact {
          seo {
            title
            description
            image
          }
          contact {
            id
            content
            icon
            link
            prefix
          }
          seo_image {
            alt
            title
          }
        }
        logonn: file(relativePath: { eq: "logo-nn.svg" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <footer>
        <div className="footer--container">
          <div className="footer--rrss">
            {data.strapiContact.contact.map((document) => (
              <div className="footer--rrss__boton" key={document.id}>
                <a
                  href={document.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`Ir a ${document.content}`}
                >
                  <FontAwesomeIcon
                    icon={[
                      (faprefix = document.prefix.replace(/'/g, "")),
                      (faicon = document.icon.replace(/'/g, "")),
                    ]}
                    fixedWidth
                    size="lg"
                  />
                </a>
              </div>
            ))}
          </div>
          <p>
            viarte.net - Derechos reservados - {new Date().getFullYear()} |
            Desarrollado por:
            <a
              href="https://novanet.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
              <img src={data.logonn.publicURL} />
            </a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
