// import "../styles/globals.css";
import { Layout } from "../components";
import { ThemeProvider } from "@mui/material";
import { theme, GlobalStyles } from "../theme/ThemeConfig";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
