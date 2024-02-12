import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize{
  sm = "sm",
  md = "md", 
  lg = "lg", 
  xl = "xl"
}

export enum TextPlacement{
  leading   = "leading",
  trailing  = "trailing", 
  noText    = "noText"
}

export enum ButtonColor{
  primary     = "primary", 
  secondary   = "secondary",
  gray        = "gray", 
  empty       = "empty",
  emptyGray   = "emptyGray" 
}

type ButtonProps = {
  children        : React.ReactNode;
  buttonSize      : ButtonSize;
  buttonColor     : ButtonColor;
};

export function Button({children, buttonSize, buttonColor} : ButtonProps){
  return (
    <button className={classNames(
            styles.button, 
            styles[buttonSize],
            styles[buttonColor])}>
    {children}
    </button>
  );
}