import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ ...rest }) => (
  <input
    {...rest}
    style={{
      padding: "8px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "16px",
      width: "100%",
      boxSizing: "border-box"
    }}
  />
);
