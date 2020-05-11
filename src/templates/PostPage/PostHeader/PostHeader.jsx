import React from 'react';
import styles from './PostHeader.module.scss';

const PostHeader = (props) => {
    return (
        <>
            <div className={styles.postHeader}>
                <div className="post-container">
                    {/* <h2 className={styles.postHeader__category}>
                        OUTREACH & CONTENT PROMOTION
                    </h2> */}
                    <h1 className={styles.postHeader__title}>{props.title}</h1>
                    <div className={styles.postHeader__authors}>
                        <a href="/">Vova Pilipchatin</a>
                        <a href="/">Tim Soulo</a>
                    </div>
                </div>
            </div>
            <div className="post-container">
                <div className={styles.preview}>
                    <img src={props.cover} alt={props.title} />
                </div>
            </div>
        </>
    );
};

export default PostHeader;