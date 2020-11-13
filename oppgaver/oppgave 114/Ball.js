class Ball {

    ctx;
    r;
    x;
    y;
    v;
    rV;
    xV;
    yV;
    distance;

    constructor(ctx) {
        this.ctx = ctx;
        this.r = Math.floor(Math.random() * 6) + 2;
        this.x = Math.random() * this.ctx.canvas.width;
        this.y = Math.random() * this.ctx.canvas.height;
        this.v = Math.random() * 10 + 1;

        let angle = Math.random() * (2 * Math.PI);
        this.xV = Math.cos(angle);
        this.yV = Math.sin(angle);
    }

    wallBounce() {
        this.x += this.v * this.xV;
        this.y += this.v * this.yV;

        if (this.x - this.r < 0) {
            this.xV *= -1;
            this.x = this.r;
        }

        else if (this.y - this.r < 0) {
            this.yV *= -1;
            this.y = this.r;
        }

        else if (this.x + this.r > this.ctx.canvas.width) {
            this.xV *= -1;
            this.x = this.ctx.canvas.width - this.r;
        }

        else if (this.y + this.r > this.ctx.canvas.height) {
            this.yV *= -1;
            this.y = this.ctx.canvas.height - this.r;
        }
    }

    collides(ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance <= this.r + ball.r) return true;
        else return false;
    }

    update() {
        this.wallBounce();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        this.ctx.stroke();
        this.ctx.closePath();
    }
}