import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
   <section className={styles.aboutMe}>
      <h2>About Me</h2>
      <p>
        I am a dedicated software developer with a passion for building
        interactive web applications. I have experience in React, JavaScript,
        HTML, CSS, and backend technologies.
      </p>
      <h3>Education</h3>
      <ul>
        <li>B.Sc. in Computer Science, XYZ University</li>
      </ul>
      <h3>Hobbies</h3>
      <ul>
        <li>Coding new projects</li>
        <li>Photography</li>
        <li>Traveling</li>
      </ul>
    </section>
  );
}
