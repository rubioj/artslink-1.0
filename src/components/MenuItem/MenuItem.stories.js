import { MenuItem } from ".";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
  argTypes: {
    stateProp: {
      options: ["hovered", "disabled", "selected", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    value: "Menu Item",
    divider: false,
    rightSlot: false,
    leftSlot: false,
    smallScreen: true,
    dense: true,
    disGutters: true,
    stateProp: "hovered",
    className: {},
    valueClassName: {},
  },
};
