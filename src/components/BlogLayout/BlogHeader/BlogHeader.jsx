import React from 'react';
import styles from './BlogHeader.module.scss';
import Logo from '../../Layout/Logo/Logo';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={["small-container", styles.header__container].join(' ')}>
                <div className={styles.header__logo}>
                    <Logo
                        title="Vova Pilipchatin's Blog"
                        header
                        blog
                    />
                </div>
            </div>
            <div className={styles.header__tags}>
                Creating Products, Freelancing and Software Engeeniring
            </div>
        </header>
    );
};

export default Header;