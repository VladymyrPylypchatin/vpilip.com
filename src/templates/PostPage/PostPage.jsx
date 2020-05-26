import React from 'react';
import { graphql } from 'gatsby'
import styles from './PostPage.module.scss'

import PostLayout from "../../components/PostLayout/PostLayout";
import SEO from '../../components/seo';
import PostBody from './PostBody/PostBody'
import PostHeader from './PostHeader/PostHeader';
import EmailSubs from '../../components/EmailSubs/EmailSubs';
import Author from './Author/Author';

import HomeIcon from '../../assets/img/author/home.svg';
import TwitterIcon from '../../assets/img/author/twitter.svg';
import InstagramIcon from '../../assets/img/author/instagram.svg';
import FacebookIcon from '../../assets/img/author/facebook.svg';
import LinkedinIcon from '../../assets/img/author/linkedin.svg';

const PageProgress = React.lazy(() =>
  import("react-page-progress")
)


const PostPage = ({ data }) => {
  console.log(data);
  const blogPost = data.prismic.blogpost;
  const author = blogPost.author;
  const links = [];
  if (blogPost.canonical) {
    links.push({
      rel: `canonical`,
      href: blogPost.canonical.url,
    });
  }

  let cover = blogPost.cover.url;
  if (blogPost.cover?.cover) cover = blogPost.cover?.cover.url;
  const isSSR = typeof window === "undefined"


  return (
    <PostLayout >
      <SEO
        title={`${blogPost.post_title[0].text} | Vova Pilipchatin`}
        description={blogPost.sub_title.text}
        customTitle
        links={links}
      />
      {!isSSR ? (
        <React.Suspense fallback={<div />}>
          <PageProgress height={5} color={'#4ab19d'} />
        </React.Suspense>
      ) : null}
      <div className={styles.postPage}>
        <PostHeader
          title={blogPost.post_title[0].text}
          cover={cover}
        />
        <PostBody content={blogPost.content} />
        {
          author ?
            <div className={['post-container', styles.author].join(' ')}>
              <Author
                name={author.author_name[0].text}
                description={author.author_description[0].text}
                profileImg={author.author_profile_img.Preview.url}
                links={[
                  { id: 'main', url: author.main_website_link?.url, img: HomeIcon },
                  { id: 'linkedin', url: author.linkedin_link?.url, img: LinkedinIcon },
                  { id: 'twitter', url: author.twitter_link?.url, img: TwitterIcon },
                  { id: 'instagram', url: author.instagram_link?.url, img: InstagramIcon },
                  { id: 'facebook', url: author.facebook_link?.url, img: FacebookIcon },
                ]}
              />
            </div>
            : null
        }
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
            canonical {
              _linkType
              ... on PRISMIC__ExternalLink {
                url
              }
            }
            author {
                ... on PRISMIC_Author {
                    author_name
                    author_description
                    author_profile_img
                    facebook_link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    instagram_link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    linkedin_link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    main_website_link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                    twitter_link {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
                  }
            }
          }
        } 
    }  
`;