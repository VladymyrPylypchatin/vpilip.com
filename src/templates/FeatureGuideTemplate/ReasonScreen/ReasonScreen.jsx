import React from 'react';
import styles from './ReasonScreen.module.scss';

import LandingSectionHeader from '../../../components/UI/LandingSectionHeader/LandingSectionHeader';

const ReasonScreen = () => {
    return (
        <section className={styles.screen}>
            <div className={'container'}>
                <div className={styles.screen__content}>
                    <div className={styles.screen__left}>
                        <LandingSectionHeader>Why you need shape your idea</LandingSectionHeader>
                    </div>
                    <div className={styles.screen__right}>
                        <p>
                            Because developers and designers can build anything! The question is does it what you need.
                        </p>

                        <p>
                            You are the one who knows customers, and their pains. Features of the application are dictated by user needs and goals.
                        </p>

                        <p>
                            Clearly defined features of SaaS Application before the development will help you save time, money, and deliver a better product.
                        </p>

                        <ul>
                            <li>Designers and developers better understand the project</li>
                            <li>You can manage your resources better because of more accurate estimates</li>
                            <li>Reduce risk of breaking deadlines and going over the budget</li>
                            <li>Make communication easier</li>
                            <li>Keep everybody aligned with your vision of the project</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonScreen;