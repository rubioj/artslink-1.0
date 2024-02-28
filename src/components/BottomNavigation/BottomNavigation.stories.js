import { BottomNavigation } from ".";

export default {
  title: "Components/BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    state: {
      options: ["disabled", "focused", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelContent: "Label",
    active: true,
    label: true,
    state: "disabled",
    className: {},
  },
};
