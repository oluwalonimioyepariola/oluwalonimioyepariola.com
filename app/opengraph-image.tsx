import { ImageResponse } from "next/og";

export const alt = "Oluwalonimi Oyepariola — Software Engineer";
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
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#111111",
            letterSpacing: "-0.02em",
          }}
        >
          Oluwalonimi Oyepariola
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#555555",
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            marginTop: 8,
            fontSize: 24,
            color: "#8a8a8a",
          }}
        >
          London, United Kingdom
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
          }}
        >
          {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 20px",
                  borderRadius: 9999,
                  border: "1px solid #e6e6e6",
                  background: "#f5f5f5",
                  fontSize: 20,
                  color: "#555555",
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 80,
            fontSize: 20,
            color: "#8a8a8a",
          }}
        >
          oluwalonimioyepariola.com
        </div>
      </div>
    ),
    { ...size }
  );
}
