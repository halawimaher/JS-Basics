let img = document.getElementById("image1");

img.addEventListener("mouseover", () => {
    img.style.border = "3px solid red";
});
img.addEventListener("mouseout", () => {
    img.style.border = "none";
});