import { FormLabel } from ".";

export default {
  title: "Components/FormLabel",
  component: FormLabel,
  argTypes: {
    color: {
      options: ["warning", "info", "success", "secondary", "primary", "one", "error"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "error", "enabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    value: "Label",
    color: "warning",
    state: "disabled",
    className: {},
  },
};
