import {resolve} from "path";
import {terser} from "rollup-plugin-terser";

export default {
  input: resolve("sources", "decode.mjs"),
  plugins: [
    terser()
  ],
  output: {
    file: resolve("release", "decode.js"),
    format: "cjs"
  }
}
