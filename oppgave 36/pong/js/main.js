import Ball from './ball.js';
import Paddle from './paddles.js';

const leftScore = document.getElementById("leftScore");
const rightScore = document.getElementById("rightScore");

const ballPos = document.getElementById("ball").getBoundingClientRect();
const leftPaddlePos = document.getElementById("leftPaddle").getBoundingClientRect();

const ball = new Ball(ballPos.x, ballPos.y, ballPos.width, document.getElementById("ball"));
// const paddle = new Paddle(leftPaddlePos.x, leftPaddlePos.y, leftPaddlePos.width, leftPaddlePos.height, document.getElementById("leftPaddle"));

function reset() {
    ball.y = 92.5;
    ball.x = 152.5;


}

function draw() {
    ball.update();

    // paddle.update();
}

let interval = setInterval(draw, 10);