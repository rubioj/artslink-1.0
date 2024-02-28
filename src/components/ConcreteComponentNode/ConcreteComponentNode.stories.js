import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    style: {
      options: ["fill", "sharp", "outline"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "fill",
  },
};
