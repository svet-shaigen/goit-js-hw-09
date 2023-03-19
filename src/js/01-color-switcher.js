const btnStart = document.querySelector('[data-start]');

const CHANGE_BODY_COLOR = 1000;
let timerId = null;

btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
   document.body.style.backgroundColor = getRandomHexColor();
   
   timerId = setInterval(getRandomHexColor, 1000);
}





function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}













