import React from 'react';
import styles from './Header.module.scss';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={["small-container", styles.header__container].join(' ')}>
                <div className={styles.header__logo}>
                    <Logo
                        title="Vova Pilipchatin"
                        subTitle="Software Engeenier"
                    />
                </div>
                <div className={styles.header__nav}>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;