import React from "react";
import { BaseBanner } from "../banners/Banner";
import { EnumHeaderLevel, Heading } from "../common/Heading";

// @ts-ignore
import bg from "./images/bg.jpg";
// @ts-ignore
import logo from "./images/logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  title: "Banners",
  component: BaseBanner
};

// @ts-ignore
// @ts-ignore
const TextTemplate = args => <BaseBanner className={args.bannerClassName} backgroundImage={args.bannerBackgroundImage}>
  <Heading label={args.headingLabel} level={args.headingLevel} className={args.headingClassName} />
</BaseBanner>;

export const BasicBanner = TextTemplate.bind({});
BasicBanner.args = {
  bannerClassName: "align-items-center",
  bannerBackgroundImage: bg,
  headingLabel: "Heading",
  headingLevel: EnumHeaderLevel.H1,
  headingClassName: ""
};

const ImageTemplate = args => <BaseBanner className={args.className} backgroundImage={args.backgroundImage}>
  <img className="w-25 img-fluid" src={logo} alt="Logo" />
</BaseBanner>;

export const WithImage = ImageTemplate.bind({});
WithImage.args = {
  className: "align-items-center",
  backgroundImage: bg
};
