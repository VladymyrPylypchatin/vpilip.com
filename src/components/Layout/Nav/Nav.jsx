import React from 'react';
import { Link } from "gatsby"
import styles from './Nav.module.scss';

import AboutMeImg from '../../../assets/img/menu_icons/aboutme.svg';
import LaptopImg from '../../../assets/img/menu_icons/laptop.svg';
import WritingImg from '../../../assets/img/menu_icons/writing.svg';
import EnvelopImg from '../../../assets/img/menu_icons/envelop.svg';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={[styles.nav__item].join(' ')}>
                    <Link to="/about/">
                        <img src={AboutMeImg} alt="About me" />
                        <span>About</span>
                    </Link>
                </li>
                <li className={[styles.nav__item].join(' ')}>
                    <Link to="/projects/">
                        <img src={LaptopImg} alt="Portfolio" />
                        <span>Projects</span>
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/blog/">
                        <img src={WritingImg} alt="Blog" />
                        <span>Blog</span>
                    </Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/contacts/">
                        <img src={EnvelopImg} alt="Contacts" />
                        <span>Contacts</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;