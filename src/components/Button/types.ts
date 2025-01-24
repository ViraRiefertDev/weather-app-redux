import type { ReactNode } from "react";

type ButtonType = 'submit'| 'button' | 'reset'

export interface ButtonProps{
  name?: string;
  children?: ReactNode;
  type?:ButtonType;
  onClick?: () => void;
  isWeatherCard?:boolean;
  buttonWidth?: string;
}