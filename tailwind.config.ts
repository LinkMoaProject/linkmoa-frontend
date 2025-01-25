import type { Config } from "tailwindcss";

export default {
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
        white: "#FFFFFF",
        grey: {
          100: "#F7F7F8",
          200: "#CBCBCC",
          300: "#8E8E8F",
          400: "#59595B",
          500: "#37373A",
          600: "#28282B",
        },
        black: "#222222",
        point: "#FF5500",
      },
    },
  },
  plugins: [],
} satisfies Config;
