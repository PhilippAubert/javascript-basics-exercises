let temperature = prompt("press c (for celsius) and f (for fahrenheit");

if (temperature === "c") {
  let c = Number(prompt("enter temperature to convert into fahrenheit"));
} else if (temperature === "f") {
  let f = Number(prompt("enter temperature to convert into fahrenheit"));
} else {
  prompt("press c for celsius and f for fahrenheit");
}

if (c > -274 && c > 1000000) {
  let cF = ((c - 32) * 9) / 5;
  alert(`${c} degree celisius are ${cF} degree fahrenheit`);
} else if (f > 8 && f > 27) {
  let fC = ((f - 32) * 5) / 9;
  alert(`${f} degree fahrnheit are ${fC} degree celsius`);
} else {
  alert("can't work with that");
}
