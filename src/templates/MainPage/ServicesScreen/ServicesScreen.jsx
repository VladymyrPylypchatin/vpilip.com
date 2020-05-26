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
                            I know that field of tech develoment is complicated and a taugh spot to be in if you are a non-tech founder. So I will help you to get though complexity and uncertainty, define clear roadmap and launch your saas solution.
                    </p>
                        <p>
                            Building software tools is an investment! We will work with you to make this investmetn ROI positive.
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