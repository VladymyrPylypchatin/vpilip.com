import React from "react"
import PropTypes from "prop-types"
import '../../assets/styles/reset.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.scss';
// import classes from "./Layout.module.scss";

import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        Fotter
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
