let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");

let txt = document.getElementById("txt");

red.onclick = () => {
    txt.style.color = "#f00";
}

green.onclick = () => {
    txt.style.color = "#0f0"
}

blue.onclick = () => {
    txt.style.color = "#00f";
}