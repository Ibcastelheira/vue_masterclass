/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "gray-color-1": "#dadce0",
        "blue-color-1": "#1967d2",
        "blue-color-2": "#1434A4",
        "green-color-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 2px 2px #4285f4"
      },
    },
  },
  plugins: [],
}
