import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { Background } from "./components/Background";
import { ChatInput } from "./components/ChatInput";
import { SetupPreferences } from "./components/SetupPreferences";
import { MessagePanel } from "./components/MessagePanel";
import { ProgressBar } from "./components/ProgressBar";
import { DoneCheck } from "./components/DoneCheck";

const TitleScreen: React.FC<{
  title: string;
  color?: string;
}> = ({ title, color = "#102c50" }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 12, 48, 60],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(
    frame,
    [0, 15],
    [15, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
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
          transform: `translateY(${translateY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 28,
          fontWeight: 600,
          color,
          textAlign: "center",
        }}
      >
        {title}
      </div>
    </AbsoluteFill>
  );
};

const StageTitle: React.FC<{
  stage: string;
  title: string;
}> = ({ stage, title }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [0, 12, 65, 80],
    [0, 1, 1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(
    frame,
    [0, 15],
    [15, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
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
          flexDirection: "column",
          opacity,
          transform: `translateY(${translateY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            color: "#c99a58",
            fontSize: 21,
            fontWeight: 500,
            marginBottom: 5,
          }}
        >
          {stage}
        </div>

        <div
          style={{
            color: "#102c50",
            fontSize: 25,
            fontWeight: 600,
          }}
        >
          {title}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Template: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* 0 - 2 seconds */}
      <Sequence durationInFrames={60}>
        <TitleScreen title="UI Demo" />
      </Sequence>

      {/* 2 - 4 seconds */}
      <Sequence from={60} durationInFrames={60}>
        <TitleScreen title="Visual Layout" />
      </Sequence>

      {/* 4 - 6 seconds */}
      <Sequence from={120} durationInFrames={60}>
        <TitleScreen title="Smart Workflow" />
      </Sequence>

      {/* 6 - 8 seconds */}
      <Sequence from={180} durationInFrames={60}>
        <TitleScreen title="Clean ready interface" />
      </Sequence>

      {/* 8 - 11 seconds */}
      <Sequence from={240} durationInFrames={90}>
        <StageTitle
          stage="Stage 1"
          title="User Request"
        />
      </Sequence>

      {/* 11 - 13 seconds */}
      <Sequence from={330} durationInFrames={60}>
        <AbsoluteFill>
          <Background />
          <ChatInput />
        </AbsoluteFill>
      </Sequence>

      {/* 13 - 15 seconds */}
      <Sequence from={390} durationInFrames={60}>
        <StageTitle
          stage="Stage 2"
          title="Select"
        />
      </Sequence>

      {/* 15 - 19 seconds */}
      <Sequence from={450} durationInFrames={120}>
        <AbsoluteFill>
          <Background />
          <SetupPreferences />
        </AbsoluteFill>
      </Sequence>

      {/* 19 - 22 seconds */}
      <Sequence from={570} durationInFrames={90}>
        <TitleScreen title="UI Ready" />
      </Sequence>

      {/* 22 - 24 seconds */}
      <Sequence from={660} durationInFrames={60}>
        <TitleScreen title="Final Output" />
      </Sequence>

      {/* 24 - 26 seconds */}
      <Sequence from={720} durationInFrames={60}>
        <AbsoluteFill>
          <Background />
          <MessagePanel />
        </AbsoluteFill>
      </Sequence>

      {/* 26 - 28 seconds */}
      <Sequence from={780} durationInFrames={60}>
        <TitleScreen title="Visual Layout" />
      </Sequence>

      {/* 28 - 30 seconds */}
      <Sequence from={840} durationInFrames={60}>
        <AbsoluteFill>
          <Background />
          <ProgressBar />
        </AbsoluteFill>
      </Sequence>

      {/* 30 - 32 seconds */}
      <Sequence from={900} durationInFrames={60}>
        <AbsoluteFill>
          <Background />
          <DoneCheck />
        </AbsoluteFill>
      </Sequence>

      {/* 32 - 36.6 seconds */}
      <Sequence from={960} durationInFrames={138}>
        <TitleScreen
          title="UI Demo"
          color="#c78938"
        />
      </Sequence>
    </AbsoluteFill>
  );
};