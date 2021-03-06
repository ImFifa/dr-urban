module.exports = {
  siteMetadata: {
    title: `MUDr. Miroslav Urban | Praktický lékař pro dospělé`,
    description: `Webové stránky ordinace praktického lékaře v Postoloprtech.`,
    author: `Filip Urban`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
         `Poppins:300,400,500`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "MUDr. Miroslav Urban | Praktický lékař pro dospělé",
        short_name: "MUDr. Miroslav Urban",
        start_url: "/",
        background_color: "#087bc5",
        theme_color: "#10316c",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EXFN79VC2H", // Google Analytics / GA
        ],
      },
    },
  ],
}
