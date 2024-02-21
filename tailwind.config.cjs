/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {},
  daisyui: {
    themes: ["forest", "halloween", "cupcake", "retro", "dracula"],
  },
  plugins: [require("daisyui")],
};
