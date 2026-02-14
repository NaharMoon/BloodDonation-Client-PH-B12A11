/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        blood: {
          "base-100": "#ffffff",
          "base-200": "#faf7f8",
          "base-300": "#efe7ea",
          "base-content": "#1b1114",

          "primary": "#46052D",
          "primary-content": "#ffffff",

          "secondary": "#6A0B37",
          "secondary-content": "#ffffff",

          accent: "#B32346",
          "accent-content": "#ffffff",

          neutral: "#1b1114",
          "neutral-content": "#ffffff",

          // No blue tones
          info: "#6A0B37",
          success: "#7A163B",
          warning: "#B32346",
          error: "#8b0a3a",

          "--rounded-box": "1.25rem",
          "--rounded-btn": "0.9rem",
          "--rounded-badge": "0.9rem",
        },
      },
      "light",
    ],
  },
};
