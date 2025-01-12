/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        selectionBg: "#4f46e5",
        selectionText: "#fff",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h2: {
              "&:hover": {
                textDecoration: "underline",
              },
            },
            h3: {
              "&:hover": {
                textDecoration: "underline",
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
