const body = document.querySelector("body");
const startBtnRef = document.querySelector("[data-start]");
const stopBtnRef = document.querySelector("[data-stop]");
let ColorChager = null;

function onStartClick () {
    ColorChager = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopClick() {
    clearInterval(ColorChager);
    startBtnRef.setAttribute("disabled", true);
}

startBtnRef.addEventListener("click", onStartClick);
stopBtnRef.addEventListener("click", onStopClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}