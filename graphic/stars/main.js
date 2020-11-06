const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const w = canvas.width;
const h = canvas.height;

const maxStars = 1000;
const stars = new Array();

class Star {
    constructor(x, y, v) {
        this.x = x;
        this.y = y;
        this.v = v;
        this.w = v / 2;
    }

    draw() {
        ctx.fillRect(this.x, this.y, this.w, 1);
    }
}

for (let i = 0; i < maxStars; i++) {
    const star = new Star(Math.floor(Math.random() * w), Math.floor(Math.random() * h), Math.ceil(Math.random() * 5));
    stars.push(star);
}

const animationLoop = () => {
    stars.forEach(e => {
        e.x -= e.v;

        if (e.x < 0) {
            e.x = w - 1;
            e.y = Math.floor(Math.random() * h);
        }
    });

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#fff";
    stars.forEach(e => {
        e.draw();
    });

    requestAnimationFrame(animationLoop)
}

animationLoop();