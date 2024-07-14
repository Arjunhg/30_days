const prompt = require('prompt-sync')();

let x = prompt("Enter a number: ");

let num1 = parseFloat(x);

function andOperator(number){
    if(number>0 && number<10){
        return `The number ${number} is between 0 and 10`;
    }else{
        return `The number ${number} is not between 0 and 10`;
    }
}

function orOperator(number){
    if(number%2==0 || number%3==0){
        return `${number} is either even or divisible by 3`
    }else {
        return `${number} is neither even nor divisible by 3`;
    }
}

function notOperator(number){
    if(!(number%2==0)){
        return `${number} is not divisible by 2`;
    }else {
        return `${number} is divisible by 2`;
    }
}


console.log(andOperator(num1));
console.log(orOperator(num1));
console.log(notOperator(num1));


