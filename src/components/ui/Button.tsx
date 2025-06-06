import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const getButtonClasses = () => {
    const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

    return `${className} ${disabledClasses}`.trim();
  };

  return (
    <button type={type} onClick={disabled ? undefined : onClick} disabled={disabled} className={getButtonClasses()}>
      {children}
    </button>
  );
};

export default Button;
