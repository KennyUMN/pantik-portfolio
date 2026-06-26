import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0F1115",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            background: "#F59E0B",
            clipPath: "polygon(50% 0%, 30% 45%, 50% 40%, 20% 100%, 70% 55%, 50% 60%, 80% 0%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
