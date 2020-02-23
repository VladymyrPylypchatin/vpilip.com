import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import ProjectCard from '../components/ProjectsPage/ProjectCard/ProjectCard';

const styles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    columnGap: 0,
    rowGap: 50,
};
const ProjectsPage = () => (
    <Layout>
        <SEO
            title="Portfolio | Vova Pilipchatin"
            customTitle
            description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business."
        />
        <div className="container">
            <div style={styles}>
                <ProjectCard
                    title='JoinPrivacy'
                    description='Digital Privacy Managment Web App. Take care of private data collected by services like Google, Facebook, Twitter...'
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
)

export default ProjectsPage;
