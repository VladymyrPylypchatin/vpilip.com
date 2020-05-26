import React from 'react';
import styles from './SectionHeader.module.scss';

const SectionHeader = (props) => {
    const headerClasses = [styles.header];
    if (props.white) headerClasses.push(styles.header_white);

    return (
        <div className={headerClasses.join(' ')}>
            <h2>
                {props.children}
            </h2>
            <div className={styles.header__line}></div>
        </div>
    );
};

export default SectionHeader;