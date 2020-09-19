const img = document.getElementById("myImg");

function init() {
  img.style.position = "relative";
  img.style.left = "0px";
  img.style.top = "0px";
}

function move() {
  img.style.left = parseInt(img.style.left) + 10 + "px";
  img.style.top = parseInt(img.style.top) + 5 + "px";
  img.style.width = img.clientWidth + 1 + "px";
  img.style.height = img.clientHeight + 1 + "px";
}

window.onload = init;

setInterval(move, 20);