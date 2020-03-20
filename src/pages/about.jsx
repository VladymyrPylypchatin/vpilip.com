import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import PersonImage from '../components/AboutPage/PersonImage/PersonImage';
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO
            title='About Vova Pilipchatin'
            description='Freelance Software Engeenier and Web Developer who learns how to launch successfull SaaS projects and freelance buisness'
            customTitle
        />
        <div className="small-container">
            <PersonImage />
            <p>
                I am Vova Pilipchating a freelancer Software Engineer.
                I am creating Web Applications an Write about my experience in my blog.
            </p>
            <p>
                From an idea to launch, I am helping create digital products and Internet-powered business by:
            </p>
            <ul>
                <li>Developing Product Strategy</li>
                <li>Solution Architecture</li>
                <li>Defining and launching MVP</li>
                <li>Full Stack Web App development</li>
                <li>Project Management for remote teams</li>
            </ul>
            <p>Need a help? You can contact me <Link to="/contacts/">here</Link></p>
            <p>
                In my blog, I share what I learn about the development of web apps, product launching, and freelance business.
            </p>
            <p>
                For building web apps I prefer to use React with Next.js for frontend and Node.js and Express.js for the backend. This stack is highly scalable and drastically decrease time to market. So your idea will get validation faster. To increase code quality and maintainability I use TypeScript.
            </p>
            <p>
                If you feel like you need some of these, get in touch!
            </p>
        </div>
    </Layout>
)

export default IndexPage
