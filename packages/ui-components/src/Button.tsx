import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...rest }) => (
  <button
    {...rest}
    style={{
      padding: "8px 16px",
      borderRadius: "6px",
      border: "none",
      background: variant === "primary" ? "#2544FA" : "#ddd",
      color: variant === "primary" ? "#fff" : "#222",
      fontWeight: 500,
      cursor: "pointer",
    }}
  >
    {children}
  </button>
);
