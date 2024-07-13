// Script that declares variables of different data types and logs both the value and type of each variable to the console

// var a = 1;
// var b = 'a';
// var c = "Arjun";
// var d = [1,'a',"Arjun"]

// console.log(`Values of a,b,c,d is: a => ${a}, b => ${b}, c => ${c}, d => ${d}`)
// console.log(`Type of a,b,c,d is: a => ${typeof(a)}, b => ${typeof(b)}, c => ${typeof(c)}, d =>${typeof(d)}`)

var a = 1;
var b = 'a';
var c = "Arjun";
var d = [1, 'a', "Arjun"];

const logVariable = (variable, variableName) => {
    console.log(`${variableName} (Type: ${typeof variable}):`, variable);
}

logVariable(a, "a");
logVariable(b, "b");
logVariable(c, "c");
logVariable(d, "d");
