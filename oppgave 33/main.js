const start = document.getElementById("start");
const stop = document.getElementById("stop");

let img = null;
let animate;

function init() {
  img = document.getElementById("myImg");
  img.style.position = "relative";
  img.style.left = "0px";
  img.style.top = "0px";
}

function move() {
  img.style.left = parseInt(img.style.left) + 10 + "px";
  img.style.top = parseInt(img.style.top) + 5 + "px";
}

function pause() {
  clearInterval(animate);
}

start.onclick = function () {
  animate = setInterval(move, 20);
};

stop.onclick = function () {
  pause();
};

window.onload = init;
