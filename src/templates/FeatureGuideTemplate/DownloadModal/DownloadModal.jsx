import React, { useState } from 'react';
import styles from './DownloadModal.module.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { addSubscriber } from '../../../api';

import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import MockupImg from '../../../assets/img/resources/featureguide/mockup2.png';

const FormSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Please check your email'),
});

const DownloadModal = ({ popupId, ...rest }) => {
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const { register, handleSubmit, watch, errors, setValue } = useForm({
        validationSchema: FormSchema,
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        setLoading(true);
        await addSubscriber('1591084', data.email, document.referrer);
        setLoading(false);
        setSuccess(true);
        window.dataLayer.push({
            event: 'Subscribed',
            resource: 'App Feature Guide',
            source: popupId,
        });
    };

    console.log(errors)

    let content = (
        <div>
            <h4>Where should I send your copy?</h4>
            <Input
                name="email"
                placeholder="Your email"
                height={50}
                register={register}
                error={errors.email}
            />
            <Button
                isLoading={isLoading}
                theme="blue"
                stretch
                height={50}
                className={styles.modal__btn}
                onClick={handleSubmit(onSubmit)}
            >
                Get the book!
        </Button>
            <div className={styles.modal__disclaimer}>
                I collect your email address so you could receive helpful insights on SaaS product building and updates. You may unsubscribe from it at any time.
        </div>
        </div>
    );

    if (isSuccess) {
        content = (
            <div>
                <h4>Thank you! Please check your email inbox for an email from me.</h4>
            </div>
        );
    }

    return (
        <Modal {...rest}>
            <div className={styles.modal}>
                {content}
            </div>
        </Modal>
    );
};


export default DownloadModal;
