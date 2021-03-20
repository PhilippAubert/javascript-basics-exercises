let summation;

let number = Number(prompt("Give me a number"));

if (number <= 0 || number === NaN) {
  alert("Can't work with that");
} else {
  for (let i = 0; i < number.value; i++) {
    summation = number + (number - 1);
    console.log(summation);
  }
}
alert(`The summation is ${summation}`);
