require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log('Envivroment', process.env.NODE_ENV);
module.exports = {
  siteMetadata: {
    title: `Vova Pilipchatin`,
    description: `I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business.`,
    siteUrl: `https://vpilip.com`,
    author: `Vova Pilipchatin`

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
        dataLayerName: "dataLayer",
      },
    },
    `gatsby-plugin-robots-txt`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `@raae/gatsby-remark-oembed`,
    //       }
    //     ]
    //   }
    // }
  ],
}
