import { Formcontrollabel } from ".";

export default {
  title: "Components/Formcontrollabel",
  component: Formcontrollabel,
  argTypes: {
    labelPlacement: {
      options: ["start", "top", "end", "bottom"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    labelPlacement: "start",
    disabled: true,
    className: {},
    formLabelValue: "Label",
  },
};
