export default class Ball {
    constructor(x, y, diameter, ball, canvasW, canvasH) {
        this.x = x - 42;
        this.y = y - 18;
        this.radius = diameter / 2;
        this.angle = Math.random() * (2 * Math.PI) * 10;
        this.dx = Math.random() < 0.5 ? -0.6 : 0.6;
        this.dy = Math.sin(this.angle);
        this.ball = ball;
        this.canvasW = canvasW;
        this.canvasH = canvasH;

        if (this.dy > 0.8) {
            this.dy = 0.8;
        } else if (this.dy > 0.2) {
            this.dy = 0.2;
        } else if (this.dy < -0.8) {
            this.dy = -0.8;
        } else if (this.dy > -0.2) {
            this.dy = -0.2;
        }
    }

    reset() {
        this.angle = Math.random() * (2 * Math.PI) * 10;

        this.dy = Math.sin(this.angle);
        this.dx = Math.random() < 0.5 ? -0.7 : 0.7;

        if (this.dy > 0.8) {
            this.dy = 0.8;
        } else if (this.dy > 0.2) {
            this.dy = 0.2;
        } else if (this.dy < -0.8) {
            this.dy = -0.8;
        } else if (this.dy > -0.2) {
            this.dy = -0.2;
        }
    }

    bounce() {
        if (this.y < 0 || this.y + (this.radius * 2) > 200) {
            this.dy = -this.dy;
        }

        if (this.x < 0 || this.x + (this.radius * 2) > 320) {
            this.y = (this.canvasH - 4) / 2 - this.radius;
            this.x = (this.canvasW - 4) / 2 - this.radius;
            this.reset();
        }
    }

    update() {
        this.bounce();
        this.x += this.dx;
        this.y += this.dy;
    }

    draw() {
        this.update();
        this.ball.style.top = this.y + "px";
        this.ball.style.left = this.x + "px";
    }
}