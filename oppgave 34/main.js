const toggleBtn = document.getElementById("toggle");
let img = null;
let isOn = false;
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

toggleBtn.addEventListener("click", function () {
  if (!isOn) {
    animate = setInterval(move, 20);
    this.innerText = "Stop";
    isOn = true;
  } else {
    clearInterval(animate);
    this.innerText = "Start";
    isOn = false;
  }
});

window.onload = init;
