import React from 'react';
import styles from './WritingsScreen.module.scss';
import { Link } from 'gatsby';

import SectionHeader from '../../../components/UI/SectionHeader/SectionHeader';


const WritingsScreen = ({ blogPosts }) => {
    return (
        <>
            <div className={styles.screen}>
                <div className='small-container'>
                    <SectionHeader>Writings</SectionHeader>
                    <div>
                        <p>
                            In my blog, I regularly share my stories from the entrepreneurial journey. I am an avid learner and developing my skills in business, marketing, and software product building. So you can find plenty of posts in my blog on these topics.                        </p>

                        <p>
                            Some of my writings were featured in major Medium’s publications like:
                        </p>
                        <ul>
                            <li><a href="https://codeburst.io/" rel="noopener noreferrer" target='_blank'>The Startup - 642k+ followers</a></li>
                            <li><a href="https://medium.com/swlh" rel="noopener noreferrer" target='_blank'>CodeBrust - 95k+ followers</a></li>
                            <li><a href="https://medium.com/javascript-in-plain-english" rel="noopener noreferrer" target='_blank'>JavaScript in Plain English - 27k+ followers</a></li>
                            <li><a href="https://levelup.gitconnected.com/" rel="noopener noreferrer" target='_blank'>Level Up Coding - 37k+ followers</a></li>
                        </ul>
                    </div>
                    <div className={styles.screen__writings}>
                        {
                            blogPosts.map(post => {
                                return (
                                    <div key={post.id} className={styles.screen__writingItem}>
                                        <h2><Link to={`/${post.id}/`}>{post.title}</Link></h2>
                                        <h3>{post.subTitle}</h3>
                                    </div>
                                );
                            })
                        }


                    </div>
                    <Link to="/blog/" className={styles.screen__more}>More posts -></Link>
                </div>
            </div>
            {/* <div className='container section-separator'></div> */}
        </>
    );
}

export default WritingsScreen;