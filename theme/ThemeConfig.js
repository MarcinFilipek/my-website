import { createTheme, responsiveFontSizes } from "@mui/material";
import { createGlobalStyle } from "styled-components";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#BF93EC",
        main: "#853BCE",
      },
      secondary: {
        main: "#FFFFFF",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
    spacing: 8,
    typography: {
      fontSize: 16,
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  })
);

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html, 
body, 
#__next {
    padding: 0;
    margin: 0;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    scrollbar-width: 12px;
    scrollbar-color: #fb8500 #023047;
    scroll-behavior: smooth;
}

body::-webkit-scrollbar {
  width: 12px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #023047; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #fb8500; /* color of the scroll thumb */
  border-radius: 6px; /* roundness of the scroll thumb */
}`;
