import Helper, { sum, power, abs } from "./myLibs.js";

let numbers = [4, 2, 3, 5, 6, 7, 8, 4, 3, 3];

console.log(sum(...numbers));

console.log(power(5, 4));

console.log(abs(-10));

console.log(Helper.formatCurrency(2342353445546765));