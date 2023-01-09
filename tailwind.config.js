/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue, js, ts}"],
  theme: {
    extend: {
      colors: {
        "gray-color-1": "#dadce0",
        "blue-color-1": "#1967d2",
        "green-color-1": "#137333",
      }
    },
  },
  plugins: [],
}
