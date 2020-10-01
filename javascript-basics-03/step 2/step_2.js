let show = document.getElementById("show");
let hide = document.getElementById("hide");


hide.addEventListener('click', () => {
    let par = document.getElementById('texte');
    console.log(par)
    par.style.display = "none";
});
show.addEventListener('click', () => {
    let par = document.getElementById('texte');
    par.style.display = "block";
});