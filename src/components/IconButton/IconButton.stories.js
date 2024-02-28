import { IconButton } from ".";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "inherit", "info", "default", "success", "secondary", "primary", "inherit-white", "error"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hovered", "disabled", "focused", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    color: "warning",
    stateProp: "hovered",
    className: {},
    iconSize: "medium",
  },
};
