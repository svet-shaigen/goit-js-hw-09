import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let selectedDate = null;
let currentDate = null;
let timerId = null;

btnStart.disabled = true;

btnStart.addEventListener('click', onStartTimer);

function onStartTimer() {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    currentDate = new Date();
    let differenceTime = selectedDate.getTime() - currentDate.getTime();
    
    if(differenceTime > 0) {
      const convertedTime = convertMs(differenceTime);
      console.log(convertedTime)
      days.innerHTML = addLeadingZero(convertedTime.days)
      hours.innerHTML = addLeadingZero(convertedTime.hours)
      minutes.innerHTML = addLeadingZero(convertedTime.minutes)
      seconds.innerHTML = addLeadingZero(convertedTime.seconds)
    }else{
      clearInterval(timerId);
    }
  }, 1000)
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    currentDate = new Date();

    if(currentDate > selectedDate) {
      Notify.failure("Please choose a date in the future");
    }else{
      btnStart.disabled = false;
    }

  },
};



flatpickr(input, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0)
}