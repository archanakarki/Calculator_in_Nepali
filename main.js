let buttons = document.getElementsByTagName('button');
let display = document.getElementById('display');
let displayValues = document.getElementById('display_values');


// let string = "";
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let value = `${e.target.value}`;
        // string = string + value;
        // displayValues.textContent = string; //Directly making string might not be the efficient way
    })
}
