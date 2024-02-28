import { AppBar } from ".";

export default {
  title: "Components/AppBar",
  component: AppBar,
  argTypes: {
    color: {
      options: ["default", "secondary", "primary", "inherit-white", "transparent"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "default",
    className: {},
    paperClassName: {},
    toolbarSmallScreen: false,
    toolbarTypographyBodyClassName: {},
    toolbarTypographyVariant: "body-1",
    toolbarTypographyContent: "Website",
    toolbarIconButtonIconSize: "medium",
  },
};
