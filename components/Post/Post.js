import Image from "next/image";
import styles from "./Post.module.scss";
import { Content } from "./components/Content";

export const Post = ({ postFields, createdAt }) => {
  const postImageUrl = postFields.postImage.fields.file.url;
  const imageSize = postFields.postImage.fields.file.details.image;
  const { postTitle } = postFields;
  const { content } = postFields.postContent;

  return (
    <div className={styles.container}>
      <Image
        src={`https:${postImageUrl}`}
        alt="Post image"
        {...imageSize}
        style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{postTitle}</span>
        </div>
        <Content content={content} />
        <p className={styles.date}>{new Date(createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
};
