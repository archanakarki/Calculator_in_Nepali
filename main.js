let buttons = document.querySelectorAll('button');
let displayValues = document.querySelector('#display_values');

for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let value = e.target.value;
        console.log(`The value is ` + value)
        displayValues.textContent = value;
    })
}

//