const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const playerSprite = new Image();
playerSprite.src = "../images/jawaSheet.png"

const missileSprite = new Image();
missileSprite.src = "../images/missile.png";

const keys = [];

const missileActions = ["up", "up right", "right", "down right", "down", "down left", "left", "up left"];
let numberOfMissiles = 10;
const missiles = [];

let first = Date.now();

function addMissile() {
  let now = Date.now();
  if (now - first > 20000) {
    missiles.push(new Missile(missileSprite));
    first = now;
  }
}

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
    this.dx = 20;
    this.dy = Math.floor(Math.random() * 6) + 11;
    this.action = missileActions[Math.floor(Math.random() * missileActions.length)];

    if (this.action === "right") {
      this.x = this.width;
      this.y = Math.random() * canvas.height / 2;
    }
    if (this.action === "up") {
      this.y = canvas.height + this.height;
      this.x = Math.random() * canvas.width / 2;
    }
    if (this.action === "down") {
      this.y = 0 + this.height;
      this.x = Math.random() * canvas.width / 2;
    }
    if (this.action === "left") {
      this.x = canvas.width + this.width
      this.y = Math.random() * canvas.height / 2;
    }
    if (this.action === "up right") {
      this.y = 0 - this.height;
      this.x = Math.random() * canvas.width / 2;
    }
    if (this.action === "down right") {
      this.y = canvas.height - this.height;
      this.x = Math.random() * canvas.width / 2;
    }
    if (this.action === "down left") {
      this.y = canvas.height + this.height;
      this.x = Math.random() * canvas.width / 2;
    }
    if (this.action === "up left") {
      this.y = 0 - this.height;
      this.x = Math.random() * canvas.width / 2;
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
        this.x = Math.random() * canvas.width / 2;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y -= this.dy;
        this.x += this.dx;
      }
    } else if (this.action === "down right") {
      if (this.y > canvas.height + this.height && this.x > canvas.width + this.width) {
        this.y = 0 - this.height;
        this.x = Math.random() * canvas.width / 2;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y += this.dy;
        this.x += this.dx;
      }
    } else if (this.action === "down left") {
      if (this.y < 0 - this.height && this.x < 0 - this.width) {
        this.y = 0 - this.height;
        this.x = Math.random() * canvas.width / 2;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
      } else {
        this.y += this.dy;
        this.x -= this.dx;
      }
    } else if (this.action === "up left") {
      if (this.y < 0 - this.height && this.x < 0 - this.width) {
        this.y = canvas.height + this.height;
        this.x = Math.random() * canvas.width / 2;
        // this.dx = Math.floor(Math.random() * 10) + 10;
        // this.dy = Math.floor(Math.random() * 10) + 10;
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

const bgm = new Audio();
bgm.src = "../sound/music.mp3";

window.addEventListener("keypress", function (e) {
  bgm.volume = 0.3;
  bgm.loop = true;
  if (e.key === "m") {
    bgm.paused ? bgm.play() : bgm.pause();
  }
});

const explosion = new Audio();
explosion.src = "../sound/explosion.wav";
explosion.loop = false;

for (let i = 0; i < numberOfMissiles; i++) {
  missiles.push(new Missile(missileSprite));
}

const player = new Player(playerSprite);

const background = new Image();
background.src = "../images/summoners_rift.png";

function collision(player, missile) {
  if (((player.x + player.width) >= missile.x &&
      player.x <= (missile.x + missile.width) &&
      (player.y + player.height) >= missile.y &&
      player.y <= (missile.y + missile.height / 2))) {
    explosion.play();
    bgm.pause();
    cancelAnimationFrame(gameLoop);
  }
}

window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
});

window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
});

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  function collision(player, missile) {
    if (player.x < missile.x + missile.width &&
      player.x + player.width > missile.x &&
      player.y < missile.y + missile.height &&
      player.y + player.height > missile.y) {
      explosion.play();
      bgm.pause();
      console.log(`missile X: ${missile.x}\nmissile X + Width: ${missile.x + missile.width}\nmissile Y: ${missile.y}\nmissile Y + Height: ${missile.y + missile.height}`);
      console.log(`player X: ${player.x}\nplayer X + Width: ${player.x + player.width}\nplayer Y: ${player.y}\nplayer Y + Height: ${player.y + player.height}`);
      cancelAnimationFrame(gameLoop);
    }
  }
  let gameLoop = requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    addMissile();
    player.update();
    player.draw();
    for (i = 0; i < missiles.length; i++) {
      collision(player, missiles[i]);

      missiles[i].update();
      missiles[i].draw();
    }
  }
}




window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

startAnimation(60);