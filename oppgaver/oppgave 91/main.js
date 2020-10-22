const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#FFF";
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, canvas.width, canvas.height)

let lines = 10;
for (let i = 0; i < lines; i++) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, (canvas.height / lines) * i);
    ctx.stroke();
}