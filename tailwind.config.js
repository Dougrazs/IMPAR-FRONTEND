/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
        },
        Impar: {
          Text: "#263238",
          Border: "#E4E4E4",
          Divider: "#F0EFF0",
          Purple: "#5F1478",
          Orange: "#E76316",
          LOrange: "#DB25250F",
          Pink: "#92207242",
          LightPurple: "#AE276F",
          Gray: "#F6F4F6",
          Shadow: "#0000000F",
          Error: "#DB2525",
        },
      },
    },
  },
  plugins: [],
};
