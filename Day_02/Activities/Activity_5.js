const prompt = require('prompt-sync')();

let x = prompt("Enter a number: ");

let num = parseFloat(x);

console.log(num > 0 ? `${num} is a positive number` : (num < 0 ? `${num} is a negative number` : `${num} is neither positive nor negative`));