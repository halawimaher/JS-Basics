let div = document.createElement('div');
div.id = 'result';

let input = document.getElementById('name');

let body = document.querySelector("body");

body.appendChild(div);

input.addEventListener('keyup', () => {
    console.log("Event is called")
    div.textContent = input.value;
});


