import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Check } from "lucide-react";

export const DoneCheck: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const p = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 150,
    },
  });

  const scale = interpolate(p, [0, 1], [0.3, 1]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: 23,
          fontWeight: 600,
          color: "#5e8fd5",
          marginBottom: 10,
        }}
      >
        Done
      </div>

      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#f1e6ff",
          border: "1px solid #d4b9ef",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${scale})`,
          boxShadow: "0 5px 15px rgba(100,70,130,.12)",
        }}
      >
        <Check size={17} color="#8065bb" />
      </div>
    </div>
  );
};