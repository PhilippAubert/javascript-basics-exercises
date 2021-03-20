let age;

let adult;
let check;
let greeting = alert("Welcome, Stranger");

let name = prompt("Type in a name");

let birth = Number(prompt(`Type in your birthyear, ${name}`));
if (birth === null || birth === NaN) {
  age = 2021;
} else {
  age = 2021 - birth;
}

if (age < 10) {
  alert(`You are too young for this`);
} else if (age === 40) {
  alert(`You are of my age, ${name}!`);
} else if (age > 18) {
  alert(`Welcome to my user site, ${name}. Glad I'm not alone here!`);
} else if (age >= 10 || age < 18) {
  confirm("Are you with an adult?");
}
if (check === true) {
  alert(`Welcome to my site, ${name}`);
} else {
  alert(`You're too young for this ${name}`);
}
