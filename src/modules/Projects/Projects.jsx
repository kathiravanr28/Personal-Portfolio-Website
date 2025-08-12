import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>

          <h3>Portfolio Website</h3>
          <p>Built with React, showcasing my skills and projects.</p>
        </div>
        <div className={styles.projectCard}>

          <h3>E-commerce App</h3>
          <p>React + Firebase powered online store with payment integration.</p>
        </div>
      </div>
    </section>
  );
}
