import React from 'react';
import styles from './Modal.module.scss';

import CloseIcon from '../../../assets/img/close.svg';


const Modal = props => {


    let modal = null;
    let overlay = null;

    const modalClasses = [styles.modal];
    if (props.fitContent) modalClasses.push(styles.modal_fitcontent);
    // if (props.height === 'auto') modalClasses.push(styles.modal_);


    if (props.isActive) {
        overlay = <div className={styles.overlay} onClick={props.onClose}></div>;
        modal = (
            <div className={styles.modalWrapper}>
                <div className={modalClasses.join(' ')}>
                    <div className={styles.modal__header}>
                        <div className={styles.modal__title}>{props.title}</div>
                        <div className={styles.modal__close} onClick={props.onClose}>
                            <img src={CloseIcon} alt="Close" />
                        </div>
                    </div>
                    <div className={styles.modal__content}>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            {overlay}
            {modal}
        </>
    );
};

export default Modal;