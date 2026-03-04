import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        plumaGold: "#BC933F",
        plumaGreen: "#17413B",
        plumaDark: "#0F2B27",
      },
    },
  },
  plugins: [],
} satisfies Config