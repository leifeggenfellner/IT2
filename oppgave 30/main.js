let interval = 1000;
let offset = Date.now();

function delta() {
  let now = Date.now();
  let timePassed = now - offset;

  offset = now;
  console.log(timePassed - interval + " ms");
}

setInterval(delta, interval);
