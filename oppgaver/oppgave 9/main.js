let num = Math.round(Math.random() * 100 + 1);
let submit = document.getElementById("submitGuess");
let txt = document.getElementById("txt");

let y = Math.round(Math.random() * 100 + 1);

submit.onclick = () => {
    let x = document.getElementById("guessField").value;

    if (x == y) {
        txt.innerHTML = "Tallet er riktig";
    } else if (x < y) {
        txt.innerHTML = "Tallet er høyere"
    } else if (x > y) {
        txt.innerHTML = "Tallet er lavere"
    }
}