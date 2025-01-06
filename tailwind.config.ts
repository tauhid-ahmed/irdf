import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        18: "4.5rem",
        23: "5.75rem",
        25: "6.25rem",
        92: "23.125rem",
        107: "26.875rem",
      },
      height: {
        13: "3.25rem",
      },
      size: {
        "9.5": "2.375rem",
        18: "4.5rem",
      },

      boxShadow: {
        opposite: "0 -4px 8px rgba(0, 0, 0, 0.2)",
      },

      fontFamily: {
        sans: ["var(--font-inter-sans)", ...fontFamily.sans],
        title: ["var(--font-poppins-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "border-pattern": "linear-gradient( #1fa45b 50%, transparent 50% )",
      },
      backgroundSize: {
        "border-pattern": "8px 4px",
      },
      colors: {
        brand: {
          DEFAULT: "#1fa45b",
        },
        gray: {
          100: "#f7f8fa",
          200: "#F3F4F6",
          300: "#ebeef2",
          400: "#e8f0f5",
          500: "#E2E2E2",
          600: "#868686",
          700: "#393939",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
