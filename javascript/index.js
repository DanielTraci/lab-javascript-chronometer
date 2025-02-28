const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  this.printMinutes();
  this.printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let twoDigs = chronometer.twoDigitsNumber(minutes);
  minUni.innerHTML = twoDigs[1];
  minDec.innerHTML = twoDigs[0];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let twoDigs = chronometer.twoDigitsNumber(seconds);
  secUni.innerHTML = twoDigs[1];
  secDec.innerHTML = twoDigs[0];
}

/* ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}*/

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = "btn stop";
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = "btn split";
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = "btn start";
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  chronometer.startClick(printTime);
  if (btnLeft.innerText == "START") {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.innerText === "RESET") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
