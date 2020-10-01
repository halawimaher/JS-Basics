let pass1 = document.getElementById("password");
console.log(pass1);
let pass2 = document.getElementById("confirmation");
console.log(pass2);
let button = document.querySelector("button");
button.addEventListener('click', () => {
if(pass1 != pass2){
    pass1.style.border = "3px solid red";
    pass2.style.border = "3px solid red";
 }});

