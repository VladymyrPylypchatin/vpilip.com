import React from "react"
import PropTypes from "prop-types"
import '../../assets/styles/reset.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.scss';

// import styles from './PostLayout.module.scss';
import Header from './Header/Header';

const PostLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>

      </footer>
    </>
  )
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PostLayout;
