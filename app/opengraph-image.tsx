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
          background: "#ffffff",
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
        {/* Soft brand warmth, top-right */}
        <div
          style={{
            position: "absolute",
            top: "-260px",
            right: "-160px",
            width: "720px",
            height: "560px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(224,130,12,0.10) 0%, transparent 70%)",
          }}
        />
        {/* Teal edge accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "10px",
            height: "100%",
            background: "#0e4f6e",
          }}
        />

        {/* Top: event label */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              background: "rgba(14,79,110,0.08)",
              border: "1px solid rgba(14,79,110,0.22)",
              borderRadius: "100px",
              padding: "8px 18px",
              color: "#0e4f6e",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Hackathon Digital Cooperatives Expo 2026
          </div>
        </div>

        {/* Middle: main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
            <span
              style={{
                fontSize: "92px",
                fontWeight: 700,
                color: "#0b1f33",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {teamName}
            </span>
            <span
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#e0820c",
                marginTop: "16px",
              }}
            />
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#45566a",
              lineHeight: 1.35,
              maxWidth: "760px",
            }}
          >
            {tagline}
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#0e4f6e",
              fontWeight: 600,
            }}
          >
            Pantik × Indeks Nyala. Lapisan aktivasi koperasi desa.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "4px",
                background: "#e0820c",
                borderRadius: "2px",
              }}
            />
            <span style={{ color: "#6b7c8c", fontSize: "16px" }}>
              Kemenkop RI × PEBS FEB UI
            </span>
          </div>
          <span style={{ color: "#6b7c8c", fontSize: "14px" }}>2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
