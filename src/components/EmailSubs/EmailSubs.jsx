import React from 'react';
import { useForm } from "react-hook-form";
import styles from './EmailSubs.module.scss';

import JourneyIcon from '../../assets/img/journey.svg';
import AdviceIcon from '../../assets/img/advice.svg';

const EmailSubs = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.emailSubs}>
            <h2>Get posts on Building SaaS and Interent-Powered Buissness right in your inbox</h2>
            <div className={styles.emailSubs__points}>
                <div>
                    <img src={JourneyIcon} alt="Journey" />
                    <span>
                        Lessons and stories from my entrepreneurial journey
                    </span>
                </div>
                <div>
                    <img src={AdviceIcon} alt="Advice" />
                    <span>
                        Advices, stories and interviews from SaaS Founders and Marketers
                    </span>
                </div>
            </div>

            <div className={styles.emailSubs__form}>
                <input
                    name='email'
                    type="email"
                    placeholder='Your email address...'
                    ref={register({
                        required: true,
                    })}
                />
                <button onClick={handleSubmit(onSubmit)}>Join now</button>
            </div>
        </div>
    );
};

export default EmailSubs;