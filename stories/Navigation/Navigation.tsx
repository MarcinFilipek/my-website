import React from "react";
import { Typography, useTheme } from "@mui/material";
import { NavItems } from "./types";
import Link from "next/link";

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
        display: "inline-block",
        padding: "20px",
      }}
      data-testid="navigation"
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "50px",
          padding: "0",
          margin: "0",
        }}
      >
        {navItems.map((navItem) => (
          <li key={navItem.id}>
            <Link href={navItem.href} style={{ textDecoration: "none" }}>
              <Typography
                variant="body1"
                style={{ color: theme.palette.primary.light }}
                data-testid={`nav-item-${navItem.id}`}
              >
                {navItem.text}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
