import React, {useState} from 'react';
import styles from './AppBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const AppBar = () => {
  const [showAppBar, setShowAppBar] = useState(false);



  const openAppBar = () => {
    setShowAppBar(!showAppBar); // Toggle visibility
  }


  return (
  <>
    <div>
    <FontAwesomeIcon icon={faBars} className={styles.hamburger} onClick={openAppBar}/>
    <p className={styles.title}>Portfolio</p>
    </div>
    
    <div className={ `${styles.appBar} ${showAppBar ? styles.show : ''}`}>
      <div className={styles.appBarLinks}>
        {/* <p>About</p>
        <p>Projects</p>
        <p>Contact</p> */}
        <p><Link to="about" smooth={true} duration={500} className={styles.link}>About</Link></p>
        <p><Link to="projects" smooth={true} duration={500} className={styles.link}>Projects</Link></p>
        <p><Link to="contact" smooth={true} duration={500} className={styles.link}>Contact</Link></p>
      </div>
      <div className = {styles.appBarSocials}>
        <a href='https://www.instagram.com/_meeth_kothari_/' target='_blank'><FontAwesomeIcon icon={faInstagram} className={styles.icons}/></a>
        <a href='https://www.linkedin.com/in/meeth-kothari-25b834237/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icons}/></a>
        <a href='https://github.com/MeethKothari?tab=repositories' target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icons}/></a>
      </div>
    </div>
  </>
  );
};

export default AppBar;
