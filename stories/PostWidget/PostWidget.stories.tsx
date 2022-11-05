import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { PostWidget } from "./PostWidget";

const Template: ComponentStory<typeof PostWidget> = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <PostWidget {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = { title: "Title" };

export default {
  title: "PostWidget",
  component: PostWidget,
} as ComponentMeta<typeof PostWidget>;
