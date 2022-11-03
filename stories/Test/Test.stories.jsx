import React from "react";

import { Test } from "./Test";

const Template = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <Test {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = { text: "Text" };

export default {
  title: "Test",
  component: Test,
};
