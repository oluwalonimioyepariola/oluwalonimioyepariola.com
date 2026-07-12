import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        soft: "#555555",
        faint: "#8a8a8a",
        line: "#e6e6e6",
        tagbg: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
export default config;
