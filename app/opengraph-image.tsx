import { ImageResponse } from "next/og";

export const alt = "Harshith Julapelli | DevOps, SRE & Platform Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #050816 0%, #0F172A 100%)",
          color: "#F8FAFC",
        }}
      >
        <div style={{ fontSize: 28, color: "#38BDF8", letterSpacing: 4, textTransform: "uppercase" }}>
          Platform Engineer · DevOps · SRE
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 24 }}>Harshith Julapelli</div>
        <div style={{ fontSize: 36, color: "#94A3B8", marginTop: 24, maxWidth: 900 }}>
          Reliable engineering platforms that help teams ship faster with confidence.
        </div>
      </div>
    ),
    size
  );
}
