import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, theme, stretch, children, className, height, width, isLoading }) => {
    const buttonClasses = [styles.button, className];
    if (theme === 'blue') buttonClasses.push(styles.button_blue);
    if (stretch) buttonClasses.push(styles.button_stretch);
    if (isLoading) buttonClasses.push(styles.button_loading);

    const style = {
        height,
        width,
    };
    return (
        <button onClick={onClick} style={style} className={buttonClasses.join(' ')}>
            {children}
        </button>
    );
};

export default Button;