import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonColor, ButtonSize, TextPlacement } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  buttonSize,
  buttonColor,
  textPlacement,
  children,
  iconSrc,
  altText
}) => (
  <div style={{ padding: 50 }}>
    <Button
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      textPlacement={textPlacement}
      iconSrc={iconSrc}
      altText={altText}
    >
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  buttonSize: ButtonSize.sm,
  buttonColor: ButtonColor.primary,
  textPlacement: TextPlacement.noText,
  children: "Label",
  iconSrc: "/icons/react.svg"
};

Default.parameters = {
  viewMode: "docs",
};
