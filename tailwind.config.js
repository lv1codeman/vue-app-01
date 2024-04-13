export default {
  content: [
    "./public/**/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./*.html",
    "./dist/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./public/**/*.html",
//     "./src/**/*.{vue,js,ts,jsx,tsx}",
//     "./*.html",
//     "./dist/*.html"
//   ],
//   theme: {
//     extend: {
//       colors:{
//         "my-bacground":"aliceblue"
//       }
//     },
//   },
//   plugins: [],
// }
