import { SpacingVertical } from ".";

export default {
  title: "Components/SpacingVertical",
  component: SpacingVertical,
  argTypes: {
    spacing: {
      options: ["seven", "two", "three", "four", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    spacing: "seven",
    visibility: true,
    className: {},
  },
};
