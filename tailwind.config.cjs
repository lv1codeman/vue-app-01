/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "my-bacground":"aliceblue"
      }
    },
  },
  plugins: [],
}
