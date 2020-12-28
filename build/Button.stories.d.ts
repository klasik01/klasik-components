/// <reference types="react" />
import { PrimaryButtonInterface } from "./buttons/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
declare const _default: {
    title: string;
    component: (props: PrimaryButtonInterface) => JSX.Element;
    decorators: ((story: any) => JSX.Element)[];
    argTypes: {
        color1: {
            control: string;
        };
        color2: {
            control: string;
        };
        onClick: {
            action: string;
        };
    };
    parameters: {
        actions: {
            argTypesRegex: string;
        };
    };
};
export default _default;
export declare const Default: any;
export declare const Inverse: any;
