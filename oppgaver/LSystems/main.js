const grow = sentence => {
    let newSentence = new String();
    for (let char of sentence) {
        if (char.toUpperCase() === "A") newSentence += "ABA";
        else if (char.toUpperCase() === "B") newSentence += "BBB";
    }
    return newSentence;
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 200;

let str = "A";
for (let i = 0; i < 10; i++) {
    const w = canvas.width / str.length;
    const h = canvas.height / 10;
    for (let char in str) {
        if (str[char].toUpperCase() === "A") {
            ctx.beginPath();
            ctx.fillStyle = "#000";
            ctx.fillRect(w * char, h * i, w * (char + 1), h * (i + 1));
            ctx.closePath();
        } else if (str[char].toUpperCase() === "B") {
            ctx.beginPath();
            ctx.fillStyle = "#FFF";
            ctx.fillRect(w * char, h * i, w * (char + 1), h * (i + 1));
            ctx.closePath();
        }
    }
    str = grow(str);
}