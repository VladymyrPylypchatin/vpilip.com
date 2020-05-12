import React from 'react';
import { graphql } from 'gatsby'
import styles from './PostPage.module.scss'

import PostLayout from "../../components/PostLayout/PostLayout";
import SEO from '../../components/seo';
import PostBody from './PostBody/PostBody'
import PostHeader from './PostHeader/PostHeader';
import EmailSubs from '../../components/EmailSubs/EmailSubs';

const PostPage = ({ data }) => {
    console.log(data);
    const blogPost = data.prismic.blogpost;
    return (
        <PostLayout >
            <SEO
                title={`${blogPost.post_title[0].text} | Vova Pilipchatin`}
                description={blogPost.sub_title.text}
                customTitle
            />
            <div className={styles.postPage}>
                <PostHeader
                    title={blogPost.post_title[0].text}
                    cover={blogPost.cover?.cover?.url}
                />
                <PostBody content={blogPost.content} />
                <div className={['post-container', styles.subscriberForm].join(' ')}>
                    <EmailSubs formId={'1383803'} />
                </div>
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
            sub_title
            cover
          }
        } 
    }  
`;