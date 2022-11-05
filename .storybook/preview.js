import { ThemeProvider } from "@mui/material";

import { theme } from "../theme/ThemeConfig";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
