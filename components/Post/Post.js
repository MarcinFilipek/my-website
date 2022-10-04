import Image from "next/image";
import styles from "./Post.module.scss";

export const Post = ({ postFields }) => {
  const postImageUrl = postFields.postImage.fields.file.url;
  const imageSize = postFields.postImage.fields.file.details.image;
  return (
    <div className={styles.container}>
      <Image src={`https:${postImageUrl}`} alt="Post image" {...imageSize} />
      <div className={styles.content}>
        <span className={styles.title}>Post title.</span>
        <p className={styles.date}>10-11-2022</p>
        <p className={styles.paragraph}>Post content</p>
      </div>
    </div>
  );
};
