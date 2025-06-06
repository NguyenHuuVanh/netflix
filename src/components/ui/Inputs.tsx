import React from "react";

interface InputProps {
  placeholder?: string;
  className: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  labelText?: string;
  labelFor?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}
const Input: React.FC<InputProps> = ({
  placeholder = "",
  className = "",
  type = "text",
  name = "",
  // value = "",
  onChange = (e) => e.target.value,
  disabled = false,
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      // value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      className={`${className}`}
      {...props}
    />
  );
};

export default Input;
