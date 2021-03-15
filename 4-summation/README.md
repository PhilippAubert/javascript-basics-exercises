/\* const favoriteColor = prompt("Whats your favorite color?");
console.log(favoriteColor);
alert(`Your favorite color is ${favoriteColor}`);
const favoriteNumber = Number(prompt("What's your favourite number?"));

console.log(favoriteNumber);

// If the favorite Number is NaN

if (Number.isNaN(favoriteNumber)) {
alert("Your favorite Number is not a number ");
}

// If favorite Number above 20

if (favoriteNumber >= 20) {
alert("Your favorite Number is in the higher range");

// If favorite number is between 10 and 20
} else if (favoriteNumber >= 10 && favoriteNumber < 20) {
alert("Your favorite number is between 10 and 20! ");
} else {
alert("Your favorite number is nice");
}

let i = 0;

while (i < 100) {
console.log(i);
i = i +1;
}

let name = prompt ("Give me your name!");

// while the name is empty or null, keep asking!

while (name === '' || name === null){
name = prompt("Incorrect name. Give me your real name!");
}

for (let i = 0; i < 100; i++){
console.log(i);
}

# Exercise 4: Summation

Write a program that asks the user for a number, and calculates the summation from 0 to the given number, and then show a message to the user with the calculated value.

## Requirements

- If the number is negative, finish saying that the number given was negative and that you can't calculate the sumatory for that
- Assume numbers given are integers (without decimals)
- Use a `for` loop

## Example

- Input given by the user: 10
- Summation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

## Resources

- [MDN alert()](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
- [MDN prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [MDN if...else statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN Converting String to Numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#convert_numeric_strings_and_null_to_numbers)
- [MDN String Concatenation with the + operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition#string_concatenation)
- [MDN String interpolation (Template literals)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [MDN For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
