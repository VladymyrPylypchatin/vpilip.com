import React from 'react';
import Layout from '../components/Layout/Layout';
import ContactsTemplate from '../templates/ContactsTemplate/ContactsTemplate';
import SEO from '../components/seo';

const ContactsPage = () => {
    return (
        <Layout>
            <SEO
                title="Contacts | Vova Pilipchatin"
                customTitle
                description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. Need a hand? You can contact me via email, telegram or twitter"
            />
            <ContactsTemplate />
        </Layout>
    );
};

export default ContactsPage;