import React from 'react';
import styles from './MainPage.module.scss';

import IllustrationImg from '../../assets/img/mainpage.svg';
import MainScreen from './MainScreen/MainScreen';
import ServiceScreen from './ServicesScreen/ServicesScreen';
import PortfolioScreen from './PortfolioScreen/PortfolioScreen';
import WritingsScreen from './WritingsScreen/WritingsScreen';

const MainPage = () => {
    return (
        <>
            <img className={styles.illustration} src={IllustrationImg} alt='illustration' />
            <MainScreen />
            <ServiceScreen />
            <PortfolioScreen />
            <WritingsScreen />
        </>
    );
};


export default MainPage;