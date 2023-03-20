import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future', {timeout: 3000,},);
      return;
    }

    startBtn.disabled = false;

    startBtn.addEventListener("click", () => {
      const countdown = setInterval(() => {
        startBtn.disabled = true;
        const now = new Date();
        const difference = selectedDate - now;

        if (difference <= 0) {
          clearInterval(countdown);
          return;
        }
          
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = Math.floor(difference / day).toString().padStart(2, "0");
        // Remaining hours
        const hours = Math.floor((difference % day) / hour).toString().padStart(2, "0");
        // Remaining minutes
        const minutes = Math.floor(((difference % day) % hour) / minute).toString().padStart(2, "0");
        // Remaining seconds
        const seconds = Math.floor((((difference % day) % hour) % minute) / second).toString().padStart(2, "0");
          
        document.querySelector("[data-days]").textContent = days;
        document.querySelector("[data-hours]").textContent = hours;
        document.querySelector("[data-minutes]").textContent = minutes;
        document.querySelector("[data-seconds]").textContent = seconds;
      }, 1000);
    });
  },
};

flatpickr("#datetime-picker", options);