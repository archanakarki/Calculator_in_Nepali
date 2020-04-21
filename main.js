let buttons = document.getElementsByTagName('button');
let display = document.getElementById('display');
let displayValues = document.getElementById('display_values');


let string = "";
let operandAndOperator = [];
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let value = `${e.target.value}`;
        // addToArray(e.target.value);
        string = string + value;
        displayValues.textContent = string;
        console.log(displayValues.textContent)
    })
}


const calculator = {
    valuesToDisplay: string
    // operators: [],
    // sum: add(),
    // difference: subtract(),
    // product: multiply(),
    // division: divide()
}

const addToArray = (value) => {
    // if(typeof(val) == ){

    // }
}