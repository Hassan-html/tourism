const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      secondaryDark: "#081874",
      transparent: "transparent",
      primary: "#189ab4",
      secondary: "#05445E",
      special: "#F1AC0E",
      Dark: "#141C3C",
      Light: "#8290FE",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [flowbite.plugin(), require("daisyui")],
};
export default config;
