import React from "react"
import { graphql } from 'gatsby'
// import { Link } from "gatsby"

import BlogLayout from "../components/BlogLayout/BlogLayout";
import BlogPage from "../components/BlogPage/BlogPage";
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const allBlogPostsRaw = data.prismic.allBlogposts.edges;
  const blogPosts = allBlogPostsRaw.map(rawBlogPost => {
    console.log(rawBlogPost);
    return (
      {
        title: rawBlogPost.node.post_title[0].text,
        subTitle: rawBlogPost.node.sub_title[0].text,
        tag: rawBlogPost.node._meta.tags[0],
        uid: rawBlogPost.node._meta.uid,
        readingTime: rawBlogPost.node.reading_time,
        preview: rawBlogPost.node.cover.perview.url,
        bigPreview: rawBlogPost.node.cover.big_preview.url
      }
    );
  });


  return (
    <BlogLayout>
      <SEO
        title={`Vova Pilipchatin's Blog`}
        customTitle

      />
      <BlogPage posts={blogPosts} />
    </BlogLayout>
  );
}

export default Blog;

export const query = graphql`
    {
      prismic {
        allBlogposts {
          edges {
            node {
              post_title
              sub_title
              reading_time
              _meta {
                uid
                tags
              }
              cover
            }
          }
        }
      }
    }  
`;