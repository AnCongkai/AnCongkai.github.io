// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://ancongkai.github.io",
  integrations: [],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          strict: false,
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
