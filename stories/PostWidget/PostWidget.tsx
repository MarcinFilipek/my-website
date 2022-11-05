import React from "react";
import { Typography, useTheme } from "@mui/material";

type Props = {
  title: string;
};

export const PostWidget = ({ title }: Props) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "1rem",
        border: `1px solid ${theme.palette.primary.main}66`,
        background: "#100d21",
        borderRadius: "0.8rem",
        boxShadow: `0px 4px 24px ${theme.palette.primary.main}26`,
      }}
    >
      <Typography variant="h6" style={{ color: theme.palette.primary.main }}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        style={{ color: theme.palette.secondary.main }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </div>
  );
};
