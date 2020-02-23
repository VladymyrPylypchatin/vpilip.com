import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO
            title="Vova Pilipchatin, a freelance Software Engineer, Web App Developer"
            customTitle
            description="Hi, there! I am Vova Pilipchatin, a freelance Software Engineer. I am developing a Web Application, learning how to launch successful SaaS projects and learn how to build a freelance business."
        />
        <div className="small-container">
            <h1 className='small-h1'>Hi, I am Vova Pilipchatin, a freelance Software Engineer, Web App Deveveloper.</h1>
            <p>I love turning ideas of my client and my own into real-life Digital products. I can help you define a business model, plan out a strategy, architect a solution and develop your Web Application.</p>
            <p>If it sounds like it is what you need, you can contact me <Link to="/contacts">here</Link>. Would love to hear from you.</p>
            <p>When I am not building software I am writing about it. I share lessons learned about building a Web Application and document my journey of building a freelance business. If you are interested in some of that, check out my blog</p>
            <p>Otherwise, you can learn more about me <Link to="/about">here</Link>, or take a look at my <Link to="/portfolio">portfolio</Link>.</p>
        </div>
    </Layout>
)

export default IndexPage
