let shoeSize = window.prompt("Please enter shoe size");
let birthYear = window.prompt("Please enter birth year");
const calc = (shoeSize, birthYear) => {
    let res = shoeSize*2;
    res += 5;
    res *= 50;
    res -= birthYear;
    res += 1766;
    return res;
}

alert(calc(shoeSize, birthYear));

