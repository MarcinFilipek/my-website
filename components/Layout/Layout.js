import styles from "./Layout.module.scss";
import { Navigation } from "../../stories";

export const Layout = ({ children }) => {
  const navItems = [
    { id: 0, text: "Home", href: "/" },
    { id: 1, text: "Blog", href: "/blog" },
    { id: 2, text: "O mnie", href: "/about" },
  ];
  return (
    <>
      <div className={styles.fixedBackground} />
      <div
        style={{
          display: "flex",
          width: "100%",
          position: "fixed",
          bottom: "25px",
          justifyContent: "center",
        }}
      >
        <Navigation navItems={navItems} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};
