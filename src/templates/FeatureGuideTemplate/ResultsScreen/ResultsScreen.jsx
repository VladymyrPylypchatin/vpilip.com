import React from 'react';
import styles from './ResultsScreen.module.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import LandingSectionHeader from '../../../components/UI/LandingSectionHeader/LandingSectionHeader';

import CheckmarkImg from '../../../assets/img/checkmark.svg';
import Page1Img from '../../../assets/img/resources/featureguide/page1.jpg'
import Page2Img from '../../../assets/img/resources/featureguide/page2.jpg'
import Page3Img from '../../../assets/img/resources/featureguide/page3.jpg'

const ResultsScreen = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '60px',
        dotsClass: styles.screen__previewControls
    };

    return (
        <section className={styles.screen}>
            <div className={'container'}>
                <div className={styles.screen__content}>
                    <div className={styles.screen__left}>
                        <LandingSectionHeader>By completing this guide, you will:</LandingSectionHeader>
                        <ul className={styles.screen__results}>
                            <li>
                                <img src={CheckmarkImg} alt="Checkmark" />
                                <span>Organize your SaaS idea and vision</span>
                            </li>
                            <li>
                                <img src={CheckmarkImg} alt="Checkmark" />
                                <span>Better understand your potential customers and their needs</span>
                            </li>
                            <li>
                                <img src={CheckmarkImg} alt="Checkmark" />
                                <span>Define app features and architecture</span>
                            </li>
                            <li>
                                <img src={CheckmarkImg} alt="Checkmark" />
                                <span>Understand how your future app gonna work</span>
                            </li>
                            <li>
                                <img src={CheckmarkImg} alt="Checkmark" />
                                <span>Create a well-defined specification to convey your idea to devs and designers</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.screen__right}>
                        <Slider {...settings}>
                            <div>
                                <img className={styles.screen__previewImg} src={Page1Img} alt="" />
                            </div>
                            <div>
                                <img className={styles.screen__previewImg} src={Page2Img} alt="" />
                            </div>
                            <div>
                                <img className={styles.screen__previewImg} src={Page3Img} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResultsScreen;