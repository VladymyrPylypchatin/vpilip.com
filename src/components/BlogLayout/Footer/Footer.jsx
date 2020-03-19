import React from 'react';
import { Link } from 'gatsby';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={"container " + styles.footer__container}>
                <div className={styles.footer__copyright}>© {(new Date()).getFullYear()}, by <Link to="/">Vova Pilipchatin</Link></div>
                <nav className={styles.footer__menu}>
                    <ul>
                        <li><Link to="/about/">About me</Link></li>
                        <li><Link to="/blog/">Latest Posts</Link></li>
                        <li><Link to="/contacts/">Contacts</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;