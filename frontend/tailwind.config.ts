import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: "rgb(203 255 4)",
        "primary-fg": "rgb(63 63 70)" /** zink-700 */,
        secondary: "rgb(12 208 224)",
        "secondary-fg": "white",
      },
      dark: {
        primary: "rgb(203 255 4)",
        "primary-fg": "rgb(63 63 70)" /** zink-700 */,
        secondary: "rgb(92 210 185)",
        "secondary-fg": "white",
      },
    }),
  ],
};
export default config;
