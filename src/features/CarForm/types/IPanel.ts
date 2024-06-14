import { InputHTMLAttributes } from "react";

export type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  text?: string;
  helperText?: string;
}
