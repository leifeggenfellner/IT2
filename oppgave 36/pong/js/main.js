import Ball from './ball.js';
import Paddle from './bot.js';
import Player from './player.js';

const canvas = document.getElementById("myCanvas").getBoundingClientRect();
const ballPos = document.getElementById("ball").getBoundingClientRect();
const playerPos = document.getElementById("player").getBoundingClientRect();
const botPos = document.getElementById("bot").getBoundingClientRect();

const ball = new Ball(ballPos.x, ballPos.y, ballPos.width, document.getElementById("ball"), canvas.width, canvas.height);
const paddle = new Paddle(botPos.x, botPos.y, botPos.width, botPos.height, document.getElementById("bot"), canvas.width, canvas.height);
const player = new Player(playerPos.x, playerPos.y, playerPos.width, playerPos.height, document.getElementById("player"), canvas.width, canvas.height);

function print() {
    console.log(ballPos);
    console.log(playerPos);
    console.log(botPos);
}

function draw() {
    ball.draw();
    paddle.draw();
    player.draw();
}

let gameAnimation = setInterval(draw, 1);
setTimeout(print, 5000);