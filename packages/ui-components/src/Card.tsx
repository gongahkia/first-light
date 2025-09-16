import React from "react";

type CardProps = {
  shadow?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({ shadow = true, children, style }) => (
  <div
    style={{
      padding: "16px",
      borderRadius: "8px",
      background: "#fff",
      boxShadow: shadow ? "0 2px 8px rgba(0,0,0,0.08)" : undefined,
      ...style
    }}
  >
    {children}
  </div>
);
