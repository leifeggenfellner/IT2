const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000";
ctx.beginPath();
for (let i = 0; i < 10; i++) {
    ctx.fillRect(0, i * 10, (i + 1) * 10, 10);
}
ctx.fill();