import React from "react";
import { Composition } from "remotion";
import { Template } from "./template";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UIDemo"
        component={Template}
        durationInFrames={1098}
        fps={30}
        width={584}
        height={336}
      />
    </>
  );
};