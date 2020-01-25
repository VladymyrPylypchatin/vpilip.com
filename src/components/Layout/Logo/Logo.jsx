import React from 'react';
import { Link } from "gatsby"
import styles from './Logo.module.scss';

import LogoImg from '../../../assets/img/rock.svg';

const Logo = (props) => {
    let title = <h2>{props.title}</h2>;
    if (props.header) title = <h1>{props.title}</h1>;

    let logoClasses = [];
    let titleClasses = [styles.logo__text, styles.logo__text_big];
    let subTitleClasses = [styles.logo__text, styles.logo__text_small];
    //Change log view if it is blog logo
    if (props.blog) {
        logoClasses.push(styles.logo__icon_small);
        titleClasses.push(styles.logo__text_bigest);
        subTitleClasses.push(styles.hidden);
    }
    

    return (
        <Link to="/" className={styles.logo}>
            <div className={logoClasses.join(' ')}>
                <img src={LogoImg} alt="Rock Hand" />
            </div>
            <div>
                <div className={titleClasses.join(' ')}>{title}</div>
                <div className={subTitleClasses.join(' ')}>{props.subTitle}</div>
            </div>
        </Link>
    );
};

export default Logo;