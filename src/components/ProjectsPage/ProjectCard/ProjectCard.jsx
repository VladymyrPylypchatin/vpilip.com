import React from 'react';
import styles from './ProjectCard.module.scss';
import Skill from '../../UI/Skill/Skill';

const ProjectCard = (props) => {
    return (
        <article className={styles.projectCard}>
            <h2>{props.title}</h2>
            <div className={styles.projectCard__description}>{props.description}</div>
            <div className={styles.projectCard__skills}>
                {props.skills.map(skill => <Skill>{skill}</Skill>)}
            </div>
        </article>
    );
};

export default ProjectCard;