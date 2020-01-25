import React from 'react';
import { RichText } from 'prismic-reactjs'
import styles from './PostBody.module.scss';

const PostBody = ({content}) => {
    console.log('Body Content:', content);
    return (
        <div className={styles.postBody}>
            {content ? RichText.render(content) : null}
        </div>
    );
};

export default PostBody;