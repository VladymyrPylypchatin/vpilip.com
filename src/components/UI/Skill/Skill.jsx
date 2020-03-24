import React from 'react';
import styles from './Skill.module.scss';

const Skill = (props) => {
    return (
        <div className={styles.skill}>{props.children}</div>
    );
};

export default Skill;