import styles from "./Welcome.module.scss";

export const Welcome = () => (
  <div className={styles.container}>
    <p className={styles.welcomeText}>Witaj.</p>
  </div>
);
