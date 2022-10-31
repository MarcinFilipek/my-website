import React from "react";

import { Test } from "./Test";

export default {
  title: "Test",
  component: Test,
  parameters: {},
};

const Template = (args) => <Test {...args} />;

export const Default = Template.bind({});
Default.args = {};
