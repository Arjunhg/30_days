// Script to demonstrate the diffrenece in behavior between let and const when it comes to reassignment

let variableLet = "Initial Value";
console.log("Intitial value of variableLet:", variableLet);

variableLet = "Reassigned Value";
console.log("Reassigned value of variableLet:", variableLet);

// using const
const variableConst = "Initial Value";
console.log("Intitial value of variableConst:", variableConst);

try {
    variableConst = "Reassigned value"
    console.log("Reassigned value of variableConst:", variableConst);
} catch (error) {
    console.error("Error when trying to reassign variableConst:", error.message);
}