import { Analytics } from "@vercel/analytics/react";
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
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
