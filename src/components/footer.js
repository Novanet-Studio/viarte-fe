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
        <div className="foot--container">
          <div className="foot--rrss">
            {data.strapiContact.contact.map((document) => (
              <div className="foot--rrss__boton" key={document.id}>
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
            Viarte.net - Derechos reservados © {new Date().getFullYear()} | desarrollado por:
            <a
              href="https://novanet.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={data.logonn.publicURL} />
            </a>
          </p>
        </div>  
      </footer>
    )}
  />
)

export default Footer
