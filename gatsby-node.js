/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = async ({ actions:{ createPage }, graphql }) => {
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

  data.allStrapiEntrada.edges.forEach(({ node }) => {
    const slug = node.Slug

    createPage({
      path: `/blog/${slug}`,
      component: path.resolve('./src/pages/blog/templates/entrada.js'),
      context: {
        id: node.id
      }
    })
  })
}