export default class Ball {
    constructor(x, y, diameter, ball) {
        this.x = x - 42;
        this.y = y - 18;
        this.radius = diameter / 2;
        this.dx = 3;
        this.dy = 3;
        this.ball = ball;
        this.leftScore = 0;
        this.rightScore = 0;
    }

    bounce() {
        if (this.y <= 0 || this.y + (this.radius * 2) >= 200) {
            this.dy = -this.dy;
        }

        if (this.x <= 0 || this.x + (this.radius * 2) >= 320) {
            this.dx = -this.dx;
        }
    }

    update() {
        this.ball.style.left = this.x + "px";
        this.x += this.dx;
        this.ball.style.top = this.y + "px";
        this.y += this.dy

        this.bounce();
    }
}