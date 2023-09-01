"use strict"

// DISPLAY ELEMENT

const createDisplay = document.createElement("div")
document.getElementById("box-counter").appendChild(createDisplay);
createDisplay.classList.add("value-display");
const container = document.createElement("p");
const value = document.createTextNode("0");
container.appendChild(value);
createDisplay.appendChild(container);


// IMPLEMENT BUTTONS

const counterButtons = document.createElement("div");
counterButtons.classList.add("counter-buttons");
createDisplay.after(counterButtons) 


// DECREMENT BUTTON 

const decrementButton = document.createElement("button");
const decrementText = document.createTextNode("-");
decrementButton.classList.add("decrement-button");
decrementButton.appendChild(decrementText);
counterButtons.appendChild(decrementButton);


// RESET BUTTON 

const resetButton = document.createElement("button");
const resetText = document.createTextNode("RESET");
resetButton.classList.add("reset-button");
resetButton.appendChild(resetText);
counterButtons.appendChild(resetButton);


// INCREMENET BUTTON

const incrementButton = document.createElement("button");
const incrementText = document.createTextNode("+");
incrementButton.classList.add("increment-button");
incrementButton.appendChild(incrementText);
counterButtons.appendChild(incrementButton); 


// COUNTER FUNCTION 

let i = 0; 

decrementButton.addEventListener("click", () =>{
    i--;
    container.innerHTML = i;
    if(i < 0) {
        container.style.color = "red";
    }
});

resetButton.addEventListener("click", () => {
    i = 0;
    container.innerHTML = i;
    container.style.color = "black";
});

incrementButton.addEventListener("click", () => {
    i++;
    container.innerHTML = i;
    if(i > 0) {
        container.style.color = "blue";
    };
});



