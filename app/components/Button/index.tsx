import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

const Button = ({
  className,
  children,
  disabled,
  onClick,
  animate,
  ...others
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`capitalize text-white  w-full rounded p-3 bg-primary transition-all transform ${
        animate && "hover:scale-x-105"
      } hover:bg-accent cursor-pointer ${className}`}
      {...others}
    >
      {disabled ? <>Loading...</> : children}
    </button>
  );
};

export default Button;
