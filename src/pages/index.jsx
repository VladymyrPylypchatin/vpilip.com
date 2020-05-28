import React from "react"

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import MainPage from '../templates/MainPage/MainPage';

const IndexPage = ({ data }) => {

    const blogPosts = data.prismic.allBlogposts.edges.map(e => {
        return ({
            title: e.node.post_title[0].text,
            subTitle: e.node.sub_title[0].text,
            id: e.node._meta.uid,
        });
    });

    console.log(blogPosts);

    return (
        <Layout>
            <SEO
                title="Vova Pilipchatin, a freelance Software Engineer, Web App Developer"
                customTitle
                description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business."
            />
            <MainPage
                blogPosts={blogPosts}
            />
        </Layout>
    );
}

export const query = graphql`
query LastPosts {
    prismic {
      allBlogposts(last: 4) {
        edges {
          node {
            _meta {
              uid
            }
            sub_title
            post_title
          }
        }
      }
    }
  }
`;

export default IndexPage
