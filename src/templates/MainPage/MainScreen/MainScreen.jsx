import React from 'react';
import styles from './MainScreen.module.scss';

const MainScreen = () => {
    return (
        <div className={styles.screen}>
            <div className='small-container'>
                <h2>Vova <br />Pilipchatin</h2>
                <h1>I help Entrepreneurs build SaaS and Internet-Powered Business</h1>
                <p>Hey! I am Vova Pilipchatin, a freelance Software Engineer. I help business owners to get from an idea to launch their digital product or internet-powred business.</p>
                <p>In my blog, you can find stories and lessons from my entrepreneurial journey.</p>
            </div>
        </div>
    );
}

export default MainScreen;