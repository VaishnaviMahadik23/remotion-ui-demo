import React from "react";
import { Title } from "../components/Title";

export const StageTwoScene: React.FC = () => {
  return (
    <>
      <Title color="#c99a58" size={22}>
        Stage 2
      </Title>

      <div
        style={{
          position: "absolute",
          top: "54%",
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 25,
          fontWeight: 600,
          color: "#102c50",
        }}
      >
        Select
      </div>
    </>
  );
};