import React from 'react';
import styles from './MainScreen.module.scss';
import Button from '../../../components/UI/Button/Button';

import MockupImg from '../../../assets/img/resources/featureguide/mockup.png';
import ElipseImg from '../../../assets/img/resources/elipse.svg';

const MainScreen = ({ onDownloadClick }) => {
    return (
        <section className={styles.screen}>
            <img className={styles.screen__elipse} src={ElipseImg} alt="Abstract Background" />
            <div className={'container'}>
                <div className={styles.screen__content}>
                    <div className={styles.screen__left}>
                        <h3>Guide for service business founders</h3>
                        <h1>How to plan product idea for your next scalable business</h1>
                        <h2>
                            Turn a vague idea into a clear vision needed to validate, build & launch your next software business.
                        </h2>
                        <Button onClick={onDownloadClick} className={styles.screen__cta} theme="blue">Download Now For Free</Button>
                    </div>
                    <div className={styles.screen__right}>
                        <img src={MockupImg} alt="How to plan product idea for your next scalable business" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;