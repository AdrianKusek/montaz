/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#faf7f2",
          100: "#f3ede3",
          200: "#e7dccb",
          300: "#d8c6ad",
        },
        ink: {
          900: "#1b1b1b",
          700: "#3b3b3b",
          600: "#4b4b4b",
          500: "#6b6b6b",
        },
        bronze: {
          600: "#a0702a",
          700: "#8b5e1f",
          800: "#6f4a17",
        },
        line: "#ded6ca",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
        card: "0 8px 18px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
