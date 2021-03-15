let number = Number(prompt("Give me a number"));

if (number < 0) {
  alert("Can't work with number < 0");
} else if (!number) {
  alert("Can't work with that");
} else {
  for (i = 0; i <= number; i++) {
    number = number + 1;
    alert("The sumation is " + number);
  }
}
