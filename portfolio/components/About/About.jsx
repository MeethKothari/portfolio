import React from 'react';
import styles from './About.module.css';
import profileImage from './profile.jpg';

const About = () => {
  return (
  <>
    <div className={styles.profileContainer}>
    <div className={styles.about}>
        <div>
        <h3>Hello guys 😊!!</h3>
        <h2>
            I am Meeth Kothari ,<br/>
            A <span style={{color: 'yellow'}}> "Software Developer" </span>
        </h2>
        </div>
        <div>
            <ul>
            <li className={styles.qualifications}>Building Modern Web Applications</li>
            <li className={styles.qualifications}>calable Front-End and Back-End Solutions</li>
            <li className={styles.qualifications}>Responsive, User-Friendly Interfaces</li>
            </ul>
        </div>
    </div>
    <img src={profileImage} alt="Meeth Kothari" className={styles.profileImage} />
    </div>

    <p className={styles.mySelf}>
        " Having transitioned from finance to the world of software development, I enjoy crafting interactive and dynamic web experiences. 
        My journey reflects adaptability and a drive to explore creative problem-solving through technology. <br />
        When I’m not coding, you’ll often find me exploring new tools, building personal projects, or diving deep into tech communities"
    </p>
  </>
  )
}

export default About;