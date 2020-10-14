import React from 'react';
import styles from './CTAScreen.module.scss';

import LandingSectionHeader from '../../../components/UI/LandingSectionHeader/LandingSectionHeader';
import Button from '../../../components/UI/Button/Button';

const CTAScreen = ({ onDownloadClick }) => {

    return (
        <section className={styles.screen}>
            <div className={'container'}>
                <div className={styles.screen__content}>
                    <div className={styles.screen__left}>
                        <h2>Get started with your free Product idea Shaping Guide</h2>
                    </div>
                    <div className={styles.screen__right}>
                        <Button onClick={onDownloadClick} className={styles.screen__btn} theme="blue">Download Now For Free</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAScreen;