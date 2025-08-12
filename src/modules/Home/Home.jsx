import styles from "./Home.module.css";
export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1>Hi, I'm John Doe</h1>
      <p>A passionate Web Developer creating modern, responsive, and user-friendly websites.</p>
    </section>
  );
}