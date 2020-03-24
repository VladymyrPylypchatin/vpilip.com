import React from "react"
import PropTypes from "prop-types"
import '../../assets/styles/reset.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.scss';
import styles from "./BlogLayout.module.scss";

import BlogHeader from './BlogHeader/BlogHeader';
import Footer from './Footer/Footer';

const BlogLayout = ({ children }) => {
  return (
    <div className={styles.bg}>
      <BlogHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
