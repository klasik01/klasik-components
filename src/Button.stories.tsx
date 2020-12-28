import React from "react";
import { PrimaryButton, PrimaryButtonInterface } from "./buttons/Button";
import { Story } from "@storybook/react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BUTTON_PRIMARY_1, BUTTON_PRIMARY_2 } from "./constants/colors";

export default {
  title: "Buttons",
  component: PrimaryButton,
  decorators: [story =>
    <div style={{ padding: "3rem" }}> {story()}
    </div>],
  argTypes: {
    color1: { control: "color" },
    color2: { control: "color" },
    onClick: { action: "clicked" },
  },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};

const Template: Story<PrimaryButtonInterface> = args => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  label: "Primary Button",
  color1: BUTTON_PRIMARY_1,
  color2: BUTTON_PRIMARY_2,
  inverse: false,
  className: "",
};

export const Inverse = Template.bind({});
Inverse.args = {
  id: "2",
  label: "Inverse Primary Button",
  color1: BUTTON_PRIMARY_1,
  color2: BUTTON_PRIMARY_2,
  inverse: true,
  className: "",
};
