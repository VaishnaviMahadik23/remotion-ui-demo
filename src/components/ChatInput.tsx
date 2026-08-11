import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Send } from "lucide-react";

export const ChatInput: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({
    frame,
    fps,
    config: {
      damping: 16,
      stiffness: 100,
    },
  });

  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const scale = interpolate(enter, [0, 1], [0.92, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "52%",
        width: 280,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        background: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        padding: 14,
        boxShadow: "0 10px 35px rgba(40,70,90,0.18)",
        border: "1px solid rgba(80,110,130,0.18)",
      }}
    >
      <div
        style={{
          fontSize: 15,
          fontWeight: 600,
          color: "#162f4b",
          marginBottom: 8,
        }}
      >
        How can I help?
      </div>

      <div
        style={{
          height: 38,
          borderRadius: 7,
          border: "1px solid #d6dce2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 8px",
          background: "#fff",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#777",
          }}
        >
          Describe Your Request...
        </span>

        <div
          style={{
            width: 24,
            height: 24,
            borderRadius: 6,
            background: "#295ca8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Send size={12} color="white" />
        </div>
      </div>
    </div>
  );
};