const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

const playerSprite = new Image();
playerSprite.src = "./imgSpriteSheet.png";

let spriteSheetCols = 4;
let spriteSheetRows = 4;
let spriteWidth;
let spriteHeight;
let x;
let y;

let state = 1;
let stateFrame = 0;
let animation = [
    [0],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 1, 2, 3]
];

const keys = [];

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    gameLoop();
}

playerSprite.onload = init();

function init() {
    spriteWidth = playerSprite.width / spriteSheetCols;
    spriteHeight = playerSprite.height / spriteSheetRows;
    x = (canvas.width / 2) - (spriteWidth / 2);
    y = (canvas.height / 2) - (spriteHeight / 2);

    startAnimation(30);
}

function gameLoop() {
    requestAnimationFrame(gameLoop);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        if (keys["w"] || keys["ArrowUp"]) {
            state = 3;
            y -= 15;
        }
        if (keys["a"] || keys["ArrowLeft"]) {
            state = 1;
            x -= 15;
        }
        if (keys["s"] || keys["ArrowDown"]) {
            state = 4;
            y += 15;
        }
        if (keys["d"] || keys["ArrowRight"]) {
            state = 2;
            x += 15;
        }
        if ((keys["d"] || keys["ArrowRight"]) && (keys["a"] || keys["ArrowLeft"]) || (keys["w"] || keys["ArrowUp"]) && (keys["s"] || keys["ArrowDown"])) {
            state = 0;
        }

        if (x < 0 - (spriteWidth / 2)) x = canvas.width + (spriteWidth / 2);
        else if (x > canvas.width + (spriteWidth / 2)) x = 0 - (spriteWidth / 2);
        else if (y < 0 - (spriteHeight / 2)) y = canvas.height + (spriteHeight / 2);
        else if (y > canvas.height + (spriteHeight / 2)) y = 0 - (spriteHeight / 2);

        stateFrame++;
        if (stateFrame >= animation[state].length) stateFrame = 0;
        let tile = animation[state][stateFrame];
        let sX = (tile % spriteSheetCols) * spriteWidth;
        let sY = Math.floor(tile / spriteSheetRows) * spriteHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(playerSprite, sX, sY, spriteWidth, spriteHeight, x, y, spriteWidth, spriteHeight);
    }
}

window.addEventListener("keydown", function (e) {
    keys[e.key] = true;
});

window.addEventListener("keyup", function (e) {
    delete keys[e.key];
    state = 0;
});

