const prompt = require('prompt-sync')()

let x = prompt("Enter the counter value: ")
let counter = parseFloat(x);

function increement(number1, inc){
    number1 += inc;  
    return number1;
}
function decreement(number1, dec){
    number1 -= inc;  
    return number1;
}

let y = prompt("Enter a number to be incremented and decremented: ")
let num = parseFloat(y);

console.log(`The result after incrementing and decrementing ${num} is ${increement(num, counter)} and ${decreement(num, counter)}`)