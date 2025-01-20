import { ReactNode } from "react";

type ButtonType = 'submit'| 'button' | 'reset'

export interface ButtonProps{
  name?: string;
  children?: ReactNode;
  type?:ButtonType;
  onClick?: () => void;
  disabled?:boolean;
  buttonWidth?: string;
}