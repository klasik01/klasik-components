import React from "react";
import styled from "styled-components";

const PrimaryButtonStyle = styled.button<{
  color1: string,
  color2: string,
  inverse: boolean
}>`
  background: ${props => props.inverse ? props.color1 : props.color2};
  color: ${props => props.inverse ? props.color2 : props.color1};
  border: 2px solid ${props => props.inverse ? props.color2 : props.color1};

  &&:hover {
    color: ${props => props.inverse ? props.color1 : props.color2};
    background: ${props => props.inverse ? props.color2 : props.color1};
    border: 2px solid  ${props => props.inverse ? props.color1 : props.color2};
  }
`;

interface PrimaryButtonInterface {
  className: string,
  inverse: boolean,
  color1: string,
  color2: string,
  label: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const PrimaryButton = (props: PrimaryButtonInterface) => {
  const { label, className, inverse = false, color1, color2, onClick } = props;

  return (
    <PrimaryButtonStyle onClick={onClick}
                        color1={color1}
                        color2={color2}
                        inverse={inverse}
                        className={`btn rounded-0 ${className}`}
    >
      {label}
    </PrimaryButtonStyle>
  );
};

export {
  PrimaryButton,
  PrimaryButtonInterface,
};
