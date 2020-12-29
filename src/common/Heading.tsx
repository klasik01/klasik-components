import React from "react";

enum EnumHeaderLevel {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}

interface IHeading {
  level: EnumHeaderLevel,
  label: string,
  className: string
}

const Heading = (props: IHeading) => {
  const { label, level, className } = props;

  switch (level) {
    case EnumHeaderLevel.H1:
      return <h1 className={`${className}`}>{label}</h1>;
    case EnumHeaderLevel.H2:
      return <h2 className={`${className}`}>{label}</h2>;
    case EnumHeaderLevel.H3:
      return <h3 className={`${className}`}>{label}</h3>;
    case EnumHeaderLevel.H4:
      return <h4 className={`${className}`}>{label}</h4>;
    case EnumHeaderLevel.H5:
      return <h5 className={`${className}`}>{label}</h5>;
    case EnumHeaderLevel.H6:
      return <h6 className={`${className}`}>{label}</h6>;
    default:
      return <div>{label}</div>;
  }
};

export {
  Heading,
  IHeading,
  EnumHeaderLevel
};
