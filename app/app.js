// const validator = require("validator");
import isEmail from "validator/lib/isEmail";
import tripleMe from "./tripleme";

console.log(isEmail("john@test.com"));

console.log(tripleMe(23));

if (module.hot) {
  module.hot.accept();
}

document.querySelector("h1").innerText = "Hello to Webpack";
