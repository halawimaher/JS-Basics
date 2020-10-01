let x = document.querySelector('button');
let input = document.querySelectorAll('input');

x.addEventListener('click', () => {
    var result = confirm('Click OK To Reset');
if (result == true){
input.forEach(input => input.value = '');
}});
