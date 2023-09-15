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
  }
});

const redline = (BMI) => {
  if (BMI > 24.2) {
    document.querySelector('.overweight').style.color = 'red';
  } else if (BMI >= 18.6 && BMI < 24.2) {
    document.querySelector('.normal').style.color = 'darkgreen';
  } else {
    document.querySelector('.underweight').style.color = 'yellow';
  }
};
