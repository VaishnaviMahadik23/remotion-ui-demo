import React from "react";
import { interpolate, useCurrentFrame, spring, useVideoConfig } from "remotion";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
}

export const Title: React.FC<TitleProps> = ({
  children,
  color = "#102c50",
  size = 28,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: {
      damping: 18,
      stiffness: 100,
      mass: 0.7,
    },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1]);

  const translateY = interpolate(progress, [0, 1], [15, 0]);

  const scale = interpolate(progress, [0, 1], [0.96, 1]);

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: "50%",
        transform: `translateY(calc(-50% + ${translateY}px)) scale(${scale})`,
        opacity,
        textAlign: "center",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: 600,
        fontSize: size,
        color,
        letterSpacing: "-0.8px",
      }}
    >
      {children}
    </div>
  );
};