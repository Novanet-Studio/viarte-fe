import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../../components/layout"
import SEO from "../../../components/seo"
import ReactMarkdown from "react-markdown"

export default class Blog extends React.Component {
  render() {
    const noDestacados = this.props.data.allStrapiEntradaFalse.edges
    const destacado = this.props.data.allStrapiEntradaTrue.edges
    const page = this.props.data.strapiBlog
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <SEO
          title={page.title}
          description={page.seo.description}
          image={page.seo.image}
        />
        <div
          className="blog"
          /* title={page.seo_image.title}
          alt={page.seo_image.alt} */
        >
          <div className="contenedor">
            <h1>{page.title}</h1>      

            {/* ====== Entrada destacada ====== */}
            {destacado.map((item) => (
              <div className="blog__destacado" key={item.node.id}>
                <Link to={`/blog/${item.node.Slug}`}>
                  <Img
                    fluid={item.node.image.childImageSharp.fluid}
                    /* title={item.node.seo_image.title}
                    alt={item.node.seo_image.alt} */
                  />
                  <div className="blog__destacadotexto">
                    <h2>{item.node.title}</h2>
                    <p className="blog__destacadotexto-fecha">{item.node.date}</p>
                    <ReactMarkdown
                      className="ficha__texto"
                      source={item.node.description
                        .substring(0, 240)
                        .concat("...")}
                      escapeHtml={false}entradas
                    />
                  </div>
                </Link>
              </div>
            ))}

            {/* ====== Entradas no destacadas ====== */}
            <ul id="Entradas" className="blog__entradas">
              {noDestacados.map((item) => (
                <li key={item.node.id}>
                  <Link to={`/blog/${item.node.Slug}`}>
                    <Img
                      fluid={item.node.image.childImageSharp.fluid}
                      /* title={item.node.seo_image.title}
                      alt={item.node.seo_image.alt} */
                    />
                    <h3>{item.node.title}</h3>
                    <p className="blog__destacadotexto-fecha">{item.node.date}</p>
                    <ReactMarkdown
                      className="ficha__texto"
                      source={item.node.description
                        .substring(0, 144)
                        .concat("...")}
                      escapeHtml={false}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="blog__pag">
              {!isFirst && (
                <Link className="pag__ant" to={`${prevPage}#Entradas`} rel="prev">
                 <span>◀</span>
                </Link>
              )}
              {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/blog/${i === 0 ? "" : i + 1}#Entradas`}
              >
                {i + 1}
              </Link>
            ))}

              {!isLast && (
                <Link className="pag__sig" to={`${nextPage}#Entradas`} rel="next">
                <span>▶</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogList($skip: Int, $limit: Int) {
    strapiBlog {
      title
      description
      seo {
        title
        description
        image
      }     
    }
    allStrapiEntradaTrue: allStrapiEntrada(
      filter: { destacado: { eq: true } }
    ) {
      edges {
        node {
          id
          title
          Slug
          description
          date(formatString: "DD MMMM YYYY", locale: "es-es")
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }          
        }
      }
    }
    allStrapiEntradaFalse: allStrapiEntrada(
      filter: { destacado: { eq: false } }
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          Slug
          description
          date(formatString: "DD MMMM YYYY", locale: "es-es")
          image {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }         
        }
      }
    }
  }
`
