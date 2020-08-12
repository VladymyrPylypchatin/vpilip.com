import React from 'react';
import styles from './Button.module.scss';

const Button = ({ onClick, theme, stretch, children, className, height, width }) => {
    const buttonClasses = [styles.button, className];
    if (theme === 'blue') buttonClasses.push(styles.button_blue);
    if (stretch) buttonClasses.push(styles.button_stretch);
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