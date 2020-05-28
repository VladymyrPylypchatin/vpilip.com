import React from 'react';
import { Link } from "gatsby"
import styles from './Nav.module.scss';



const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={[styles.nav__item].join(' ')}>
                    <Link to="/">
                        {/* <img src={AboutMeImg} alt="Start" /> */}
                        <span>Start</span>
                    </Link>
                </li>
                <li className={[styles.nav__item].join(' ')}>
                    <Link to="/about/">
                        {/* <img src={AboutMeImg} alt="About me" /> */}
                        <span>About</span>
                    </Link>
                </li>
                {/* <li className={[styles.nav__item].join(' ')}>
                    <Link to="/projects/">
                        <span>Projects</span>
                    </Link>
                </li> */}
                <li className={styles.nav__item}>
                    <Link to="/blog/">
                        {/* <img src={WritingImg} alt="Blog" /> */}
                        <span>Blog</span>
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/contacts/">
                        {/* <img src={EnvelopImg} alt="Contacts" /> */}
                        <span>Contacts</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;