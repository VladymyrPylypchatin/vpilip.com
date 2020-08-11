import React from 'react';
import styles from './PortfolioScreen.module.scss';

import SectionHeader from '../../../components/UI/SectionHeader/SectionHeader';
import Skill from '../../../components/UI/Skill/Skill';


const PortfolioScreen = () => {
    return (
        <>
            <div className={styles.screen}>
                <div className='small-container'>
                    <SectionHeader>What I have done</SectionHeader>
                    <p>
                        It is what my clients say about my work:
                   </p>

                    <p>
                        <i>
                            “I have spent over $100,000 in developers and out sourcing assisting. This guy is on the top of my list and I hope to work with him for years to come! Truly an asset to any business.”
                        </i>
                        <br />
                        <b>
                            - Daniel Kuperhand, CEO of Real Estate Agency, NY
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
                <div className={styles.screen__portfolio}>
                    {/* <img className={styles.screen__portfolioBg} src={PortfolioBgImg} alt="background" /> */}
                    <div className='container'>
                        <div className={styles.portfolioItem}>
                            <div className={styles.portfolioItem__meta}>
                                <h3>Coming soon...</h3>
                                <p>Platform to help influencers monetize their expertise and raise funds.</p>
                            </div>
                            <div className={styles.portfolioItem__skills}>
                                <Skill>Project Discovery</Skill>
                                <Skill>Solution Architecture</Skill>
                                <Skill>Web App Development</Skill>
                                <Skill>Stripe Payment Integration</Skill>
                                <Skill>Blog Development</Skill>
                            </div>
                        </div>
                        <div className={styles.portfolioItem}>
                            <div className={styles.portfolioItem__meta}>
                                <h3>JoinPrivacy</h3>
                                <p>Digital Privacy Management Web App. Take care of private data collected by services like Google, Facebook, Twitter...</p>
                            </div>
                            <div className={styles.portfolioItem__skills}>
                                <Skill>Project Discovery</Skill>
                                <Skill>Solution Architecture</Skill>
                                <Skill>Web App Development</Skill>
                                <Skill>Blog Development</Skill>
                            </div>
                        </div>
                        <div className={styles.portfolioItem}>
                            <div className={styles.portfolioItem__meta}>
                                <h3>Real Estate Agency Automation</h3>
                                <p>Web application for smart matching customer requests and realities. Auto email and SMS notifications. A platform for combining data from 2 CRM systems.</p>
                            </div>
                            <div className={styles.portfolioItem__skills}>
                                <Skill>Project Discovery</Skill>
                                <Skill>Solution Architecture</Skill>
                                <Skill>Web App Development</Skill>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container section-separator'></div>
        </>
    );
}

export default PortfolioScreen;