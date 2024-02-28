import { SliderThumb } from ".";

export default {
  title: "Components/SliderThumb",
  component: SliderThumb,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "none", "secondary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "medium",
    color: "primary",
    disabled: true,
    className: {},
  },
};
