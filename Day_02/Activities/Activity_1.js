const prompt = require('prompt-sync')()

function addNumber(number1, number2){
    return number1+number2;
}
function subNumber(number1, number2){
    return number1-number2;
}
function mulNumber(number1, number2){
    return number1*number2;
}
function divNumber(number1, number2){
    if (number2 === 0) {
        return 'Error: Division by zero is not allowed';
    }
    return number1/number2;
}
function remainder(number1, number2){
    return number1%number2;
}


let input1 = prompt("Enter the first name: ");
let input2 = prompt("Enter the second name: ");

let num1 = parseFloat(input1);
let num2 = parseFloat(input2);

let sum = addNumber(num1, num2);
let sub = subNumber(num1, num2);
let mul = mulNumber(num1, num2);
let div = divNumber(num1, num2);
let rem = remainder(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`The sub of ${num1} and ${num2} is ${sub}`);
console.log(`The mul of ${num1} and ${num2} is ${mul}`);
console.log(`The div of ${num1} and ${num2} is ${div}`);
console.log(`The remainder of ${num1} and ${num2} is ${rem}`);
