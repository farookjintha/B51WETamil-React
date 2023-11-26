// const { sum } = require("./app");
// const { sum, multiple } = require("../../SomeFolder/userFunctions");
const sum = require("./SomeFolder/userFunctions");

const add = sum(5, 10);
// const multplied = multiple(5, 10);

console.log(add);
// console.log(multplied);
