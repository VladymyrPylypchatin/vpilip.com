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
                        <h3>Free download</h3>
                        <h1>The non-tech founder's SaaS App Feature Guide</h1>
                        <h2>
                            Shape up your SaaS idea and define its features to make your future app aligned with your vision, business goals, and budget.
                        </h2>
                        <Button onClick={onDownloadClick} className={styles.screen__cta} theme="blue">Download Now For Free</Button>
                    </div>
                    <div className={styles.screen__right}>
                        <img src={MockupImg} alt="The non-tech founder's SaaS App Feature Guide" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;