const prompt = require('prompt-sync')();

let x = prompt("Enter the first number: ");
let y = prompt("Enter the second number: ");

let num1 = parseFloat(x);
let num2 = parseFloat(y);

// comparision using >= and <=
function compareGreaterThanLessThanOrEqualsTo(number1, number2){
    if (number1 > number2) {
        return `${number1} is greater than ${number2}`;
    } else if (number1 < number2) {
        return `${number1} is less than ${number2}`;
    } else {
        return `${number1} is equal to ${number2}`;
    }
}


// comparision using == and ===
function Equality(number1, number2){
    if(number1===number2){
        return `Both numbers are strictly equal: ${number1} === ${number2}`
    }else if(number1==number2){
        return `Both numbers are equal in value but not in type: ${number1} == ${number2}`;
    }else{
        return `The numbers are not equal: ${number1} != ${number2}`;
    }
}

console.log(compareGreaterThanLessThanOrEqualsTo(num1, num2));
console.log(Equality(num1, num2));