import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Navigation } from "./Navigation";

const Template: ComponentStory<typeof Navigation> = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <Navigation {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  navItems: [
    { id: 0, text: "Home", href: "#" },
    { id: 0, text: "Blog", href: "#" },
    { id: 0, text: "O mnie", href: "#" },
  ],
};

export default {
  title: "Components/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;
