import React from 'react';
import styles from './ServicesScreen.module.scss';

import SectionHeader from '../../../components/UI/SectionHeader/SectionHeader';

const ServicesScreen = () => {
    return (
        <>
            <div className={styles.screen}>
                <div className={styles.screen__description}>
                    <div className='small-container'>
                        <SectionHeader white>How I can help you</SectionHeader>
                        <p>
                            I know that field of software development is complicated and a tough spot to be in if you are a non-tech founder.
                        </p>
                        <p>
                            In the noise of new technologies, it is easy to forget that <b>building software tools is an investment!</b> And investment should have a positive ROI.
                        </p>
                        <p>
                            So I will help you to get through complexity and uncertainty, define a clear roadmap, and launch your saas solution.
                        </p>
                    </div>
                </div>
                <div className='small-container'>
                    <div className={styles.screen__services}>
                        <div className={styles.serviceItem}>
                            <h3>Solution Architecture</h3>
                        </div>
                        <div className={styles.serviceItem}>
                            <h3>Solution Development</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container section-separator'></div>
        </>
    );
}

export default ServicesScreen;