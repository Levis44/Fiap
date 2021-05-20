const inputs = [240, 100, 10000,240, 100, 10000];
const alpha = 37;


// 278, 370

beta = Math.floor(Math.tanh(sum(inputs) / 1000) * 10 * alpha);

function sum(array) { 
  return array.reduce((total, currentElement) => total + currentElement);
}

console.log(beta);

// const test = require("./network-processing.json");
// console.log(test.length);
