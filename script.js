const clock = document.querySelector(".clock");

// Create the numbers around the clock face
for (let i = 1; i <= 12; i++) {
  let angle = i * 30;
  let number = document.createElement("div");
  number.classList.add("number");
  number.style.transform = `rotate(${angle}deg) translate(0px) rotate(-${0}deg)`;
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}

let rotate = 0;

let span = document.querySelectorAll(".number span");
span.forEach((element) => {
  rotate = rotate - 30;
  element.style.transform = `rotate(${rotate}deg)`;
});

// Select the hands
const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
  const start = new Date();

  const seconds = start.getSeconds();
  const minutes = start.getMinutes();
  const hours = start.getHours();

  const secondsDeg = seconds * 6; // 360 / 60
  const minutesDeg = minutes * 6 + seconds * 0.1;
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5;

  secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // initial call
