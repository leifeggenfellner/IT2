export default class Player {
    constructor(x, y, w, h, paddle, canvasW, canvasH) {
        this.x = x - 42;
        this.y = y - 18;
        this.width = w;
        this.height = h;
        this.paddle = paddle;
        this.canvasW = canvasW;
        this.canvasH = canvasH;
        this.dy = 1;
        this.keysDown = {};
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