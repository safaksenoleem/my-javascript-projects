let timeElapsed = Date.now();
let date = new Date(timeElapsed);

let hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

for (let i = 60; i > 0; i--, second++) {
  let s = document.querySelector(`.second .digit:nth-child(${i})`);
  s.innerHTML = second < 10 ? `0${second}` : second;
  if (second > 59) second -= 60;
}
for (let i = 60; i > 0; i--, minute++) {
  let m = document.querySelector(`.minute .digit:nth-child(${i})`);
  m.innerHTML = minute < 10 ? `0${minute}` : minute;
  if (minute > 59) minute -= 60;
}
for (let i = 12; i > 0; i--, hour++) {
  let h = document.querySelector(`.hour .digit:nth-child(${i})`);
  h.innerHTML = hour < 10 ? `0${hour}` : hour;
  if (hour > 12) hour -= 12;
}
