import { styled } from "@mui/material/styles";
import Link from "next/link";
import { Typography } from "@mui/material";

export const Container = styled("nav")(
  ({ theme }) => `
        border: 1px solid ${theme.palette.primary.main}66;
        background: #100d21;
        border-radius: 0.8rem;
        display: inline-block;
        padding: 20px;`
);

export const StyledUl = styled("ul")(
  ({ theme }) => `
        display: flex;
        list-style: none;
        gap: 50px;
        padding: 0;
        margin: 0;`
);

export const StyledLink = styled(Link)(
  ({ theme }) => `
  text-decoration: none;`
);

export const StyledTypography = styled(Typography)(
  ({ theme }) => `color: ${theme.palette.primary.light};`
);
