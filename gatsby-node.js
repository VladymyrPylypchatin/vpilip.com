/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const template = require.resolve(`./src/templates/PostPage/PostPage.jsx`);

  const pages = await graphql(`
    {
        prismic {
          allBlogposts {
            edges {
              node {
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
      
  `);

  for (const { node } of pages.data.prismic.allBlogposts.edges) {
    console.log(node);
    createPage({
      path: `/${node._meta.uid}/`,
      component: template,
      context: {
        uid: node._meta.uid,
      },
    })
  }

  console.log(pages);

}