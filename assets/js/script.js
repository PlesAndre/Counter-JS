'use strict';

// FIXMEç
// 4- file README più esplicativo riguardo alla struttura del codice.
// Optional, rifare la presentazione, correggere i due link nella diapositiva finale (prendere spunto su google)

// Display element

const createDisplay = document.createElement('div');
document.getElementById('box-counter').appendChild(createDisplay);
createDisplay.classList.add('value-display');
const container = document.createElement('p');
const value = document.createTextNode('0');
container.appendChild(value);
createDisplay.appendChild(container);

// Function change color
const changeColor = function () {
  if (count > 0) {
    container.classList.add('positive');
  } else if (count < 0) {
    container.classList.add('negative');
  } else {
    container.classList.remove('positive');
    container.classList.remove('negative');
  }
};

// Implement buttons

const counterButtons = document.createElement('div');
counterButtons.classList.add('counter-buttons');
createDisplay.after(counterButtons);

// Decrement button

const decrementButton = document.createElement('button');
const decrementText = document.createTextNode('-');
decrementButton.classList.add('decrement-button');
decrementButton.appendChild(decrementText);
counterButtons.appendChild(decrementButton);

// Reset button

const resetButton = document.createElement('button');
const resetText = document.createTextNode('RESET');
resetButton.classList.add('reset-button');
resetButton.appendChild(resetText);
counterButtons.appendChild(resetButton);

// Increment button

const incrementButton = document.createElement('button');
const incrementText = document.createTextNode('+');
incrementButton.classList.add('increment-button');
incrementButton.appendChild(incrementText);
counterButtons.appendChild(incrementButton);

// Counter function

let count = 0;

decrementButton.addEventListener('click', () => {
  count--;
  container.innerHTML = count;
  changeColor();
});

resetButton.addEventListener('click', () => {
  count = 0;
  container.innerHTML = count;
  changeColor();
});

incrementButton.addEventListener('click', () => {
  count++;
  container.innerHTML = count;
  changeColor();
});
