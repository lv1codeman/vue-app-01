// ES module syntax
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
// 可以先import成變數讓tailwindcss作為參數使用，或是像此處直接傳送物件參數
// import tailwindConfig from "./tailwind.config.js";

export default {
  plugins: [
    autoprefixer,
    // tailwindcss(tailwindConfig)
    tailwindcss({
      config: "./tailwind.config.js",
    }),
  ],
};

// CommonJS module syntax
// module.exports = {
//   plugins: {
//     tailwindcss: {
//       config:"./tailwind.config.cjs"
//     },
//     autoprefixer: {},
//   }
// }
