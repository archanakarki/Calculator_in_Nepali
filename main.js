let buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', ()=>{
        let value = button.value;
        console.log(`The value is ` + value)
    })
}