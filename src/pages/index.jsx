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
            <p>
                I am creating Web Applications an Write about my experience in my blog.
            </p>
            <p>
                From an idea to launch, I am helping create digital products and Internet-powered business.
            </p>
            <p>If it sounds like it is what you need, you can contact me <Link to="/contacts/">here</Link>. Would love to hear from you.</p>
            <p>In my blog You can find lessons I learn about  Web App development, building Freelance business and launching Digital Products.</p>
            <p>Otherwise, you can learn more about me <Link to="/about/">here</Link>, or take a look at my <Link to="/projects/">portfolio</Link>.</p>
        </div>
    </Layout>
)

export default IndexPage
