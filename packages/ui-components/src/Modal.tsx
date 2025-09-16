import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.18)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 1100 }}>
      <div style={{
        background: "#fff",
        padding: "24px",
        minWidth: "320px",
        borderRadius: "12px",
        position: "relative"
      }}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            right: 8,
            top: 8,
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer"
          }}>×</button>
        {children}
      </div>
    </div>
  );
};
