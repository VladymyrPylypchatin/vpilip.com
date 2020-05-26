import React from 'react';
import styles from './Header.module.scss';

import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={["container", styles.header__container].join(' ')}>
                <div className={styles.header__nav}>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;