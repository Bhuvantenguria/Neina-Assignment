import Head from 'next/head';
import styles from '../styles/About.module.css';
import Layout from './Layout';

const About = () => {
  return (
   <Layout>
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about Bhuvan Tenguria, a passionate Full Stack Developer with a strong background in technology and coding." />
      </Head>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>About Me</h1>
        </div>
        
        <div className={styles.content}>
          <section className={styles.introduction}>
            <p>
              Hi, I'm <strong>Deepanshi Garg</strong>! I am pursuing my <strong>Bachelor of Technology in Computer Science</strong> from <strong>GLA University, Mathura</strong>. My journey in the tech world has been fueled by a passion for problem-solving, coding, and creating impactful software solutions.
            </p>
            <p>
              My passion for technology extends beyond just coding; I enjoy solving complex problems and continuously enhancing my skills in <strong>Data Structures, Algorithms, and Full Stack Development</strong>. 
            </p>
            <p>
              I am eager to contribute my skills and experiences to a dynamic team where I can continue to grow as a developer.
            </p>
          </section>

          <section className={styles.portfolio}>
            <p>
              You can view my work and learn more about my projects on my <a href="https://github.com/deepanshigarg08" target="_blank" rel="noopener noreferrer"><strong>GITHUB</strong></a>.
            </p>
          </section>
        </div>
      </div>
    </>
   </Layout>
  );
};

export default About;
