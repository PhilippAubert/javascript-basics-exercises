let operator = prompt("Pick an operator: +;  -;  *; /; or type exit");
let operand1 = Number(prompt("Pick a number or exit"));
let operand2 = Number(prompt("Pick another number or exit"));

// not sure about here

if (operator === "exit" || operand1 === "exit" || operand2 === "exit") {
  alert("You left the program");
}

if (operator === "+") {
  let result = operand1 + operand2;
  alert(`${operand1} + ${operand2} = ${result}`);
} else if (operator === "*") {
  let result = operand1 * operand2;
  alert(`${operand1} * ${operand2} = ${result}`);
} else if (operator === "-") {
  let result = operand1 - operand2;
  alert(`${operand1} - ${operand2} = ${result}`);
} else if (operator === "/") {
  let result = operand1 / operand2;
  alert(`${operand1} / ${operand2} = ${result}`);
}

// comparably easy, yet the "exit"-function is playing tricks
