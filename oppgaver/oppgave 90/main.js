const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let r = (j * 16).toString();
        let g = (i * 16).toString();
        ctx.fillStyle = `rgb(${r}, ${g}, 0)`;
        ctx.fillRect(j, i, 10, 10)
    }
}