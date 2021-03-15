let operator = prompt("Pick an operator: +;  -;  *; /; or exit");
let operand1 = Number(prompt("Pick a number or exit"));
let operand2 = Number(prompt("Pick another number or exit"));

// not sure about here
let result = Number(operand1) + Number(operand2); //<- what is it here?

if (operator === "exit" || operand1 === "exit" || operand2 === "exit") {
  alert("You left the program");
} else {
  alert("The result is " + result);
}
