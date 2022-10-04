import React from "react";
import styles from "./Paragraph.module.scss";

export const Paragraph = ({ content }) => (
  <div>
    {React.Children.toArray(
      content.map(({ value }, i) => <p className={styles.paragraph}>{value}</p>)
    )}
  </div>
);
