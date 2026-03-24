import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#1a1a1a",
        muted: "#6b6b6b",
        border: "#e5e5e5",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "headline": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "subhead": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3" }],
      },
      maxWidth: {
        magazine: "1400px",
      },
    },
  },
  plugins: [],
};
export default config;
