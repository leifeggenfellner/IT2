const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#ffffff";
ctx.font = "100px Verdana"
let textString = "Press enter to start";
let textWidth = ctx.measureText(textString).width;
ctx.fillText(textString, (canvas.width / 2) - (textWidth / 2), canvas.height / 2 - 50);
canvas.style.cursor = "none";

const playerSprite = new Image();
playerSprite.src = "../images/jawaSheet.png"

const missileSprite = new Image();
missileSprite.src = "../images/missile-right.png";

const keys = [];

const missileActions = ["up", "up right", "right", "down right", "down", "down left", "left", "up left"];
let numberOfMissiles = 8;
const missiles = [];

class Player {
  constructor(img) {
    this.img = img;
    this.width = 108;
    this.height = 144;
    this.x = canvas.width / 2 - this.width;
    this.y = canvas.height / 2 - this.height;
    this.frameX = 0;
    this.frameY = 3;
    this.speed = 15;
    this.moving = false
  }

  movePlayer() {
    if ((keys["w"] || keys["ArrowUp"]) && this.y > 0) {
      this.y -= this.speed;
      this.frameY = 3;
      this.moving = true;
    }

    if ((keys["a"] || keys["ArrowLeft"]) && this.x > 0) {
      this.x -= this.speed;
      this.frameY = 1;
      this.moving = true;
    }
    if ((keys["s"] || keys["ArrowDown"]) && this.y < canvas.height - this.height) {
      this.y += this.speed;
      this.frameY = 0;
      this.moving = true;
    }
    if ((keys["d"] || keys["ArrowRight"]) && this.x < canvas.width - this.width) {
      this.x += this.speed;
      this.frameY = 2;
      this.moving = true;
    }
    if ((keys["d"] || keys["ArrowRight"]) && (keys["a"] || keys["ArrowLeft"]) || (keys["w"] || keys["ArrowUp"]) && (keys["s"] || keys["ArrowDown"])) {
      this.frameX = 0;
    }
  }

  flash() {
    if (keys["space"]) {
      if ((keys["w"] || keys["ArrowUp"]) && this.y > 100) {
        this.y -= 100;
      }

      if ((keys["a"] || keys["ArrowLeft"]) && this.x > 100) {
        this.x -= 100;
      }
      if ((keys["s"] || keys["ArrowDown"]) && this.y < canvas.height - this.height - 100) {
        this.y += 100;
      }
      if ((keys["d"] || keys["ArrowRight"]) && this.x < canvas.width - this.width - 100) {
        this.x += 100;
      }
    }

  }

