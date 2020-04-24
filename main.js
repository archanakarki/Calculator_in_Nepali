"use strict";

let buttons = document.getElementsByTagName('button');
let display = document.getElementById('display');
let displayValues = document.getElementById('display_values');

let string = "";
let arrOfInputs = [];
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        /* If = is clicked -> functions */
        /* If numbers clicked -> add to array */
        let operatorCheckerRegex = /[+]/g;
        let numberCheckerRegex = /[0-9०-९.]/ig;
        let value = e.target.value;
        // string = string + value;

        //Multiple statement ternery operator in use
        numberCheckerRegex.test(value) ? string = string + value : (operatorCheckerRegex.test(value) ? (arrOfInputs.push.apply(arrOfInputs, [string, value])) : console.log("Not a num and +"));
        console.log(string, arrOfInputs)
    })  
}  

let calculate = (str) => {

}