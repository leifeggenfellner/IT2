let submit = document.getElementById("submit");
let txt = document.getElementById("txt");
let num;

submit.onclick = () => {
    num = document.getElementById("num").value;
    if (num % 2 === 0) {
        txt.innerHTML = "The numer is even";
    } else {
        txt.innerHTML = "The number is odd";
    }
}