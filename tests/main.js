class Circle {

    x;
    y;
    dy;
    dx;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dx = 3;
        this.dy = 3;
    }

    shakeIt() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (this.x >= 160) this.dx *= -1;
        else if (this.x < 80) this.dx *= -1;
        this.x += this.dx;
        drawStickPerson();
    }

    wave() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (this.y > 120) this.dy *= -1;
        else if (this.y < 80) this.dy *= -1;
        this.y += this.dy;
        drawStickPerson();
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = "#00F";
        ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, 0);
        ctx.fill();
        ctx.arc(this.x, this.y, 6, 0, Math.PI * 2, 0);
        ctx.stroke();
        ctx.closePath();
    }
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const shakeItCheck = document.getElementById("shakeIt");
const waveCheck = document.getElementById("wave");
const circles = new Array();

let y = 40;
for (let i = 0; i < 3; i++) {
    circles.push(new Circle(120, y));
    y *= 2;
}

let x1 = 40;
for (let i = 0; i <= 1; i++) {
    circles.push(new Circle(x1, 80));
    x1 *= 5;
}

let x2 = 80;
for (let i = 0; i <= 1; i++) {
    circles.push(new Circle(x2, canvas.height - 40));
    x2 *= 2;
}

const drawStickPerson = () => {
    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(circles[i].x, circles[i].y);
        ctx.lineTo(circles[i + 1].x, circles[i + 1].y);
        ctx.stroke();
        ctx.closePath();
    }

    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(circles[1].x, circles[1].y);
        ctx.lineTo(circles[3 + i].x, circles[3 + i].y);
        ctx.stroke();
        ctx.closePath();
    }

    for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(circles[2].x, circles[2].y);
        ctx.lineTo(circles[5 + i].x, circles[5 + i].y);
        ctx.stroke();
        ctx.closePath();
    }

    circles.forEach(e => {
        e.draw();
    });
}

window.onload = drawStickPerson();

shakeItCheck.addEventListener("input", () => {
    if (shakeItCheck.checked) shakeAnim = setInterval(function () { circles[2].shakeIt() }, 1000 / 60);
    else clearInterval(shakeAnim);
});

waveCheck.addEventListener("input", () => {
    const arm = Math.floor(Math.random() * 2) + 3;
    if (waveCheck.checked) {
        waveAnim = setInterval(() => { circles[arm].wave() }, 1000 / 60);
    }
    else {
        clearInterval(waveAnim);
    };
});