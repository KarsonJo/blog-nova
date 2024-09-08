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
        primary: "#FFB633",
        "primary-fg": "#18181b" /** zinc-900 */,
        secondary: "#BEFF33",
        "secondary-fg": "#18181b" /** zinc-900 */,
      },
      dark: {
        primary: "#FFB633",
        "primary-fg": "#18181b" /** zinc-900 */,
        secondary: "#BEFF33",
        "secondary-fg": "#18181b" /** zinc-900 */,
      },
    }),
    require("@tailwindcss/typography"),
  ],
};
export default config;
