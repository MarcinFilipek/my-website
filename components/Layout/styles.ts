import { styled } from "@mui/material";

export const FixedBackground = styled("div")(
  () => `
    z-index: -10;
    position: fixed;
    top: 0px;
    display: block;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
        304.98deg,
        rgba(40, 52, 160, 0.2) 19.12%,
        rgba(0, 0, 0, 0) 99.46%
        ),
        linear-gradient(75.29deg, #13111c 9.33%, #311129 99.33%);`
);

export const NavigationContainer = styled("div")(
  () => `
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 25px;
    justify-content: center;
    z-index: 1;`
);

export const Container = styled("div")(
  ({ theme }) => `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.typography.fontFamily};`
);

export const Content = styled("div")(
  () => `
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1150px;
    padding: 8px;`
);
