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
      className="input border-2 border-gray-300 focus:border-primary focus:outline-none rounded-lg w-full h-16 transition-all duration-300 ease-linear"
      {...others}
      required={required}
    />  
  );
};

export default Input;
