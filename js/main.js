'use strict';
//variables
const inputNumber = document.querySelector ('.js-inputNumber');
const button = document.querySelector ('.js-button');
const text = document.querySelector('.js-text');
const counter = document.querySelector('.js-counter');
const btnReset = document.querySelector('.js-reset');

const randomNumber = getRandomNumber(100);
//console.log(randomNumber);
let cont = 0;

// Function random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Optinized function 
function addNum() {
  const num = parseInt(inputNumber.value);
  //console.log("Input number: " + num);
  if (isNaN(num)) {
    showMessage('Debe introducir un número');
  } else if (num < 1 || num > 100) {
    showMessage("El número debe estar entre 1 y 100");
  } else if (num > randomNumber) {
    showMessage("Pista: Demasiado alto");
  } else if (num < randomNumber) {
    showMessage( "Pista: Demasiado bajo");
  }  else if (num === randomNumber) {
   showMessage("Has ganado campeona!!!");
  } else {
    showMessage("El número debe estar entre 1 y 100");
  }
}

function showMessage (message) {
  text.innerHTML = message;
}


// Function show counter
const increaseCounter = () => {
   cont++
   counter.innerHTML = `Número de intentos: ${cont}`;
}


//Function event
function handleClickButton() {
 addNum();
 increaseCounter();
}

//Function for Reset
const handleClickReset = (ev) => {
  showMessage("Escribe un número y dale a Prueba");
  cont = 0;
  counter.innerHTML = `Número de intentos: ${cont}`;
};


console.log("Random number: " + randomNumber);

// Event Click
button.addEventListener("click", handleClickButton);
btnReset.addEventListener('click', handleClickReset);




