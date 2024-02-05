import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Home
      </h1>
      <text>
        5HAi, share a text get the facts
      </text>
      <div>
        <section></section> {/* Here shall be the form component*/}
      </div>
    </main>
  );
}
