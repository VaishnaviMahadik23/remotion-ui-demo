import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  width?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  width = 300,
}) => {
  return (
    <div
      style={{
        width,
        padding: 14,
        background: "rgba(255,255,255,0.94)",
        borderRadius: 9,
        border: "1px solid rgba(70,90,110,0.14)",
        boxShadow: "0 15px 40px rgba(30,50,70,0.18)",
      }}
    >
      {children}
    </div>
  );
};