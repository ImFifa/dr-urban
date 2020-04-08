module.exports = {
  siteMetadata: {
    title: `MUDr. Miroslav Urban | Praktický lékař pro dospělé`,
    description: `Webové stránky ordinace praktického lékaře v Postoloprtech.`,
    author: `Filip Urban`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
  ],
}
