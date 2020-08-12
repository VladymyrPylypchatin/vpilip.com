import React, { FC } from 'react';
import styles from './Input.module.scss';
import { Ref, FieldError } from 'react-hook-form';


const Input = props => {
    const id = "styled_input_" + Math.random().toString();
    const style = {
        width: props.width,
        height: props.height,
        marginBottom: props.marginBottom
    };

    const inputClasses = [styles.input];
    if (props.className) inputClasses.push(props.className);
    if (props.readonly) inputClasses.push(styles.input_readonly);

    return (
        <div className={inputClasses.join(' ')} style={style}>
            <label htmlFor={id}>{props.label}</label>
            <div className={styles.inputContainer}>
                <input defaultValue={props.defaultValue} name={props.name} type={props.type} id={id} placeholder={props.placeholder} ref={props.register} />
            </div>
            <div className={styles.input__error}>{props.error ? props.error.message : null}</div>
        </div>
    );
}

export default Input;