import styles from "./Layout.module.scss";

export const Layout = ({ children }) => (
  <>
    <div className={styles.fixedBackground} />
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  </>
);
