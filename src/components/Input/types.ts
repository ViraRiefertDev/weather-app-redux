import type { ChangeEvent } from "react";


export interface InputProps {
  name: string,
  id?: string,
  type?: 'text' | 'email' | 'password' | 'tel'|'number',
  placeholder?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
