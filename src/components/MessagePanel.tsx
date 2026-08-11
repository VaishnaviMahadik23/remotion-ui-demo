import React from "react";

export const MessagePanel: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 285,
        background: "rgba(255,255,255,0.96)",
        borderRadius: 8,
        padding: 13,
        boxShadow: "0 12px 35px rgba(30,50,70,0.2)",
        border: "1px solid rgba(70,90,110,0.15)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 600,
          marginBottom: 7,
          color: "#222",
        }}
      >
        Your Message
      </div>

      <div
        style={{
          height: 100,
          border: "1px solid #d9dfe4",
          borderRadius: 6,
          padding: 10,
          fontSize: 10,
          color: "#444",
          background: "#fff",
        }}
      >
        Hello!
        <br />
        <br />
        I'd appreciate your help
      </div>
    </div>
  );
};