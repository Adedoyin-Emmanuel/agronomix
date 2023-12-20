import React from "react";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  disabled,
  onClick,
  ...others
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`capitalize text-white ${className} w-full rounded p-3 btn-secondary transition-colors `}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
