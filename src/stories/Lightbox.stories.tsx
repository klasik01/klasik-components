import React from "react";
import { LightBox } from "../common/Lightbox";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SimpleReactLightbox from 'simple-react-lightbox';


export default {
  title: "Lightbox",
  component: LightBox,
  decorators: [story =>
    <div style={{ padding: "3rem" }}> {story()}
    </div>]
};

const Template = args => <SimpleReactLightbox><LightBox {...args} /></SimpleReactLightbox>;

export const Basic = Template.bind({});
Basic.args = {
  className: "",
  images: [
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
    { url: "//placekitten.com/800/1200", alt: "cat" },
  ]
};
