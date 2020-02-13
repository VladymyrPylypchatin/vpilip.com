require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log('Envivroment', process.env.NODE_ENV);
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    siteUrl: `https://www.vpilip.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'vpilip', // (REQUIRED, replace with your own)
        accessToken: `${process.env.API_KEY}`, // (optional API access token) 
        previews: false,
        omitPrismicScript: true
      }
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/preview/`],
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-W36FRMP",
        includeInDevelopment: true,
        gtmAuth: "xDGAs7uKntNF5bX-58s9tQ",
        gtmPreview: "env-1",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
}
