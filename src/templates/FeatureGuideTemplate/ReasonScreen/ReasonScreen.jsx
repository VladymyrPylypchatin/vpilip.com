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
                            You are the one who bests understands the problem and solution, but <b>your ability to communicate your vision determines your product's success.</b>
                        </p>

                        <p>
                            👉 Organizing your vision into well-defined architecture, features and target audience will help you validate, build & launch your product.
                        </p>

                        <p>
                            <b>This guide helps you organize your SaaS idea to convey it to future customers, builders and get a more in-depth understanding yourself.</b>
                        </p>

                        {/* <p>
                            Developers and designers can build anything. The question is, does it do what you need.
                        </p>
                        <p>
                            👉 You are the one who best understands the problem and solution, but <b>your ability to communicate your vision</b> to designers and developers will ultimately <b>determine your product's success.</b>
                        </p>
                        <p>
                            Well-defined features and architecture of SaaS Application will help you save time, money, and deliver a better product.
                        </p>
                        <p>
                            <b>
                                This guide there to help you organize your SaaS idea to convey it accurately to developers and designers.
                            </b>
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReasonScreen;