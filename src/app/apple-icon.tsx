import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 30%, #1e293b 0%, #080b10 100%)",
          borderRadius: "40px",
          border: "3px solid rgba(56, 189, 248, 0.4)",
        }}
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.2)" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="5" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" />
          <circle cx="12" cy="12" r="2" fill="#38BDF8" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
