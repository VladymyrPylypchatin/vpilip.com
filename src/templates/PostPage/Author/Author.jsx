import React from 'react';
import styles from './Author.module.scss';
import { Link } from 'gatsby'


const Author = (props) => {
    console.log(props);
    const links = props.links.filter(l => l.url).map((linkObject) => {
        return (
            <a
                key={linkObject.id}
                href={linkObject.url}
                target='_blank'
                rel="noopener noreferrer"
                className={styles.link}
            >
                <img src={linkObject.img} alt="social link" />
            </a>
        );
    });
    return (
        <div className={styles.authorBlock}>
            <div>Article by:</div>
            <div className={styles.author}>
                <Link to={'/'} className={styles.author__avatar}>
                    <img src={props.profileImg} alt={props.name} />
                </Link>
                <div className={styles.author__info}>
                    <div className={styles.author__name}><Link to={'/'}>{props.name}</Link></div>
                    <div className={styles.author__description}>
                        {props.description}
                    </div>
                    <div className={styles.author__socials}>
                        {links}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Author;