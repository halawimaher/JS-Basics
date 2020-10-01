const text = document.getElementById('text');

//this should be one function :(
    
let g = document.querySelector('.green');
g.addEventListener('click', () =>{
    text.style.color = "green";
});
let r = document.querySelector('.red');
r.addEventListener('click', () =>{
    text.style.color = "red";
});
let b = document.querySelector('.blue');
b.addEventListener('click', () =>{
    text.style.color = "blue";
});