import React from "react"
import styles from './ProjectsPage.module.scss';

import Layout from "../Layout/Layout";
import SEO from "../seo";
import ProjectCard from './ProjectCard/ProjectCard';


const ProjectsPage = () => {
    return (
        <Layout>
            <SEO
                title="Portfolio | Vova Pilipchatin"
                customTitle
                description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business."
            />
            <div className="container">
                <div className={styles.grid}>
                    <ProjectCard
                        title='JoinPrivacy'
                        description='Digital Privacy Management Web App. Take care of private data collected by services like Google, Facebook, Twitter...'
                        skills={['React.js', 'Next.js', 'Node.js', 'Express.js', 'Puppeteer.js', 'WebSockets', 'AWS']}
                    />
                    <ProjectCard
                        title='Booking System Plugin'
                        description='Booking plugin for WIX, integrated with Stripe, Tookan and Checkr'
                        skills={['JavaScript', 'Stripe API', 'Tookan API', 'Checker API', 'Wix API']}
                    />
                    <ProjectCard
                        title='Real Estate Agency Automation'
                        description='Web application for smart match making customer requests and realties. Auto email and SMS sand out. Platform for combining data from 2 CRM'
                        skills={['Yii2 API', 'JavaScript', 'PHP', 'Gmail API', 'Nexmo API', 'Streack API', 'Streak CRM API', 'Realty MX API', 'Google Firebase']}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default ProjectsPage;
