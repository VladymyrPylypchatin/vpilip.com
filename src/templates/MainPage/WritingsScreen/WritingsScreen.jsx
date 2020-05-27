import React from 'react';
import styles from './WritingsScreen.module.scss';

import SectionHeader from '../../../components/UI/SectionHeader/SectionHeader';


const PortfolioScreen = () => {
    return (
        <>
            <div className={styles.screen}>
                <div className='small-container'>
                    <SectionHeader>Writings</SectionHeader>
                    <p>
                        In my blog I regullary share my stories from entepranurial journey. I constantly learning and growing in things like buissness, marekting and software product building. So you can find plenty posts in my blog on these topics.
                    </p>

                    <p>

                        Some of my writings were fetured in major Medium’s publications like:
                    </p>
                    <ul>
                        <li><a href="">The Start up - 660k followers</a></li>
                        <li><a href="">CodeBrust - 95k followers</a></li>
                        <li><a href="">JavaScript in Plain English - 22k followers</a></li>
                        <li><a href="">Level Up Coding - 22k followers</a></li>
                    </ul>
                </div>
            </div>
            <div className='container section-separator'></div>
        </>
    );
}

export default PortfolioScreen;