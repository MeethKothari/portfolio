import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className={styles.contact}>
        <div className={styles.container}>
            <h1>Find Me 🧐</h1>
            <h3>
              <strong>Address 🏡:</strong> <br/>
              <a href='https://maps.app.goo.gl/qTVo931SfkwLnMZL6'>
              A-203 Adinath Ashirwad Appt, 
              A block, Core - 1<br/>
              Chennai 600 110, 
              Tamil Nadu.
              </a>
            </h3>
            <h3>
            <strong>Contact ☎️:</strong> <br/>
            <a href="tel:8681018587">
            +91 8681018587
            </a>
            </h3>
            <h3>
            <strong>Email 📩:</strong> <br/>
            <a href="mailto:meethukothari@gmail.com?subject=Hello%20Meeth&body=I%20would%20like%20to%20connect%20with%20you.">
            meethukothari@gmail.com
            </a>
            </h3>
        </div>
        <div className={styles.socials}>
           <a href='https://www.instagram.com/_meeth_kothari_/' target='_blank'><FontAwesomeIcon icon={faInstagram} className={styles.icons}/></a>
           <a href='https://www.linkedin.com/in/meeth-kothari-25b834237/' target='_blank'><FontAwesomeIcon icon={faLinkedin} className={styles.icons}/></a>
           <a href='https://github.com/MeethKothari?tab=repositories' target='_blank'><FontAwesomeIcon icon={faGithub} className={styles.icons}/></a>
        </div>
    </div>
  )
}

export default Contact;