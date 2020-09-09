export default class Paddle {
    constructor(x, y, width, height, paddle) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.paddle = paddle;
    }

    update() {
        this.paddle.style.top = this.x + "px";
    }
}