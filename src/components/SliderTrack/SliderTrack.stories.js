import { SliderTrack } from ".";

export default {
  title: "Components/SliderTrack",
  component: SliderTrack,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "none", "secondary"],
      control: { type: "select" },
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "medium",
    color: "primary",
    disabled: true,
    orientation: "vertical",
    className: {},
  },
};
