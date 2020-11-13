let ctx = document.getElementById("canvasBalls").getContext("2d");

let BALLS = 100;

let balls = [];

for (let b = 0; b < BALLS; b++) {

    let ball = new Ball(ctx);

    balls.push(ball);

}

function animationLoop() {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let b = 0; b < BALLS; b++) {
        balls[b].update();
        balls[b].draw();

        for (let i = b + 1; i < BALLS; i++) {
            if (balls[b].collides(balls[i])) {
                balls[b].xV = Math.cos(Math.random() * (2 * Math.PI));
                balls[b].yV = Math.sin(Math.random() * (2 * Math.PI));
                balls[i].xV = Math.cos(Math.random() * (2 * Math.PI));
                balls[i].yV = Math.sin(Math.random() * (2 * Math.PI));
                // balls[b].angle = Math.random() * (2 * Math.PI);
                // balls[i].angle = Math.random() * (2 * Math.PI);
            }
        }
    }

    requestAnimationFrame(animationLoop);
}


animationLoop();