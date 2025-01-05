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
        23: "5.75rem",
        25: "6.25rem",
        107: "26.875rem",
      },
      fontFamily: {
        sans: ["var(--font-inter-sans)", ...fontFamily.sans],
        title: ["var(--font-poppins-sans)", ...fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: "#1fa45b",
        },
        gray: {
          100: "#f7f8fa",
          200: "#F3F4F6",
          300: "#ebeef2",
          400: "#E2E2E2",
          500: "#868686",
          700: "#393939",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
