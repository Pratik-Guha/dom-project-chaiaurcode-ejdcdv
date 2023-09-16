const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let change;
const startChangingColor = () => {
  const bgcolor = () => (document.body.style.backgroundColor = randomColor());
  if (!change) {
    change = setInterval(bgcolor, 1000);
  }
};
const stopChangingColor = () => {
  clearInterval(change);
  change = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