  handlePlayerFrame() {
    if (this.frameX < 3 && this.moving) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  update() {
    this.movePlayer();
    this.handlePlayerFrame();
  }

  draw() {
    ctx.drawImage(this.img, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
  }
}

class Missile {
  constructor(img) {
    this.img = img;
    this.width = 128;
    this.height = 60;
    this.x = 0;
    this.y = 0;
    this.dx = Math.random() * 10 + 15;
    this.dy = Math.random() * 10 + 15;
    this.temp = 0;
    this.action = missileActions[Math.floor(Math.random() * missileActions.length)];

    if (this.action === "right") {
      this.x = 0 - this.width;
      this.y = Math.random() * canvas.height;
    }
    if (this.action === "up") {
      this.y = canvas.height + this.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.action === "down") {
      this.y = 0 - this.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.action === "left") {
      this.x = canvas.width + this.width
      this.y = Math.random() * canvas.height;
    }
    if (this.action === "up right") {
      this.y = canvas.height + this.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.action === "down right") {
      this.y = 0 - this.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.action === "down left") {
      this.y = 0 - this.height;
      this.x = Math.random() * canvas.width;
    }
    if (this.action === "upLeft") {
      this.y = canvas.height + this.height;
      this.x = Math.random() * canvas.width;
    }
  }

  rotate(angle) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(angle * Math.PI / 180);
    ctx.drawImage(this.img, -(this.img.width / 2), -(this.img.height / 2));
    ctx.restore();
  }

  update() {
    if (this.action === "right") {
      if (this.x > canvas.width + this.width) {
        this.x = 0 - this.width;
        this.y = Math.random() * canvas.height - this.height;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.x += this.dx;
      }
    } else if (this.action === "up") {
      if (this.y < 0 - this.height) {
        this.y = canvas.height + this.height;
        this.x = Math.random() * canvas.width;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y -= this.dy;
      }
    } else if (this.action === "down") {
      if (this.y > canvas.height + this.height) {
        this.y = 0 - this.height;
        this.x = Math.random() * canvas.width;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y += this.dy;
      }
    } else if (this.action === "left") {
      if (this.x < 0 - this.width) {
        this.x = canvas.width + this.width;
        this.y = Math.random() * canvas.height;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.x -= this.dx;
      }
    } else if (this.action === "up right") {
      if (this.y < 0 - this.height && this.x > canvas.width + this.width) {
        this.y = canvas.height + this.height;
        this.x = Math.random() * canvas.width;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y -= this.dy;
        this.x += this.dx;
      }
    } else if (this.action === "down right") {
      if (this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
        this.y = 0 - this.height;
        this.x = Math.random() * canvas.width;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y += this.dy;
        this.x += this.dx;
      }
    } else if (this.action === "down left") {
      if (this.y < 0 - this.height && this.x < 0 - this.width) {
        this.y = 0 - this.height;
        this.x = Math.random() * canvas.width;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y += this.dy;
        this.x -= this.dx;
      }
    } else if (this.action === "up left") {
      if (this.y < 0 - this.height && this.x < 0 - this.width) {
        this.y = canvas.height + this.height;
        this.x = Math.random() * canvas.width;
      } else {
        this.y -= this.dy;
        this.x -= this.dx;
      }
    }
  }

  draw() {
    if (this.action === "right") {
      this.rotate(0);
    } else if (this.action === "up") {
      this.rotate(270);
    } else if (this.action === "down") {
      this.rotate(90);
    } else if (this.action === "left") {
      this.rotate(180);
    } else if (this.action === "up right") {
      this.rotate(315);
    } else if (this.action === "down right") {
      this.rotate(45);
    } else if (this.action === "down left") {
      this.rotate(135);
    } else if (this.action === "up left") {
      this.rotate(225);
    }
  }
}

let first = Date.now();

function addMissile() {
  let now = Date.now();
  if (now - first > 20000) {
    missiles.push(new Missile(missileSprite));
    first = now;
  }
}

const scoreTime = Date.now();
let score = 0;

function drawScore() {
  let elapsed = parseInt((Date.now() - scoreTime) / 100);
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.font = "40px Verdana"
  ctx.fillText("Score: " + elapsed, 15, 50);
  ctx.restore();
  score = elapsed;
}

let highScore = localStorage.getItem("gameHighScore") || 0;

function drawHighScore() {
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "#ffffff";
  ctx.font = "35px Verdana";
  ctx.fillText("Highscore: " + highScore, 15, 95);
  ctx.restore();
}

function checkHighscore() {
  if (score > localStorage.getItem("gameHighScore")) {
    localStorage.setItem("gameHighScore", score);
    highScore = score;
  }
}

let collided = false;

function collision(player, missile) {
  if (player.x < missile.x + missile.width &&
    player.x + player.width > missile.x &&
    player.y < missile.y + missile.height &&
    player.y + player.height > missile.y) {
    collided = true;
  }
}

const bgm = new Audio();
bgm.src = "../sound/music.mp3";
bgm.volume = 0.15;
bgm.loop = true;

const explosion = new Audio();
explosion.src = "../sound/explosion.wav";
explosion.loop = false;
explosion.volume = 0.5;

for (let i = 0; i < numberOfMissiles; i++) {
  missiles.push(new Missile(missileSprite));
}
const player = new Player(playerSprite);

const background = new Image();
background.src = "../images/summoners_rift.png";



let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  let gameLoop = requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    bgm.play();
    addMissile()
    checkHighscore();
    player.update();
    player.draw();
    for (let i = 0; i < missiles.length; i++) {
      collision(player, missiles[i]);
      missiles[i].update();
      missiles[i].draw();
    }
    drawScore();
    drawHighScore();

  }

  if (collided === true) {
    explosion.play();
    bgm.pause();
    cancelAnimationFrame(gameLoop);

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ff0000";
    ctx.font = "90px Verdana"
    let gameString = "GAME OVER";
    let gameWidth = ctx.measureText(gameString).width;
    ctx.fillText(gameString, (canvas.width / 2) - (gameWidth / 2), canvas.height / 2 - 45);
    ctx.fillStyle = "#ffffff";
    ctx.font = "70px Verdana"
    let scoreString = `Score: ${score}`;
    let scoreWidth = ctx.measureText(scoreString).width;
    ctx.fillText(scoreString, (canvas.width / 2) - (scoreWidth / 2), canvas.height / 2 + 50);
    let highScoreString = `Highscore: ${highScore}`;
    let highScoreWidth = ctx.measureText(highScoreString).width;
    ctx.fillText(highScoreString, (canvas.width / 2) - (highScoreWidth / 2), canvas.height / 2 + 130);
  }
}

window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
});

window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
});

window.addEventListener("keypress", function (e) {

  if (e.key === "m") {
    bgm.paused ? bgm.play() : bgm.pause();
  }
});

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

window.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    startAnimation(30);
  }
});