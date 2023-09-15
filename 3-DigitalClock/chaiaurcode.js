const clock = document.getElementById('clock');

setInterval(() => {
  let dat = new Date();
  // console.log(dat.toLocaleTimeString());
  clock.innerHTML = dat.toLocaleTimeString();
}, 1000);
