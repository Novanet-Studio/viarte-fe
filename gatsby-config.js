require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Publicidad exterior en vallas publicitarias de diversos formatos`,
    titleTemplate: " Viarte",
    description: `Empresa dedicada al alquiler de espacios publicitarios y a la publicidad exterior en general.`,
    author: `@novanetstudio`,
  },
  plugins: [    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/icon.png",
  
        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'es-ES',
        background: '#fff',
        theme_color: '#00a5e7',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
  
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `novanet-viarte-caracas`,
        short_name: `caracas-landscapes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00a5e7`,
        display: `standalone`,
        icon: "src/assets/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [`producto`, 'map'],
        singleTypes: [`home`, `about`, `product`, 'mapa' ,`contact`],
        queryLimit: 1000,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-less`,
    `gatsby-plugin-offline`,
  ],
}
