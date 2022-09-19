import styles from "./PostWidget.module.scss";

export const PostWidget = () => (
  <div className={styles.container}>
    <span className={styles.title}>Title</span>
    <p className={styles.description}>Note</p>
  </div>
);
