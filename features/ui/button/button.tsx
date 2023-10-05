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
  buttonSize      : ButtonSize; 
  buttonColor     : ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>; 

export function Button({buttonSize, buttonColor, ...props} : ButtonProps){
  return (
    <button {...props} className={classNames(
            styles.button, 
            styles[buttonSize],
            styles[buttonColor])}/>
  );
}