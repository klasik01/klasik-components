import React from "react";
import styled from "styled-components";


const DefaultSectionStyle = styled.section<{
  backgroundColor: string,
  polygon: boolean,
  color: string
}>`
  color: ${props => props.color};
  padding: 0 20px;
  background: ${props => props.backgroundColor};
  clip-path: polygon(${props => props.polygon ? "0 10%, 100% 0, 100% 90%, 0 100%" : "0 0, 0 100%, 100% 100%, 100% 0"});
`;

interface IDefaultSection {
  children: any,
  backgroundColor: string,
  polygon: boolean,
  color: string,
  className?: string
};

const DefaultSection = (props: IDefaultSection) => {
  const { className, children, backgroundColor = "white", polygon = false, color = "black" } = props;

  return (
    <DefaultSectionStyle
      className={`${className}`}
      backgroundColor={backgroundColor}
      polygon={polygon}
      color={color}>
      {children}
    </DefaultSectionStyle>
  );
};

interface IDefaultContainer {
  className?: string,
  children?: any
}

const DefaultContainer = (props: IDefaultContainer) => {
  const { children, className } = props;

  return (
    <div className={`container ${className}`}>
      <div className="row">
        {children}
      </div>
    </div>
  );
};

export {
  DefaultSection,
  IDefaultSection,
  DefaultContainer
};


