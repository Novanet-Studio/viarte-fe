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
        }
        logonn: file(relativePath: { eq: "logo-nn.svg" }) {
          publicURL
        }
      }
    `}
    render={(data) => (
      <footer className="footer">
        <div className="footer__contenedor">
          <div className="footer__rrss">
            {data.strapiContact.contact.map((document) => (
              <div className="footer__rrss-btn" key={document.id}>
                <a
                  href={document.link}
                  className="footer__rrss-link"
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
                    size="1x"
                  />
                </a>
              </div>
            ))}
          </div>
          <p className="footer__texto">
            viarte.net - Derechos reservados - {new Date().getFullYear()} |
            Desarrollado por:
            <a
              href="https://novanet.studio"
              className="footer__link-novanet"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;
              <img className="footer__logo-novanet" src={data.logonn.publicURL} />
            </a>
          </p>
        </div>
      </footer>
    )}
  />
)

export default Footer
