import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/Layout";
import PersonImage from '../components/AboutPage/PersonImage/PersonImage';
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="small-container">
      <PersonImage />
      <p>Hey, I am Vova Pylypchatin a Software Engeener and Writer. I turn ideas of my client and my own into Web Applications and SaaS Projects. I love creating. I help to myclient  not only with development but with stratagy, architecture and consulting. To make sure that their buissness idaes are succecessfull I not only. I love all about creating Digital Products: Stretagy, Archetucre, Development & Design.</p>
      <p>When I don't create Digital Products, I spend time documenting my jounreny of building my freelance buissness, share my knowladge about creating digital products. If you are interedsted in some of that take a look at my blog.</p>
      <p>If this sounds like yoou too, get in touch, I would love to chat</p>
      <p>Other wise, here you can learn more about who I am and what I do or chek out protfolio.</p>
    </div>
  </Layout>
)

export default IndexPage
