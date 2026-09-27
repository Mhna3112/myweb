import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#262624",
        zinc: {
          100: "#f7f4ec",
          200: "#e8e4da",
          300: "#d3cec3",
          400: "#b8b3a8",
          500: "#a19b90",
          600: "#918c82",
          700: "#615d55",
          800: "#45433e",
          900: "#302f2b",
        },
        violet: {
          200: "#f4d3c4",
          300: "#f1bba4",
          400: "#e59478",
          500: "#d97757",
          600: "#b75f40",
          700: "#94492f",
          950: "#3e261f",
        },
        indigo: {
          400: "#d7ad83",
          500: "#b8895c",
          600: "#966a45",
        },
        purple: {
          400: "#dfa984",
          500: "#c7835d",
          600: "#a76141",
        },
        cyan: {
          400: "#e3bb82",
          500: "#ad7042",
          600: "#8d5533",
        },
        surface: {
          50: "#3b3935",
          100: "#343330",
          200: "#2e2d2a",
          300: "#2b2a27",
        },
        primary: {
          DEFAULT: "#d97757",
          hover: "#e59478",
          light: "#f1bba4",
          dark: "#a94f31",
        },
        cyber: {
          blue: "#3b82f6",
          cyan: "#06b6d4",
          purple: "#a855f7",
          pink: "#ec4899",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(217, 119, 87, 0.14) 0%, rgba(205, 169, 112, 0.07) 35%, transparent 70%)",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { opacity: "0.4", filter: "blur(20px)" },
          "50%": { opacity: "0.8", filter: "blur(28px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
