let img = null;
let animate;

function init() {
  img = document.getElementById("myImg");
  img.style.position = "relative";
  img.style.left = "0px";
  img.style.top = "0px";
}

function moveRight() {
  img.style.left = parseInt(img.style.left) + 10 + "px";
  img.style.top = parseInt(img.style.top) + 5 + "px";
}

window.onload = init;

setInterval(moveRight, 20);
