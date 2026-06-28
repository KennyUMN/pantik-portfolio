import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = site.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const teamName = site.name.startsWith("[") ? "Tim Pantik" : site.name;
  const tagline = site.taglineDefault;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1115",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Amber glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top: event label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              background: "rgba(245,158,11,0.15)",
              border: "1px solid rgba(245,158,11,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              color: "#F59E0B",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            ⚡ Hackathon Digital Cooperatives Expo 2026
          </div>
        </div>

        {/* Middle: main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#E7E9EE",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {teamName}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#6B7280",
              lineHeight: 1.4,
              maxWidth: "700px",
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#F59E0B",
              fontWeight: 500,
            }}
          >
            Pantik × Indeks Nyala. Lapisan aktivasi koperasi desa.
          </div>
        </div>

        {/* Bottom: amber bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "4px",
                background: "#F59E0B",
                borderRadius: "2px",
              }}
            />
            <span style={{ color: "#9CA3AF", fontSize: "16px" }}>
              Kemenkop RI × PEBS FEB UI
            </span>
          </div>
          <span style={{ color: "#6B7280", fontSize: "14px" }}>2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
