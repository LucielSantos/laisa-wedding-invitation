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
        bg: "#F4F1EC",
        indigo: {
          100: "#d1e0d4",
          200: "#a3c1a9",
          300: "#74a27d",
          400: "#468352",
          500: "#186427",
          600: "#13501f",
          700: "#0e3c17",
          800: "#0a2810",
          900: "#051408",
        },
        brown: {
          100: "#e4dfd6",
          200: "#c9bfac",
          300: "#af9e83",
          400: "#947e59",
          500: "#795e30",
          600: "#614b26",
          700: "#49381d",
          800: "#302613",
          900: "#18130a",
        },
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-primary)"],
      },
    },
  },
  plugins: [],
};
export default config;
