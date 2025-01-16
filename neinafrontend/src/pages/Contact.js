import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import styles from '../styles/Contact.module.css';
import Layout from './Layout';

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactContainer}>
        <div className={styles.header}>
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me through any of the methods below!</p>
        </div>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <span className={styles.contactText}>deepanshigarg0808@gmail.com</span>
              <a href="mailto:deepanshigarg0808@gmail.com" className={styles.contactLink}>Send an Email</a>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <FaPhone className={styles.icon} />
            <div>
              <span className={styles.contactText}>+91 7505644760</span>
              <a href="tel:+917505644760" className={styles.contactLink}>Call Me</a>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <FaLinkedin className={styles.icon} />
            <div>
              <span className={styles.contactText}>Deepanshi Garg</span>
              <a href="https://www.linkedin.com/in/deepanshi-garg-320b0a220/" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                View LinkedIn Profile <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          
          <div className={styles.contactItem}>
            <FaExternalLinkAlt className={styles.icon} />
            <div>
              <span className={styles.contactText}>Github</span>
              <a href="https://github.com/deepanshigarg08" className={styles.contactLink} target="_blank" rel="noopener noreferrer">
                View Github <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
