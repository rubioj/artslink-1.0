import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["warning", "info", "default", "success", "secondary", "primary", "error"],
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
    checked: true,
    indeterminate: true,
    size: "large",
    color: "warning",
    stateProp: "hovered",
    className: {},
  },
};
