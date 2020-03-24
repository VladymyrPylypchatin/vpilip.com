import React from "react"
import { Link } from "gatsby";
import styles from "./Header.module.scss"

import LogoImg from '../../../assets/img/rock.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={"container " + styles.header__container}>
                <Link to="/blog" className={styles.header__logo}>
                    <img src={LogoImg} alt="Vova Pilipchatin's Blog" />
                    <span>Blog</span>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Vova Pilipchatin</Link></li>
                        <li><Link to="/blog">Latest Posts</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
