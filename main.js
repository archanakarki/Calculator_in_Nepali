let buttons = document.querySelectorAll('button');
let displayValues = document.querySelector('#display_values');


const concatenateString = (val) => {
    let string = "";
    string += val;
    return string;
}

let string = "";
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let value = "" + e.target.value;
        string = string + value;
        displayValues.textContent = string;

        if (displayValues.textContent.length > 10 && displayValues.textContent.length < 22) {
            displayValues.style.fontSize = "4.3rem";
            displayValues.style.lineHeight = "1";
        } else if (displayValues.textContent.length > 22) {
            displayValues.style.fontSize = "3.8rem";
            displayValues.style.lineHeight = "1";
        } else if (displayValues.textContent.length > 26 && displayValues.textContent.length < 39) {
            displayValues.style.fontSize = "2.5rem";
            displayValues.style.lineHeight = "1";
        }
        console.log(`The value of string is ` + string)
    })
}

//