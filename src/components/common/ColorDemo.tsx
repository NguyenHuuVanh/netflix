import React from "react";
import { getColor } from "../../utils/colors";

export const ColorDemo: React.FC = () => {
  return (
    <div style={{ padding: "40px", backgroundColor: getColor.neutral("grey900"), color: getColor.primary("white") }}>
      <h1 style={{ fontSize: "36px", marginBottom: "32px", color: getColor.secondary("red100") }}>
        NETFLIX COLOR SYSTEM
      </h1>

      {/* Primary Colors */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: getColor.primary("white") }}>Primary Colors</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div
            style={{
              backgroundColor: getColor.primary("white"),
              padding: "16px",
              borderRadius: "8px",
              color: "#000000",
              border: "1px solid #ccc",
            }}
          >
            <div>white</div>
            <div style={{ fontSize: "12px" }}>{getColor.primary("white")}</div>
          </div>
          <div
            style={{
              backgroundColor: getColor.primary("black"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>black</div>
            <div style={{ fontSize: "12px" }}>{getColor.primary("black")}</div>
          </div>
          <div
            style={{ backgroundColor: getColor.primary("red"), padding: "16px", borderRadius: "8px", color: "#FFFFFF" }}
          >
            <div>red</div>
            <div style={{ fontSize: "12px" }}>{getColor.primary("red")}</div>
          </div>
        </div>
      </section>

      {/* Secondary Colors */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: getColor.primary("white") }}>Secondary Colors</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div
            style={{
              backgroundColor: getColor.secondary("red100"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>red100</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("red100")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("red200"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>red200</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("red100")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("red300"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>red300</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("red300")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("blue100"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>blue100</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("blue100")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("blue200"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>blue200</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("blue200")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("blue300"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>blue300</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("blue300")}</div>
          </div>

          <div
            style={{
              backgroundColor: getColor.secondary("green"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>green</div>
            <div style={{ fontSize: "12px" }}>{getColor.secondary("green")}</div>
          </div>


        </div>
      </section>

      {/* Neutral Colors Sample */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: getColor.primary("white") }}>Neutral Colors (Sample)</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div
            style={{
              backgroundColor: getColor.neutral("grey100"),
              padding: "16px",
              borderRadius: "8px",
              color: "#000000",
            }}
          >
            <div>grey100</div>
            <div style={{ fontSize: "12px" }}>{getColor.neutral("grey100")}</div>
          </div>
          <div
            style={{
              backgroundColor: getColor.neutral("grey500"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>grey500</div>
            <div style={{ fontSize: "12px" }}>{getColor.neutral("grey500")}</div>
          </div>
          <div
            style={{
              backgroundColor: getColor.neutral("grey800"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
            }}
          >
            <div>grey800</div>
            <div style={{ fontSize: "12px" }}>{getColor.neutral("grey800")}</div>
          </div>
        </div>
      </section>

      {/* Transparent Colors */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ marginBottom: "20px", color: getColor.primary("white") }}>Transparent Colors</h2>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div
            style={{
              backgroundColor: getColor.transparentWhite("30"),
              padding: "16px",
              borderRadius: "8px",
              color: "#000000",
              border: "1px solid #666",
            }}
          >
            <div>white 30%</div>
            <div style={{ fontSize: "12px" }}>{getColor.transparentWhite("30")}</div>
          </div>
          <div
            style={{
              backgroundColor: getColor.transparentBlack("60"),
              padding: "16px",
              borderRadius: "8px",
              color: "#FFFFFF",
              border: "1px solid #333",
            }}
          >
            <div>black 60%</div>
            <div style={{ fontSize: "12px" }}>{getColor.transparentBlack("60")}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
