import React from 'react';
import styles from './PortfolioScreen.module.scss';

import SectionHeader from '../../../components/UI/SectionHeader/SectionHeader';

const PortfolioScreen = () => {
    return (
        <>
            <div className={styles.screen}>
                <div className='small-container'>
                    <SectionHeader>What I have done</SectionHeader>
                    <p>
                        This is what my clients say about my work:
                   </p>

                    <p>
                        <i>
                            “I have spent over $100,000 in developers and out sourcing assisting. This guy is on the top of my list and I hope to work with him for years to come! Truly an asset to any business.”
                        </i>
                        <br />
                        <b>
                            - Daniel Pushkin, CEO of Real Estate Agency, NY
                        </b>
                    </p>

                    <p>
                        <i>
                            “It was great working with Mykola. He did extremely high quality work and went above and beyond on our project. He will take your idea and make it happen. Very professional. Will hire again for sure.”
                        </i>
                        <br />
                        <b>
                            - Ariel Mickenzy, CEO of SaaS Justaskme and Wiperts, NY
                        </b>
                    </p>
                </div>

            </div>
            <div className='container section-separator'></div>
        </>
    );
}

export default PortfolioScreen;