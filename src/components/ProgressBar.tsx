import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [0, 45],
    [0, 100],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 280,
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 15,
          color: "#55a4db",
          fontWeight: 600,
          marginBottom: 5,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {Math.round(progress)}/100
      </div>

      <div
        style={{
          height: 13,
          background: "#d7e5ed",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "inset 0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            borderRadius: 20,
            background:
              "linear-gradient(90deg, #6bc2ef, #8b7ff2)",
          }}
        />
      </div>
    </div>
  );
};