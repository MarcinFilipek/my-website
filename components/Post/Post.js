import Image from "next/image";
import styles from "./Post.module.scss";
import art from "./images/2.webp";

export const Post = () => (
  <div className={styles.container}>
    <Image src={art} alt="Post image" width={782} />
    <div className={styles.content}>
      <span className={styles.title}>Post title.</span>
      <p className={styles.date}>10-11-2022</p>
      <p className={styles.paragraph}>Post content</p>
    </div>
  </div>
);
