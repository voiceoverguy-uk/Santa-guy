import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        santa: {
          red: "#9C060B",
          "red-dark": "#7A0509",
          "red-light": "#C41017",
          cream: "#FFF8F0",
          gold: "#D4A843",
          green: "#1B5E20",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
