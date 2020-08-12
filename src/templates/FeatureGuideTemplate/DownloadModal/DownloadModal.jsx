import React, { useState } from 'react';
import styles from './DownloadModal.module.scss';
import { useForm } from "react-hook-form";
import * as yup from "yup"

import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import MockupImg from '../../../assets/img/resources/featureguide/mockup2.png';

const FormSchema = yup.object().shape({
    email: yup.string().required('Please enter your email').email('Please check your email'),
});

const DownloadModal = ({ ...rest }) => {
    const [isLoading, setLoading] = useState(false);

    const { register, handleSubmit, watch, errors, setValue } = useForm({
        validationSchema: FormSchema,
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        setLoading(true);
        alert('Submited')
        // const response = await addSubscriber(, data.email, window.location.href);
        // toast.success('Thank you! Please confirm subscription in your mailbox');
        // setValue('email', '')
        // console.log(response);
        setLoading(false);
    };

    console.log(errors)

    return (
        <Modal {...rest}>
            <div className={styles.modal}>
                <div>
                    <h4>Where to send your book?</h4>
                    <Input
                        name="email"
                        placeholder="Your email"
                        height={50}
                        register={register}
                        error={errors.email}
                    />
                    <Button
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
                {/* <div className={styles.modal__mockup}>
                    <img src={MockupImg} alt="SaaS App Feature Guide" />
                </div> */}
            </div>
        </Modal>
    );
};


export default DownloadModal;
