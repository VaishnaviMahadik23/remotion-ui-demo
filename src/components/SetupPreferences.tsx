import React from "react";
import { Settings, Search, BarChart3 } from "lucide-react";

const Option = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      style={{
        height: 38,
        borderRadius: 7,
        border: "1px solid #d2d9df",
        background: "#fafafa",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 9px",
        marginTop: 7,
      }}
    >
      <span
        style={{
          fontSize: 9,
          color: "#444",
        }}
      >
        {text}
      </span>

      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#e2ebff",
          color: "#2257a5",
        }}
      >
        {icon}
      </div>
    </div>
  );
};

export const SetupPreferences: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 300,
        padding: 14,
        background: "rgba(255,255,255,0.94)",
        borderRadius: 9,
        boxShadow: "0 14px 40px rgba(30,50,70,0.2)",
        border: "1px solid rgba(70,90,110,0.15)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: 700,
          color: "#202b35",
        }}
      >
        Setup Preferences
      </div>

      <div
        style={{
          textAlign: "center",
          fontSize: 8,
          color: "#777",
          marginTop: 2,
        }}
      >
        Select features to include
      </div>

      <Option
        text="Activate features"
        icon={<Settings size={11} />}
      />

      <Option
        text="Apply smart filters"
        icon={<Search size={11} />}
      />

      <Option
        text="Optimize formatting"
        icon={<BarChart3 size={11} />}
      />

      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 10,
        }}
      >
        <button
          style={{
            flex: 1,
            border: 0,
            borderRadius: 6,
            height: 28,
            background: "#39a36b",
            color: "#fff",
            fontSize: 9,
            fontWeight: 600,
          }}
        >
          Continue
        </button>

        <button
          style={{
            flex: 1,
            border: 0,
            borderRadius: 6,
            height: 28,
            background: "#d7dde3",
            color: "#55606b",
            fontSize: 9,
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};