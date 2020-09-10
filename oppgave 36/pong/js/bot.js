export default class Paddle {
    constructor(x, y, w, h, paddle) {
        this.x = x - 42;
        this.y = y - 18;
        this.width = w;
        this.height = h;
        this.paddle = paddle;
        this.dy = Math.random() < 0.5 ? -0.7 : 0.7;
    }

    collide() {
        if (this.y < 0) {
            this.dy *= -1;
        } else if (this.y + this.height > 200) {
            this.dy *= -1;
        }
    }

    update() {
        this.collide();
        this.y += this.dy;
    }

    draw() {
        this.update();
        this.paddle.style.top = this.y + "px";
    }
}