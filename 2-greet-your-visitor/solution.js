let visitorName = prompt("Welcome, Stranger. Enter Your Name");

if (visitorName === "" || visitorName === null) {
  prompt("Not a name. Try again");
} else {
  alert(`Welcome, ${visitorName}`);
}
