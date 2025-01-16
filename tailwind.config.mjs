/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        selectionBg: "#4f46e5",
        selectionText: "#fff",
      },
      spacing: {
        "2/3": "66.666667%",
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
