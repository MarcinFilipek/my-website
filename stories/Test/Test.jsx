import { useTheme } from "@mui/material";

export const Test = ({ text }) => {
  const theme = useTheme();
  console.log("theme: ", theme);
  return (
    <div>
      <span>{theme.spacing}</span>
      <span style={{ color: theme.palette.primary.main }}>{text}</span>
    </div>
  );
};
