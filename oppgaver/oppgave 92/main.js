const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    ctx.moveTo((canvas.width / 3) * i, 0);
    ctx.lineTo((canvas.width / 3) * i, canvas.height);
    ctx.moveTo(0, (canvas.height / 3) * i);
    ctx.lineTo(canvas.width, (canvas.height / 3) * i);
    ctx.stroke();
}

ctx.fillStyle = "#F00";

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(canvas.width, 0);
ctx.arc(0, 0, canvas.width, 0, Math.PI / 2, false);
ctx.arc((canvas.width / 3) * 2, canvas.height, (canvas.width / 3) * 2, Math.PI, (3 * Math.PI) / 2, false);
ctx.arc((canvas.width / 3) * 2, (canvas.height / 3) * 2, canvas.width / 3, (3 * Math.PI) / 2, Math.PI, true);
ctx.arc((canvas.width / 3), 0, (canvas.height / 3) * 2, Math.PI / 2, 2 * Math.PI, true);
ctx.fill();
ctx.stroke();