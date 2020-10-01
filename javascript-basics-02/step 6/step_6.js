let img = [...document.querySelectorAll("img")];{
  
    img.forEach((img, i) =>{
        
    img.addEventListener("mouseover", () => {
        img.src = "images/image" + (i+1) + "_2" + ".jpg";
    });
    img.addEventListener("mouseout", () => {
        img.src = "images/image" + (i+1) + ".jpg";
    });
    
    })};