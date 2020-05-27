import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import EmailSubs from '../components/EmailSubs/EmailSubs';
import SEO from "../components/seo";
import MainPage from '../templates/MainPage/MainPage';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Vova Pilipchatin, a freelance Software Engineer, Web App Developer"
            customTitle
            description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business."
        />
        <MainPage />

        <div className='small-container'>
            <EmailSubs formId={'1386883'} />
        </div>
    </Layout>
)

export default IndexPage
