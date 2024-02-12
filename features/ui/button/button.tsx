import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum TextPlacement {
  leading = "leading",
  trailing = "trailing",
  noText = "noText",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
}

type ButtonProps = {
  children: React.ReactNode;
  buttonSize: ButtonSize;
  buttonColor: ButtonColor;
  textPlacement: TextPlacement;
};

export function Button({
  children,
  buttonSize,
  buttonColor,
  textPlacement,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        styles.button,
        styles[buttonSize],
        styles[buttonColor],
        styles[textPlacement],
      )}
    >
      {children}
    </button>
  );
}
