import React from 'react';
import styles from './MainScreen.module.scss';

const MainScreen = () => {
    return (
        <div className={styles.screen}>
            <div className='small-container'>
                <h2>Vova <br />Pilipchatin</h2>
                <h1>I help Entrepreneurs build SaaS and Internet-Powered Business</h1>
                <p>Hey! I am Vova Pilipchatin, a freelance Software Engineer. I help buissness owners to get from and idea to launch of their digital product or internet-powred buissness.</p>
                <p>Also I share stories and lessons from my entepranurial journey in my blog.</p>
            </div>
        </div>
    );
}

export default MainScreen;