const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
    redline(BMI);
    yellowline(BMI);
    greenline(BMI);
  }
});

const redline = (BMI) => {
  if (BMI > 24.2) {
    document.querySelector('.overweight').style.color = 'red';
  } else {
    document.querySelector('.overweight').style.color = 'black';
  }
};
const yellowline = (BMI) => {
  if (BMI < 18.6) {
    document.querySelector('.underweight').style.color = 'yellow';
  } else {
    document.querySelector('.underweight').style.color = 'black';
  }
};
const greenline = (BMI) => {
  if (BMI >= 18.6 && BMI < 24.9) {
    document.querySelector('.normal').style.color = 'green';
  } else {
    document.querySelector('.normal').style.color = 'black';
  }
};
