// const favoriteColor = prompt("Whats your favorite color?");
// console.log(favoriteColor);
// alert(`Your favorite color is  ${favoriteColor}`);
// const favoriteNumber = Number(prompt("What's your favourite number?"));

// console.log(favoriteNumber);

// // If the favorite Number is NaN

// if (Number.isNaN(favoriteNumber)) {
//   alert("Your favorite Number is not a number ");
// }

// // If favorite Number above 20

// if (favoriteNumber >= 20) {
//   alert("Your favorite Number is in the higher range");

//   // If favorite number is between 10 and 20
// } else if (favoriteNumber >= 10 && favoriteNumber < 20) {
//   alert("Your favorite number is between 10 and 20! ");
// } else {
//   alert("Your favorite number is nice");
// }

// let i = 0;

// while (i < 100) {
//     console.log(i);
//     i = i +1;
// }

let name = prompt("Give me your name!");

// while the name is empty or null, keep asking!

while (name === "" || name === null) {
  name = prompt("Incorrect name. Give me your real name!");
}

for (let i = 0; i < 100; i++) {
  console.log(i);
}

// alert("Welcome, User");

// let userName = prompt("What's your name?");
// alert(`Welcome ${userName}`);

// // let userAge = Number(prompt("What year were you born?"));

// // if (userAge === NaN) {
// //   userAge = 2021;
// // } else {
// //   userAge = 2021 - userAge;
// // }

// if (userAge === 40) {
//   alert("Welcome to my super website " + userName + " We are the same age");
// } else if (userAge <= 10) {
//   alert(
//     "You are too young for this " + userName + " Come back when you're older"
//   );
// } else if (userAge >= 18) {
//   alert(
//     "Welcome to my super webiste " +
//       userName +
//       "- Good that you are not alone here!"
//   );
// } else if (userAge >= 10 && userAge < 18) {
//   let ageCheck = confirm("Are you close to an adult?");
//   if (ageCheck === true) {
//     alert(
//       "Welcome to my super website! " +
//         userName +
//         "- Good, that you are not alone here!"
//     );
//   } else {
//     alert(
//       "You are too young for this " +
//         userName +
//         " You need an adult next to you to continue."
//     );
//   }
// }

let greeting = alert("Welcome, Stranger");
let name = prompt("Type in a name");
let birth = prompt(`Type in your birthyear, ${name}`);
let age;
let adult;

if (birth === "") {
  let birth = 2021;
} else {
  let age = 2021 - birth;
}

if (age < 10) {
  alert(`You are too young for this, kid ${name}`);
} else if ((age) => 10 || age < 18) {
  let adult = confirm(
    `Welcome to my user site, ${name}. Are you with an adult?`
  );
  if (adult === true) {
    alert(
      `Welcome to my super website ${name}. Good, that you are not alone here!`
    );
  } else {
    alert("You are too young for this, kid");
  }
} else if (age === 40) {
  alert(`You are of my age, ${name}!`);
} else {
  alert(`Welcome to my site, ${name}`);
}

let adult = confirm(`Welcome to my user site, ${name}. Are you with an adult?`);
if (adult === true) {
  alert(
    `Welcome to my super website ${name}. Good, that you are not alone here!`
  );
} else {
  alert("You are too young for this, kid");
}
