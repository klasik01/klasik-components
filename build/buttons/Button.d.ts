import React from "react";
interface PrimaryButtonInterface {
    className: string;
    inverse: boolean;
    color1: string;
    color2: string;
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
declare const PrimaryButton: (props: PrimaryButtonInterface) => JSX.Element;
export { PrimaryButton, PrimaryButtonInterface, };
