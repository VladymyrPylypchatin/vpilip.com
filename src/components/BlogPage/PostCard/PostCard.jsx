import React from 'react';
import { Link } from "gatsby";
import styles from './PostCard.module.scss';


const PostCard = (props) => {
    return (
        <article className={styles.postCard}>
            <Link to={`/${props.uid}/`} className={styles.postCard__preview}>
                <img src={props.preview} alt={props.title} />
            </Link>
            <Link to={`/${props.uid}/`} className={styles.postCard__body}>
                <div className={styles.postCard__tag}>{props.tag}</div>
                <h2 className={styles.postCard__title}>{props.title}</h2>
                <h4>
                    {props.subTitle}
                </h4>
            </Link>
            <div className={styles.postCard__footer}>
                <div className={styles.postCard__duration}>{props.readingTime} min read</div>
            </div>
        </article>
    );
};

export default PostCard;