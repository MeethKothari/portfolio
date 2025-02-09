import React from 'react';
import styles from './Resume.module.css';

const Resume = () => {
  const resumeUrl = './Meeth_Resume_2025.pdf';

  return (
    <div>
      {/* Button to trigger resume download */}
      <button className={styles.downloadBtn}>
        <a href={resumeUrl} download="Meeth_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit' }}>
          Download My Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
