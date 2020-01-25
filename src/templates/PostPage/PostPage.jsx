import React from 'react';
import { graphql } from 'gatsby'
import styles from './PostPage.module.scss'

import PostBody from './PostBody/PostBody'
import PostLayout from "../../components/PostLayout/PostLayout";

const PostPage = ({ data }) => {
    console.log(data);
    const blogPost = data.prismic.blogpost;
    return (
        <PostLayout >
            <div className={styles.postPage}>
                <h1>{blogPost.post_title[0].text}</h1>
                <PostBody content={blogPost.content} />
            </div>
        </PostLayout>
    );
};

export default PostPage;

export const query = graphql`
    query MyQuery($uid: String!) {
        prismic {
          blogpost(uid: $uid, lang: "en-us") {
            content
            post_title
          }
        } 
    }  
`;