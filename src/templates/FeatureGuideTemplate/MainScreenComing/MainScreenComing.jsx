import React, { useState } from 'react';
import styles from './MainScreenComing.module.scss';
import Button from '../../../components/UI/Button/Button';
import Input from '../../../components/UI/Input/Input';
import Countdown from 'react-countdown';
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { addSubscriber } from '../../../api';


import MockupImg from '../../../assets/img/resources/featureguide/mockup.png';
import ElipseImg from '../../../assets/img/resources/elipse.svg';

const FormSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Please check your email'),
});

const MainScreen = () => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const { register, handleSubmit, watch, errors, setValue } = useForm({
        validationSchema: FormSchema,
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        setLoading(true);
        await addSubscriber('1601327', data.email, document.referrer);
        setLoading(false);
        setSuccess(true);
        window.dataLayer.push({
            event: 'Subscribed',
            resource: 'App Feature Guide',
            source: 'Early Success',
        });
    };

    let signUPContent = (
        <>
            <Input type="email" name="email" placeholder="Your email" register={register} error={errors.email} />
            <Button isLoading={isLoading} onClick={handleSubmit(onSubmit)} className={styles.screen__cta} theme="blue">Remind me</Button>
        </>
    );

    if (isSuccess) signUPContent = (
        <>
            <h4>Thank you! Please check your email inbox for an email from me.</h4>
        </>
    );

    return (
        <section className={styles.screen}>
            <img className={styles.screen__elipse} src={ElipseImg} alt="Abstract Background" />
            <div className={'container'}>
                <div className={styles.screen__content}>
                    <div className={styles.screen__left}>
                        <h3>Coming soon</h3>
                        <h1>The non-tech founder's SaaS App Feature Guide</h1>
                        <h2>
                            Shape up your SaaS idea and define its features to make your future app aligned with your vision, business goals, and budget.
                        </h2>
                        <div>
                            <span>Live in: </span>
                            <Countdown date={new Date(`08/24/2020 06:00:00`)} renderer={({ total, days, hours, minutes, seconds, milliseconds, completed }) => {
                                return (`${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
                                );
                            }} />
                        </div>
                        <div className={styles.screen__signup}>
                            {signUPContent}
                        </div>
                    </div>
                    <div className={styles.screen__right}>
                        <img src={MockupImg} alt="The non-tech founder's SaaS App Feature Guide" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainScreen;