import React from 'react';
import styles from './MainPage.module.scss';

import IllustrationImg from '../../assets/img/mainpage.svg';
import MainScreen from './MainScreen/MainScreen';
import ServiceScreen from './ServicesScreen/ServicesScreen';
import PortfolioScreen from './PortfolioScreen/PortfolioScreen';

const MainPage = () => {
    return (
        <>
            <img className={styles.illustration} src={IllustrationImg} alt='illustration' />
            <MainScreen />
            <ServiceScreen />
            <PortfolioScreen />
        </>
    );
};


export default MainPage;