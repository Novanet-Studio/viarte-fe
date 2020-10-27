require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Publicidad exterior en vallas publicitarias de diversos formatos`,
    description: `Empresa dedicada al alquiler de espacios publicitarios y a la publicidad exterior en general.`,
    type: "website",
    author: `@novanetstudio`,
    siteUrl: "https://viarte.net",
    image: `${process.env.SEO_IMAGE}`,
    titleTemplate: " Viarte",
    twitterUsername: "@novanetstudio",
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `viarte`,
        short_name: `viarte`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00a5e7`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/images/icon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: [`producto`, "map", "entrada"],
        singleTypes: [`home`, `about`, `product`, "mapa", "blog", `contact`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-less`,
    `gatsby-plugin-offline`,
  ],
}
