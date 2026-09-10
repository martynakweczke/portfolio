import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "Martyna Kweczke — Junior Frontend & Full-Stack Developer, Wrocław, Poland";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#171614",
          color: "#f3f2f2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c9a25f",
          }}
        >
          Portfolio
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, lineHeight: 1, letterSpacing: -2 }}>
            Martyna Kweczke
          </div>
          <div
            style={{
              width: 96,
              height: 2,
              background: "#c9a25f",
              margin: "36px 0",
            }}
          />
          <div style={{ fontSize: 42, color: "#d8d5cf" }}>
            Junior Frontend &amp; Full-Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#9a968d",
          }}
        >
          <span>Wrocław, Poland</span>
          <span>martynakweczke.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
