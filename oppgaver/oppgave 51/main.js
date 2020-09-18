let options = new Array();
let choices = new Array("ROCK", "PAPER", "SCISSORS");

options.push(document.getElementById("rock"));
options.push(document.getElementById("paper"));
options.push(document.getElementById("scissors"));

let player;
let bot;
let txt = document.getElementById("txt");

const WIN_MATRIX = {
    "ROCK": "SCISSORS",
    "PAPER": "ROCK",
    "SCISSORS": "PAPER",
}

function game() {
    bot = choices[Math.floor(Math.random() * 3)];

    if (player === bot) {
        txt.innerText = "Draw";
    } else if (WIN_MATRIX[player] === bot) {
        txt.innerText = "You win";
    } else {
        txt.innerText = "The bot wins";
    }
}

document.querySelectorAll(".img").forEach(item => {
    item.addEventListener('click', e => {
        for (let i = 0; i < options.length; i++) {
            if (e.target === options[i]) {
                player = choices[i];
                game();
            }
        }
    });
});