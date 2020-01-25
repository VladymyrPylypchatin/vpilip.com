import React from 'react';
import styles from './PostsGrid.module.scss';

import PostCard from '../PostCard/PostCard';

const PostGrid = ({ posts }) => {
    console.log('Post Grid', posts);
    const postCardsList = posts.map(postData => {
        return (
            <PostCard
                key={postData.uid}
                subTitle={postData.subTitle}
                title={postData.title}
                readingTime={postData.readingTime}
                tag={postData.tag}
                preview={postData.preview}
                uid={postData.uid}
            />
        );
    });

    return (
        <div className={"container"}>
            <div className={styles.postsGrid}>
                {postCardsList}
            </div>
        </div>
    );
}

export default PostGrid;
