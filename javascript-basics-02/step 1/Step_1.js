let img = document.querySelector("#image1");
console.log(img);
img.addEventListener("mouseover", () => {
    img.src = "images/image1_2.jpg";
});

img.addEventListener("mouseout", () => {
    img.src = "images/image1.jpg";
});