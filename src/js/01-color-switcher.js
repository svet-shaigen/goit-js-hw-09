const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');

const CHANGE_BODY_COLOR = 1000;

let timerId = null;


btnStart.addEventListener('click', onStart); 
btnStop.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(()=> {
  document.body.style.backgroundColor = getRandomHexColor();
  }, CHANGE_BODY_COLOR);

  btnStart.disabled = true;
  btnStop.disabled = false;
}

function onStop() {
  clearInterval(timerId);

  btnStart.disabled = false;
  btnStop.disabled = true;
}


function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}













