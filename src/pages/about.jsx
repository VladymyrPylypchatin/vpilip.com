import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import PersonImage from '../components/AboutPage/PersonImage/PersonImage';
// import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <div className="small-container">
            <PersonImage />
            <p>
                I am Vova Pilipchating a freelancer software engineer, writer, and sportsman. Most of the time I spend creating Web Apps for my clients and helping them launch digital products. I am excited about occurring new skills and learning the latest technologies.
            </p>
            <p>
                When I don't code, I share my knowledge in my blog about the development of web apps, product launching, and freelancing. You can find there how I am developing products and what I learne from building my freelance business.
            </p>
            <p>
                For building web apps I prefer to use React with Next.js for frontend and Node.js and Express.js for the backend. This stack is highly scalable and drastically decrease time to market. So your idea will get validation faster. To increase code quality and maintainability I use TypeScript.
            </p>
            <p>
                What I can help you with:
            </p>
            <ul>
                <li>Solution Architecture</li>
                <li>Defining Product Strategy</li>
                <li>Consulting</li>
                <li>Defining and Development of MVP</li>
                <li>Development of the Web Applicating</li>
            </ul>
            <p>
                If you feel like you need some of these, get in touch!
            </p>
        </div>
    </Layout>
)

export default IndexPage
