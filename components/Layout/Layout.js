import styles from "./Layout.module.scss";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => (
  <>
    <div className={styles.fixedBackground} />
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </div>
  </>
);
