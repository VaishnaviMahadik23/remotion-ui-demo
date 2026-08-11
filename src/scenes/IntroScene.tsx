import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Background } from "../components/Background";

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 15, 45, 60],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, 60],
    [0.95, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill>
      <Background />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity,
          transform: `scale(${scale})`,
          fontFamily: "Arial, sans-serif",
          fontSize: 28,
          fontWeight: 600,
          color: "#102c50",
        }}
      >
        UI Demo
      </div>
    </AbsoluteFill>
  );
};