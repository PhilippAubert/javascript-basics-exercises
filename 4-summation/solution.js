let summation;

let number = Number(prompt("Give me a number"));

if (number <= 0 || number === NaN) {
  alert("Can't work with that");
} else {
  for (let i = 0; i < number; i++) {
    sum = number + (number - 1);
    console.log(sum);
  }
}
alert(`The summation is ${sum}`);

// either you know or you don't. provided documentation is useless.
