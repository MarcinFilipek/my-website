import React from "react";
import { withThemes } from "@react-theming/storybook-addon";
import { ThemeProvider } from "@mui/material";

import { Test } from "./Test";
import { theme } from "../../theme/ThemeConfig";

const providerFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default {
  title: "Test",
  component: Test,
  decorators: [withThemes(null, [theme], { providerFn })],
};

// export const ToStorybook = () => <Test text={"lol"} />;
// ToStorybook.story = {
//   name: "Test",
// };
const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = { text: "Text" };
