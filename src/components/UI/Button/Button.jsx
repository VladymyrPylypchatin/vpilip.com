import React from 'react';
import styles from './Button.module.scss';

const Button = ({ theme, stretch, children, className }) => {
    const buttonClasses = [styles.button, className];
    if (theme === 'blue') buttonClasses.push(styles.button_blue);
    if (stretch) buttonClasses.push(styles.button_stretch);
    return (
        <button className={buttonClasses.join(' ')}>
            {children}
        </button>
    );
};

export default Button;