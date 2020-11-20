const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let numCells = 100;
const res = canvas.width / numCells;

const population = world => {
    let sum = 0;

    for (let i = 0; i < world.length; i++) {
        for (let j = 0; j < world[i].length; j++) {
            if (world[i][j] === 1) sum++;
        }
    }

    return sum;
}

const populate = size => {
    return new Array(size).fill(null).map(() => new Array(size).fill(null).map(() => Math.floor(Math.random() * 2)));
}

const aliveNextGeneration = neighboorhood => {
    let neighbors = 0;

    for (let i = 0; i < neighboorhood.length; i++) {
        for (let j = 0; j < neighboorhood[i].length; j++) {
            if (i === 1 && j === 1) continue;
            if (neighboorhood[i][j] === 1) neighbors++;
        }
    }

    if (neighboorhood[1][1]) {
        if (neighbors < 2) return false;
        else if (neighbors > 3) return false;
        else return true;
    } else if (!neighboorhood[1][1]) {
        if (neighbors === 3) return true;
        else return false;
    }
}

const nextGeneration = world => {
    const nextGen = new Array(world.length).fill(null).map(() => new Array(world.length).fill(0));

    for (let col = 0; col < world.length; col++) {
        for (let row = 0; row < world[col].length; row++) {
            const threeByThree = new Array(3).fill(null).map(() => new Array(3).fill(null));
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    threeByThree[i + 1][j + 1] = world[(col + i + world.length) % world.length][(row + j + world[(i + world.length) % world.length].length) % world[(i + world.length) % world.length].length];
                }
            }
            if (aliveNextGeneration(threeByThree)) nextGen[col][row] = 1;
        }
    }
    return nextGen;
}

const drawWorld = world => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let col = 0; col < world.length; col++) {
        for (let row = 0; row < world[col].length; row++) {
            const cell = world[col][row];

            ctx.beginPath();

            if (cell === 1) {
                ctx.fillStyle = "#000";
                ctx.fillRect(col * res, row * res, res, res);
            }
            ctx.closePath();
        }
    }
}

let cells = populate(numCells);
let generations = 0;

const checkPause = () => {
    if (speed === "0") clearInterval(interval);
}

const update = () => {
    cells = nextGeneration(cells);
    drawWorld(cells);
    generations++;
    document.getElementById("output1").innerText = `${generations}`;
    document.getElementById("output2").innerText = `${population(cells)}`;
}

const simSpeed = document.getElementById("simSpeed");
document.getElementById("speedTxt").innerText = `${simSpeed.value} generations per second`;

let speed = simSpeed.value;
let interval;
let pause;

document.getElementById("startBtn").onclick = () => {
    generations = 0;
    clearInterval(interval);
    cells = populate(numCells);

    interval = setInterval(update, 1000 / speed);
    pause = setInterval(checkPause, 1);

    simSpeed.addEventListener("change", () => {
        speed = simSpeed.value;
        clearInterval(interval);
        interval = setInterval(update, 1000 / speed);
    }, false);
}

simSpeed.addEventListener("input", () => {
    document.getElementById("speedTxt").innerText = `${simSpeed.value} generations per second`;
}, false);

