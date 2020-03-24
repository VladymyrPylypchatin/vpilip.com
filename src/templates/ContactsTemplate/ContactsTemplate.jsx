import React from 'react';
import styles from './ContactsTemplate.module.scss';

const ContactsTemplate = () => {
    return (
        <div className={styles.contacts}>
            <div className="small-container">
                <h1>
                    Need a help? Say <a href="mailto:vladymyr.pylypchatin@gmail.com">"Hey!"</a>
                </h1>

                <div className={styles.socials}>

                </div>
            </div>
        </div>
    );
};

export default ContactsTemplate;