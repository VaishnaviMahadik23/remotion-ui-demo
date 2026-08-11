import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const FadeTransition: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 12, 45, 60],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const scale = interpolate(
    frame,
    [0, 60],
    [0.97, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};