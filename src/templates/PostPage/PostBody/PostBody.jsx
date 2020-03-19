import React from 'react';
import { RichText } from 'prismic-reactjs'
import styles from './PostBody.module.scss';
import { htmlSerializer } from './htmlSerializer';

const PostBody = ({ content }) => {
    console.log('Body Content:', content);
    return (
        <div className={styles.postBody}>
            {content ? <RichText render={content} htmlSerializer={htmlSerializer} /> : null}
        </div>
    );
};

export default PostBody;