import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1b31",
          800: "#102842",
          700: "#16365a",
          600: "#1e4c7a"
        },
        steel: "#667085",
        signal: "#0b70d1",
        platinum: "#eef3f8"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans, Inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        enterprise: "0 28px 80px rgba(7, 17, 31, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
