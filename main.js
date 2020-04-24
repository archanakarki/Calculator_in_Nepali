"use strict";
/* Select the buttons */
const buttons = document.getElementsByTagName('button');
const display = document.getElementById('display');
const displayValues = document.getElementById('display_values');

const buffer = ""; //Display string in the screen
const total = "";
let previosOperator; 

//Init function is the main function of this program.
const init = () => {
    for (let button of buttons) {
        button.addEventListener('click', (event) => {
            buttonClick(event.target.value);
        })  
    } 
}

const buttonClick = (value) => {
    let stringNumberOrOperator = parseInt(value, 10)
    if(isNaN(stringNumberOrOperator) === false){
        let number = stringNumberOrOperator;
        handleNumbers(number);
    } else {
        let symbol = stringNumberOrOperator;
        handleSymbols(symbol);
    }
}

const handleNumbers = (number) => {
    alert("Calculator making is in progress. Working in the functionality");
    console.log(`Number, type ${typeof(number)} ${number}`)
}

const handleSymbols = (operator) => {
    alert("Calculator making in progress. Working in the functionality");
    console.log(`Symbol, type ${typeof(symbol)} ${symbol}`)
}


init();