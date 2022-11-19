import React from "react";
import { Typography, useTheme } from "@mui/material";
import { NavItems } from "./types";

type Props = {
  navItems: NavItems;
};

export const Navigation = ({ navItems }: Props) => {
  const theme = useTheme();

  return (
    <nav
      style={{
        border: `1px solid ${theme.palette.primary.main}66`,
        background: "#100d21",
        borderRadius: "0.8rem",
      }}
    >
      <ul style={{ display: "flex", listStyle: "none" }}>
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <Typography
              variant="body1"
              style={{ color: theme.palette.primary.light }}
              data-testid={`nav-item-${navItem.id}`}
            >
              {navItem.text}
            </Typography>
          </li>
        ))}
      </ul>
    </nav>
  );
};
