import React from "react"
import PropTypes from "prop-types"
import '../../assets/styles/reset.scss';
import '../../assets/styles/fonts.scss';
import '../../assets/styles/styles.scss';
import styles from './Layout.module.scss';
// import classes from "./Layout.module.scss";

import MediumIcon from '../../assets/img/socials/medium.svg';
import InstagramIcon from '../../assets/img/socials/instagram.svg';
import LinkedInIcon from '../../assets/img/socials/in.svg';
import TwitterIcon from '../../assets/img/socials/twitter.svg';

import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>{children}</main>
      <footer>
        <div className={styles.socials}>
          <a href="https://twitter.com/VPilipchatin" rel="noopener noreferrer" target="_blank">
            <img src={TwitterIcon} alt="twitter" />
          </a>
          <a href="https://medium.com/@vladymyr.pylypchatin" rel="noopener noreferrer" target="_blank">
            <img src={MediumIcon} alt="medium" />
          </a>
          <a href="https://www.instagram.com/vovapilipchatin/" rel="noopener noreferrer" target="_blank">
            <img src={InstagramIcon} alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/vladymyrpylypchatin-b98a4a176/" rel="noopener noreferrer" target="_blank">
            <img src={LinkedInIcon} alt="linkedin" />
          </a>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
