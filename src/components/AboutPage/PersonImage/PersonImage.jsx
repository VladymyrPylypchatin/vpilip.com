import React from 'react';
import styles from './PersonImage.module.scss';

import AvatarImg from '../../../assets/img/avatar.png';

const PersonImage = () => {
    return (
        <div className={styles.personImage}>
            <div className={styles.personImage__imgContainer}>
                <img src={AvatarImg} alt="Vova Pilipchatin" />
            </div>
            <h1 className={styles.personImage__title}>About me</h1>
        </div>
    );
}

export default PersonImage;