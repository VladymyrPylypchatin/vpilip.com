import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from './EmailSubs.module.scss';
import * as yup from "yup"
import axios from 'axios';
import { toast } from 'react-toastify';


import JourneyIcon from '../../assets/img/journey.svg';
import AdviceIcon from '../../assets/img/advice.svg';

const FormSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Please check your email'),
});

const addSubscriber = async (formId, email, source) => {
    const { data } = await axios.post(`https://api.convertkit.com/v3/forms/${formId}>/subscribe`, {
        api_key: 'DJqo7VuJ3eIiBod0jUfgsA',
        email,
        fields: {
            source: source
        }
    });

    return data;
}

//1383803

const EmailSubs = (props) => {
    const [isLoading, setLoading] = useState(false);

    const { register, handleSubmit, watch, errors, setValue } = useForm({
        validationSchema: FormSchema,
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        setLoading(true);
        const response = await addSubscriber(props.formId, data.email, window.location.href);
        toast.success('Thank you! Please confirm subscription in your mailbox');
        setValue('email', '')
        // console.log(response);
        setLoading(false);
    };

    const formClasses = [styles.emailSubs];
    if (isLoading) formClasses.push(styles.emailSubs_loading);

    return (
        <div className={formClasses.join(' ')}>
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
                    ref={register}
                />
                <button onClick={handleSubmit(onSubmit)}>Join now</button>
            </div>
            <div className={styles.emailSubs__error}>
                {errors.email?.message}
            </div>
        </div>
    );
};

export default EmailSubs;