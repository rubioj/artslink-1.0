import { IconOnlyFalseWrapper } from ".";

export default {
  title: "Components/IconOnlyFalseWrapper",
  component: IconOnlyFalseWrapper,
  argTypes: {
    items: {
      options: ["three", "four"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    iconOnly: true,
    items: "three",
    className: {},
    bottomNavigationLabelContent: "Label",
    bottomNavigationActiveTrueLabelClassName: {},
    bottomNavigationLabelContent1: "Label",
    bottomNavigationActiveTrueLabelClassNameOverride: {},
    bottomNavigationLabelContent2: "Label",
    bottomNavigationActiveFalseLabelClassName: {},
  },
};
