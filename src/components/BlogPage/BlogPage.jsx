import React from 'react';
import styles from './BlogPage.module.scss';

import PostGrid from './PostsGrid/PostsGrid';


const BlogPage = ({ posts }) => {
    return (
        <div className={styles.blogPage}>
            <div className={styles.blogPage__posts}>
                <PostGrid posts={posts} />
            </div>
        </div>
    );
}

export default BlogPage;