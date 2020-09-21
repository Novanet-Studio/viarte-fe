/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  // Entradas template
  const { data } = await graphql(`
    {
      allStrapiEntrada {
        edges {
          node {
            id
            Slug
          }
        }
      }
    }
  `)

  if (data.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  data.allStrapiEntrada.edges.forEach(({ node }) => {
    const slug = node.Slug

    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/pages/blog/templates/entrada.js"),
      context: {
        id: node.id,
      },
    })
  })

  // Lista de entradas template
  const result = await graphql(
    `
      {
        allStrapiEntrada(
          sort: { fields: date, order: DESC }
          filter: { destacado: { eq: false } }
          limit: 1000
        ) {
          edges {
            node {
              id
              Slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allStrapiEntrada.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/pages/blog/templates/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

}
