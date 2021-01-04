import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { SocialIcons } from "../common/SocialIcons";

export default {
  title: "Social icons",
  component: SocialIcons,
  decorators: [story =>
    <div style={{ padding: "3rem" }}>
      {story()}
    </div>]
};

const Template = args => <SocialIcons {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  className: "",
  data: [
    "facebook.cz/",
    "google.cz/",
    "instagram.cz/",
    "twitter.cz/"
  ]
};
