import React from 'react';
import styles from './MainPage.module.scss';

import IllustrationImg from '../../assets/img/mainpage.svg';
import MainScreen from './MainScreen/MainScreen';
import ServiceScreen from './ServicesScreen/ServicesScreen';
import PortfolioScreen from './PortfolioScreen/PortfolioScreen';
import WritingsScreen from './WritingsScreen/WritingsScreen';
import EmailSubs from '../../components/EmailSubs/EmailSubs';

const MainPage = ({ blogPosts }) => {
    return (
        <>
            <img className={styles.illustration} src={IllustrationImg} alt='illustration' />
            <MainScreen />
            <ServiceScreen />
            <PortfolioScreen />
            <WritingsScreen blogPosts={blogPosts} />
            <div className='small-container' style={{ marginTop: 40 }}>
                <EmailSubs formId={'1386883'} />
            </div>
        </>
    );
};


export default MainPage;