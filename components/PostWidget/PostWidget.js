import styles from "./PostWidget.module.scss";

export const PostWidget = ({ title }) => (
  <div className={styles.container}>
    <span className={styles.title}>{title}</span>
    <p className={styles.description}>Note</p>
  </div>
);
