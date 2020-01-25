require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
console.log('Envivroment', process.env.NODE_ENV);
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-source-prismic`,
    //   options: {
    //     repositoryName: `vpilip`,
    //     accessToken: `${process.env.API_KEY}`
    //     // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
    //   }
    // },
    {
      resolve: 'gatsby-source-prismic-graphql',
        options: {
          repositoryName: 'vpilip', // (REQUIRED, replace with your own)
          accessToken: `${process.env.API_KEY}`, // (optional API access token) 
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
