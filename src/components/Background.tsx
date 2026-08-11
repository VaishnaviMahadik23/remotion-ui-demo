import React from "react";

export const Background: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 35%, #ffffff 0%, #eef5f8 35%, #dceaf1 65%, #d3e3eb 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "300px",
          left: "-100px",
          top: "-80px",
          background: "rgba(255,255,255,0.6)",
          filter: "blur(70px)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "450px",
          height: "300px",
          right: "-100px",
          bottom: "-100px",
          background: "rgba(176,215,235,0.5)",
          filter: "blur(90px)",
          borderRadius: "50%",
        }}
      />

      {children}
    </div>
  );
};