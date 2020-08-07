require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Somos una compañía de publicidad exterior especializada en vallas publicitarias de diversos formatos y con estructuras personalizadas.`,
    description: `Empresa dedicada al alquiler de espacios publicitarios y a la publicidad exterior en general.`,
    author: `@novanet.studio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        // apiURL: process.env.API_URL || 'http://localhost:1337',
        apiURL: 'https://viarte.herokuapp.com',
        queryLimit: 1000,
        contentTypes: [
          'statement',
          'carousel',
          'product'
        ]
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
