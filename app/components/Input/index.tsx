"use client";

import React, { MutableRefObject } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  required?: boolean;
}
const Input = ({
  className,
  inputRef,
  required = true,
  ...others
}: InputProps) => {
  return (
    <input
      ref={inputRef}
      className="input border-2 border-gray-300 focus:outline-none rounded-md w-full h-16"
      {...others}
      required={required}
    />
  );
};

export default Input;
