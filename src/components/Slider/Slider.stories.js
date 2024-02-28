import { Slider } from ".";

export default {
  title: "Components/Slider",
  component: Slider,
  argTypes: {
    size: {
      options: ["medium", "small"],
      control: { type: "select" },
    },
    variant: {
      options: ["continuous", "marks", "range"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "hover", "enabled"],
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
    label: false,
    values: true,
    size: "medium",
    variant: "continuous",
    color: "primary",
    state: "disabled",
    orientation: "vertical",
    className: {},
    overlapGroupClassName: {},
    sliderRailSizeSmallColorClassName: {},
  },
};
