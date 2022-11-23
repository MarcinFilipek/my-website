import { styled, Typography } from "@mui/material";

export const Container = styled("div")(
  ({ theme }) => `
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        border: 1px solid ${theme.palette.primary.main}66;
        background: #100d21;
        border-radius: 0.8rem;
        box-shadow: 0px 4px 24px ${theme.palette.primary.main}26;
        `
);

export const Title = styled(Typography)(
  ({ theme }) => `color: ${theme.palette.primary.main};`
);

export const Description = styled(Typography)(
  ({ theme }) => `color: ${theme.palette.secondary.main};`
);
